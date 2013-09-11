#!/bin/sh

echo
echo "Installing Gitreceive"
echo

cd /usr/local/bin
wget https://raw.github.com/progrium/gitreceive/master/gitreceive
chmod +x gitreceive
/usr/local/bin/gitreceive init

echo
echo "Installing Eternity"
echo

cd /home/git
git clone https://github.com/AVGP/eternity.git
cd eternity && npm install
chown -R git:git eternity

echo
echo "Setting up paths..."
echo
mkdir /var/repos
chown -R git:git /var/repos

echo 
echo "How to add your SSH key:"
echo 'cat ~/.ssh/id_rsa.pub | ssh you@yourserver.com "sudo gitreceive upload-key you"'
echo
