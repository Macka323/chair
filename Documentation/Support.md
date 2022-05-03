# Support



## Setup

### Enabling http static

First you will need to enable http static this can be done by changing the 102 line in `/home/pi/.node-red/settings.js`  with `httpStatic: '"the location where you put the files"',`  the default location is in `'/home/pi'`

### Activating root user

If you want to login as root using SSH or WinSCP you need to edit the config of SSHD, do this:

- Login, and edit this file: `sudo nano /etc/ssh/sshd_config`
- Find this line: `PermitRootLogin without-password`
- Edit: `PermitRootLogin yes`
- Close and save file
- `reboot` or restart sshd service using: `/etc/init.d/ssh restart`
- Set a root password if there isn't one already: `sudo passwd root`

Now you can login as `root`, but I recommend you using strong password or ssh-keys



## Connecting to network

### Via ethernet

1. If you are using Ethernet it should work, if it doesn't contact us

### Via Wi-Fi

#### If you have ethernet access 

##### Windows
1. Go to command prompt and type `ssh "your username"@"you ip addres on the network"` and press enter and login with you password
2. Type `sudo raspi-config` 
3. Go to System Options and then Warless LAN 
4. Type in your Wi-Fi credentials

#### If you don't have any network access
##### Windows 
1. Insert the MicroSD into your computer and locate the boot drive
2. In the boot drive make file named `wpa_supplicant.conf` 
3. And open the file with notepad and paste this code while changing the SSID and Password for your Wi-Fi

`ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev`
`update_config=1`
`country=<Insert 2 letter ISO 3166-1 country code here>`

`network={`
 `ssid="Name of your wireless LAN"`
 `psk="Password for your wireless LAN"`
`}`


## Nothing showing on the screen


1. reboot the chair 

2. if nothing changes 

3. check for the network connection of the chair 

4. if its not connected follow the steps for connection to the network