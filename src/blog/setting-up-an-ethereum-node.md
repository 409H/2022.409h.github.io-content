---
slug: "setting-up-an-ethereum-node"
title: "Setting up an Ethereum node"
date: 2017-06-08 22:12:34 +0100
type: blog
comments: true
hidden: false
---

The following will take you through my steps of setting up an Ethereum node, then spawning an RPC server to be able 
to use (primarily) [web3.js](http://harrydenley.com) to communicate with the blockchain. I won't be going into the topic
of mining, as I'm not so interested in that and the server provider doesn't support it.

#### Starting Steps

First you need to get a server. I have mine over at [DigitalOcean](https://m.do.co/c/b1c2c28c6822) which is a great service
and offers great support.

My Ethereum server is a Ubuntu 16.04.2 x64, 2GB RAM, 40GB Disk. It runs very well.

Choose your server build and wait for it to be built. Once it has, use an SSH tool (such as [PuTTY](http://www.putty.org/) 
or [MobaXterm](https://mobaxterm.mobatek.net/)) to log into the server (you'll be emailed the `root` password.)

#### Installing Geth

Geth is the Ethereum client implementation in Golang.

First you need to install the dependencies and repositories.

```
sudo apt-get install software-properties-common
sudo apt-get-repository -y ppa:ethereum/ethereum
sudo add-get-repository -y ppa:ethereum/ethereum
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install ethereum
```

Once this is installed, run `geth console` and you should get some messages about syncing with the chain - this can take
some time, but leave it running.

#### Monitoring the process with Supervisord

In case the process (syncing, rpc-server) process stops, we will make use of `supervisord` to monitor it and restart it.
Supervisord installation is done by `apt-get`.

```
apt-get install supervisor
```

Once this is installed, we will add a "program" to run the RPC server for us. 

```
vi /etc/supervisor/conf.d/geth.conf
```

And paste the following into it;

```
[program:geth]
command=/usr/bin/geth --fast --rpc --rpcaddr 0.0.0.0 --rpcport 8545 --rpccorsdomain * --rpcapi admin,db,eth,debug,net,txpool,personal,web3
autostart=true
autorestart=true
stderr_logfile=/var/log/supervisor/geth.err.log
stdout_logfile=/var/log/supervisor/geth.out.log
```

This will run the command to sync with the blockchain fast, and allow RPC calls to be made. Once it's setup, run `supervisorctl reload`
to restart supervisor and the process should be running.

#### And we're done...

That's it. You now have a syncing Ethereum node (without the mining - since it's disallowed with DigitalOcean) and 
giving you to ability to make RPC calls to interact with the chain.