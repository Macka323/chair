Serial 

Controlling the LEDs
First chose the LEDs, the LEDs can be controlled via the serial by sending value from 1-256;

Now to set the RGB value:
to set the R value send value from 257-512;
to set the G value send value from 513-768;
to set the B value send value from 769-1024;

There is also an animation back and fourth when the chair is idle.
to activate this mode you need the send 1025 via the serial;
to change the color of this mode imply send the RGB values before starting this mode;
to deactivate this mode simply put any other number from 1-256;

**NOTE** (you need to send 1025 again after the animation is finished)

This can be automated by reading from the serial 2026 and then sending 1025 to start the animation again

| Input  | Output |
| ------ | ------ |
| 1-1999 | 2000<= |

| 1    |      | 2    |      | 3    |      | 4    |      |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1    | 256  | 257  | 512  | 513  | 768  | 769  | 1024 |

| Mode | How it looks                                                 |
| ---- | ------------------------------------------------------------ |
| 1025 | ![image-20210312093704131](https://github.com/Macka323/chair/blob/main/images/Screenshot%202021-03-12%2009372.png?raw=true) |
| 1026 | ![Screenshot 2021-03-12 093729.png](https://github.com/Macka323/chair/blob/main/images/Screenshot%202021-03-12%20093729.png?raw=true) |
| 1027 | clear all LED                                                |
|      |                                                              |

| Output | Details                 |
| ------ | ----------------------- |
| 2025   | when mode 1025 finished |
| 1026   | when mode 1026 finished |
|        |                         |

