# How To Program Arduino From The Raspberry Pi Command Line

![img](https://siytek.com/wp-content/uploads/2020/04/Arduino-cli-Pi-header-scaled.jpg)

Did you know that the Arduino IDE can be run from the command line? This means that we can create and flash sketches using the Raspberry Pi terminal and this tutorial will guide you through the process step-by-step.

So why might it be super-useful to be able to flash Arduino from the Raspberry Pi Terminal? Firstly this allows us to flash Arduino devices with both Raspbian GUI and Raspbian headless (no GUI) installations.

Secondly it means we can make use of the built-in serial port available via the GPIO header. This is very handy for flashing devices that do not have a built in USB-to-serial adapter.



## Prerequisite

You will need a Raspberry Pi with the latest version of Raspbian installed, either the GUI or headless version will do just fine. If you need to install Raspbian then [go ahead and check out my Raspbian setup guide](https://siytek.com/how-to-install-raspbian-to-sd-card-using-etcher/).

You will also need a board compatible with Arduino connected to your Pi. You can either use a USB cable or you can wire your board directly to the onboard serial port.

If you plan on using the onboard serial port then you may want to check out [this section](https://siytek.com/how-to-flash-esp-devices-with-tasmota-using-raspberry-pi/#Set_up_the_Pi-2) of [this tutorial](https://siytek.com/how-to-flash-esp-devices-with-tasmota-using-raspberry-pi/) which explains how to setup the port. You may also need to manually reset your board as you begin the flashing process in order to put the board into bootloader mode.

## Configure Arduino

First we need to go ahead and access the Pi terminal. You can either use a screen, keyboard and mouse or you can [log in with SSH](https://siytek.com/how-to-install-raspbian-to-sd-card-using-etcher/#SSH_to_the_Pi). Once at the command prompt it is usually a good idea to update the system first so go ahead and enter the following.

```
sudo apt-get update && upgrade -y
```

### Install Arduino-cli

Once the update has finished we can install the Arduino command line tools. Just enter the following command to run the installation script, which will download and install Arduino-cli.

```
curl -fsSL https://raw.githubusercontent.com/arduino/arduino-cli/master/install.sh | sh
```

Go ahead and test the install by entering the *arduino-cli* command, it should produce a list of available commands.

```
arduino-cli
```

### Adding to $PATH

If you get an error stating that *arduino-cli* cannot be found, you will probably need to add the path of the containing folder to *.bashrc* so go ahead and open it with nano.

```
nano ~/.bashrc
```

Next add the following line to the end of the file. You should only need to change the path if you altered it during the installation.

```
export PATH=$PATH:/home/pi/bin
```

Press *ctrl + X* to save and close the file, then reboot the Pi and the *arduino-cli* command should work upon rebooting back to the command line.

```
sudo reboot
```

### Create a configuration file

Once the installation script has completed we will first need to create a configuration file using the following command.

```
arduino-cli config init
```

This will create a configuration YAML file and echo the path in which the file was created.

![img](https://siytek.com/wp-content/uploads/2020/04/image-124-1024x752.png)

Now we need to create our first sketch to upload. There is some further configuration required so for now we will just create a basic blink sketch in order to complete the configuration.

## Create a new sketch

Go ahead and enter the following command, it will create a new sketch folder within the current folder. For simplicity I will stick to the Pi user home directory.

```
arduino-cli sketch new blink
```

This will create a blank boilerplate code that we can open and add the blink code to. Go ahead and enter the following to edit the file in nano, or feel free to use a different editor if you prefer.

```
nano blink/blink.ino
```

Once the file has opened, go ahead and add the blink code. You may need to specify the LED pin differently depending on your board. Once you have added the code, go ahead and press *ctrl + X* to exit and save the file.

```
void` `setup``() {``  ``pinMode``(LED_BUILTIN, ``OUTPUT``);``}` `void` `loop``() {``  ``digitalWrite``(LED_BUILTIN, ``HIGH``);``  ``delay``(``1000``);``  ``digitalWrite``(LED_BUILTIN, ``LOW``);``  ``delay``(``1000``);``}
```

## Connecting the board

Next we need to connect the board and update the available platforms and libraries by entering the following command.

```
arduino-cli core update-index
```

We can now search for the board to see if it has been recognised.

```
arduino-cli board list
```

The output should present a list of recognised serial ports with some information about the board. We are interested in the *FQBN* and *core* *values*.

![img](https://siytek.com/wp-content/uploads/2020/04/image-126-1024x752.png)

In the output above there are two boards connected to the Pi as well as the standard UART port available on the GPIO header. The UART port */dev/ttyAMA0* currently displays “unknown” as there is nothing connected to it.

However you may notice that */dev/ttyUSB0* also displays “unknown” despite there being an Arduino compatible board connected. This is not a problem and the board should flash correctly but we will need to look up the information manually.

```
arduino-cli board listall
```

In my case the unknown board connected to */dev/ttyUSB0* is a Wemos D1 Mini Lite and here we can lookup the FQBN. If you do not see your board listed then you will need to add the 3rd party core.

![img](https://siytek.com/wp-content/uploads/2020/04/image-127-1024x865.png)

### Adding a 3rd party core

If you are using a board that requires a 3rd party core such as boards that use the ESP8266 chip, we need to add the core URL to the configuration file. Go ahead and open up the configuration file in your favorite text editor.

nano ~/.arduino15/arduino-cli.yaml

You can add the URL for each core you wish to install under *board_manager* and *additional_urls*. Don’t forget that YAML is sensitive to case and spacing so they must be correct in order to produce suitable syntax.

```
board_manager:`` ``additional_urls:`` ``-` `https``:``//arduino.esp8266.com/stable/package_esp8266com_index.json`` ``-` `http``:``//another-url-here...``daemon:`` ``port:` `"50051"``directories:`` ``data:` `/home/pi/.arduino15`` ``downloads:` `/home/pi/.arduino15/staging`` ``user:` `/home/pi/Arduino``logging:`` ``file:` `""`` ``format:` `text`` ``level:` `info
```

Once you have added the URL, go ahead and press *ctrl + X* to close and save the file. Next we need to update the core index to tell the Arduino-cli about the newly added core.

```
arduino-cli core update-index
```

You can confirm that the core has successfully been added with the following command. Don’t forget the replace the core name you are searching for if different from esp8266.

```
arduino-cli core search esp8266
```

![img](https://siytek.com/wp-content/uploads/2020/04/image-129-1024x527.png)

## Uploading the sketch

Ok we are done with the configuration and now we can compile and upload the sketch!

### Compile

First we will compile the sketch using the following code. You should enter the values according to your board and the sketch you wish to compile.

```
arduino-cli compile --fbqn <fbqn> <sketch>
```

I am going to flash the Wemos D1 Mini Lite with the sketch we created earlier called *blink*, therefore the compilation will be executed with the following.

```
arduino-cli compile --fqbn esp8266:esp8266:d1_mini_lite blink
```

### Flashing

Once the compile process has finished we are finally ready to flash our board! This is done with the following command, now also specifying the port that your board is connected to.

```
arduino-cli upload -p <port> --fqbn <fqbn> <sketch>
```

To flash this to the Wemos D1 Mini I will use the following command but you should use the values relevant to your setup.

```
arduino-cli upload -p /dev/ttyUSB0 --fqbn esp8266:esp8266:d1_mini_lite blink
```

## Adding libraries

Now that you have flashed the blink sketch you are probably going to want to flash something a little more complex. This may require the use of external libraries, which you are probably familiar with from the standard graphical IDE.

Just like in the GUI version of the IDE, you can search for libraries with the following command.

```
arduino-cli lib search <library>
```

![img](https://siytek.com/wp-content/uploads/2020/04/image-137-1024x658.png)

Once you have found a library you wish to add, you can add it using the following command.

```
arduino-cli lib install <library>
```

![img](https://siytek.com/wp-content/uploads/2020/04/image-139-1024x658.png)