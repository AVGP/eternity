var forever  = require('forever'),
    argv     = require('optimist').argv;


if(!argv.repoPath) {
  console.error("NO --repoPath GIVEN. THY SHALL NOT PASS!");
  process.exit(1);
}

console.log("Looking for " + argv.repoPath + "/app.js in running processes");

function findProcessByPath(path, foundCallback, noMatchCallback) {
  forever.list(false, function(err, list) {
    if(err) {
      console.error("Uh oh, error in listing: ", err);
      return 1;
    }

    var found = false;
    if(list) {
      list.forEach(function(item, index) {    
        if(item.sourceDir == path) {
          foundCallback(item, index);
          found = true;
        }
      });
    }
    if(!found) {
      noMatchCallback();
    }
  });
}

findProcessByPath(argv.repoPath, function found(item, index) {
  console.log("Restarting " + item.uid);
  forever.restart(index, false);
}, function notFound() {
  console.log("Starting new process...");
  forever.startDaemon("app.js", {sourceDir: argv.repoPath});
});

