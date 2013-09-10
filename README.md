eternity
========

Very simple, git-based Node.js deployment based on GitReceive and Forever

#How to use

3. To set up your repo for deployment do ``git remote add server git@YOURSERVER:your_repo.git``
4. To deploy do a ``git push server``

Enjoy!

#Simple setup (recommended)

# Manual setup
First, you need to install [GitReceive](https://github.com/progrium/gitreceive).
Make sure you ran the ``gitreceive init``.

Replace the ``/home/git/receiver`` with ``receiver`` from this repository.

Create a repository directory at ``/var/repos`` and change the owner to ``git``:
```
$ mkdir /var/repos
$ chown -R git:git /var/repos
```

Users need to copy their public key to the server:
```
$ cat ~/.ssh/id_rsa.pub | ssh you@yourserver.com "sudo gitreceive upload-key <username>"
```

Clone this repository into ``/home/git``.
