---
slug: "another-mysql-daemon-already-running-with-the-same-unix-socket"
title: "Another MySQL daemon already running with the same unix socket"
date: 2014-07-02 17:51:09 +0100
type: blog
meta_img: /images/another-mysql-daemon-already-running-with-the-same-unix-socket/meta.png 
comments: true
hidden: false
---

I recently had the experience of a server shutting down ungracefully, and caused MySQL to completely fall over and die. After executing `service mysqld status`, it showed that `mysqld` was not running;

```
# service mysqld status
mysqld is stopped
```

So, I needed to start it;

```
# service mysqld start
Another MySQL daemon already running with the same unix socket.
Starting mysqld:                                           [FAILED]
```

Wut. (*Exactly!*)

### To fix this issue!

 * Remove the `mysql.sock` file (as it thinks it's running, but it's not - because of the ungraceful shutdown)
 * Start the service
 
#### Where is the .sock file?!
  * Typically located at `/var/lib/mysql/mysql.sock`
    * If it's not there, execute `locate mysql.sock`
    
#### How do I remove it?
  * Run the following; `rm /var/lib/mysql/mysql.sock`
  * If you wish to create a backup, run the following; `mv /var/lib/mysql/mysql.sock /var/lib/mysql/mysql.sock.backup`
  
  
#### Final step, start MySQL!
  * To start MySQL, run; `service mysqld start`
  
 