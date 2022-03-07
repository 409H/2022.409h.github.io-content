---
slug: "copying-remote-files-to-local-machine"
title: "Copying remote files to local machine"
date: "2014-06-21 16:06:46 +0100"
type: blog
meta_img: /images/.common/meta.png
meta_desc: ""
comments: true
hidden: false
---

I recently bought a mac, and i prefer to my Windows machine, as I wasn't a fan of Win8. As I don't keep my databases within my central version control server, I had to manually copy them down from production, to my local machine (to complete my development environment set-up.)

To do this, I had to first get a backup of all my MySQL databases;

 * Log into your server via SSH;
 
 `ssh user@server`
 
 * Go into your backup directory;
 
 `cd /home/harrydenley/Backups/`
 
 * Perform a mysqldump;
 
 `mysqldump --all-databases -uroot -p > backup.sql`
 
 Now we've got a backup of all our MySQL databases, we're going to want to copy them down into our local machine.
 
 First, we need to create a SSH key on our local machine, and add it to `~/.ssh/authorised_keys` on our remote server.
 
 * On our local machine, navigate your way to the `.ssh` directory;
  
  `cd ~/.ssh`
  
 * Now, create a RSA key;

  `ssh-keygen -t rsa`
  
 * And finally, copy the contents of `id_rsa.pub` to your clipboard;
 
 `cat id_rsa.pub`
 
 So now that we've generated our key on our local machine, we need our remote server to authorise it.
 
 Log into your remote server (`ssh user@server`) and perform the following;
 
 * Navigate to `~./ssh`
  
   `cd ~/.ssh/`
   
* And paste the contents of the clipboard (this is your `id_rsa.pub` file) into the file `authorized_keys`.


#### Now that our remote server has been configured, we can now copy the files to our local machine using `scp`.

On our local machine, we can run the following to copy our remote files down to our local machine;
  
`scp -r user@server:/path/to/backup /Users/harrydenley/Desktop/`

You will be prompted for your RSA key password (from when we generated it earlier), and once confirmed, the files will start to copy down to your local machine!