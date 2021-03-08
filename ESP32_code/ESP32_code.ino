const int sensor_1=36;
const int sensor_2=39;
const int sensor_3=34;
const int sensor_4=35;
const int sensor_5=32;
const int sensor_6=33;
const int sensor_7=25;
const int sensor_8=26;
const int sensor_9=27;
const int battery=14;
int x[4];
int serialdata = 0;

#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
#include <avr/power.h> // Required for 16 MHz Adafruit Trinket
#endif
#define PIN        2 
#define NUMPIXELS 16 
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);
#define DELAYVAL 500 

void setup(){
  Serial.begin(38400);
  Serial.setTimeout(10);
  
  #if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)
  clock_prescale_set(clock_div_1);
  #endif
  pixels.begin(); 
}

void loop(){
  Serial.print("a.");
  Serial.println(analogRead(sensor_1));
  delay(50); 
  Serial.print("b.");
  Serial.println(analogRead(sensor_2));
  delay(50); 
  Serial.print("c.");
  Serial.println(analogRead(sensor_3));
  delay(50); 
  Serial.print("d.");
  Serial.println(analogRead(sensor_4));
  delay(50); 
  Serial.print("e.");
  Serial.println(analogRead(sensor_5));
  delay(50); 
  Serial.print("f.");
  Serial.println(analogRead(sensor_6));
  delay(50); 
  Serial.print("g.");
  Serial.println(analogRead(sensor_7));
  delay(50); 
  Serial.print("h.");
  Serial.println(analogRead(sensor_8));
  delay(50); 
  Serial.print("i.");
  Serial.println(analogRead(sensor_9));
  delay(50);
  Serial.print("j.");
  Serial.println(analogRead(battery));
  delay(50);

  serialdata = Serial.parseInt();
  if (serialdata >= 1 && serialdata <= 256) {
      x[0] = serialdata;
      x[0] -= 1;
    }
    if (serialdata >= 257 && serialdata <= 512) {
      x[1] = serialdata;
      x[1]=x[1]-257;
    }
    if (serialdata >= 513 && serialdata <= 768) {
      x[2] = serialdata;
      x[2]=x[2]-513;
    }
    if (serialdata >= 769 && serialdata <= 1024) {
      x[3] = serialdata;
      x[3]=x[3]-769;
    }

    pixels.clear(); 

    pixels.setPixelColor(x[0], pixels.Color(x[1], x[2], x[3]));
    pixels.show();   

    delay(50);
  
}
