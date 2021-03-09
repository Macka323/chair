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

NOTE (you need to send 1025 again after the animation is finished)

This can be automated by reading from the serial 1026 and then sending 1025 to start the animation again