# Documentation
## Dashboard
### Dashboard (dashboard)

The basic UI design
In the firs window or the dashboard we can se the chair and the sensor values presented by the color of the box where the sensor is on the chair. If the box lights up green that meant that you are sitting property but if the sensor lights up red that means that you are not sitting property. 

![image-20210211160359658](https://github.com/Macka323/chair/blob/main/images/image-20210211160359658.png?raw=true) - not sitting property

![image-20210211161725392](https://github.com/Macka323/chair/blob/main/images/image-20210211161725392.png?raw=true) - not sitting property

![image-20210211155147449](https://github.com/Macka323/chair/blob/main/images/image-20210211155147449.png?raw=true)- sitting property

### Dashboard (status)

On the dashboard there is group called status, there you can find information about the status of the chair like how much time you have left to sit again on the chair or how much you have been sitting. And you have an indicator that show if you can sit on the chair. If the indicator is green that means they you are good to go you can sit on the chair, but if the indicator is red that means that you can't sit. 

## Status 

In the status page you can see the overall stats of the chair

- how well have you being sitting and score for sitting better


## Settings

### Setting (visual settings)

in the visual settings you can find 
- view mode (switches the left and the right side of the sensor for inverted view)

- light mode (chose between light or dark mode)


### Settings (general settings)

Manual time for sitting ( this changes how much you can sit on the chair in minutes ) you can chose from 0-90 minutes and the rest time is automatically configured for your own health
the ratio for rest time is 6:1 that means if you chose to sit 30 min you have to test minimum of 5 min and so on and so on.

There is also a button for default time for sitting which is set 30 min for sitting and 5 min for rest, and the extended time for sitting which means that you can sit for 60 min or 1 hour and you have to rest for 10 min.

You have buttons for stopping or restarting the system and buttons for powering off or restarting the electronics.


# Support

## Connecting to network

### Via ethernet

  

### Via Wi-Fi

#### If you have ethernet access 

##### Windows
1. Go to command prompt and type `ssh <your username>@<you ip addres on the network>` and press enter and login with you password
2. Type `sudo raspi-config` 
3. Go to System Options and then Warless LAN 
4. Type in your Wi-Fi credentials

#### If you don't have any network access
##### Windows 
1. Insert the MicroSD into your computer and locate the boot drive
2. In the boot drive make file named `wpa_supplicant.conf` 
3. And open the file with notepad and paste this code while changing the SSID and Password for your Wi-Fi

`ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=<Insert 2 letter ISO 3166-1 country code here>

network={
 ssid="<Name of your wireless LAN>"
 psk="<Password for your wireless LAN>"
}


## Nothing showing on the screen


1. reboot the chair 

2. if nothing changes 

3. check for the network connection of the chair 

4. if its not connected follow the steps for connection to the network

