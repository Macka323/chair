#include <FastLED.h>
#define NUM_LEDS 30
#define PIN 4
CRGB leds[NUM_LEDS];
int serialdata;
int x[4];
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


void setup() {
  Serial.begin(38400);
  Serial.setTimeout(5);
  FastLED.addLeds<WS2812B, PIN, GRB>(leds, NUM_LEDS);
}

void loop() {
  serialin();
  serialout();
}

void serialin(){
if (Serial.available() > 0) {
    serialdata = Serial.parseInt();

    if (serialdata >= 1 && serialdata <= 256) {
      x[0] = serialdata;
      x[0] -= 1;
    }
    if (serialdata >= 257 && serialdata <= 512) {
      x[1] = serialdata;
      x[1] = x[1] - 257;
    }
    if (serialdata >= 513 && serialdata <= 768) {
      x[2] = serialdata;
      x[2] = x[2] - 513;
    }
    if (serialdata >= 769 && serialdata <= 1024) {
      x[3] = serialdata;
      x[3] = x[3] - 769;
    }
    if (serialdata == 1025) {
      int EyeSize = 5;
      int SpeedDelay = 70;
      int ReturnDelay = 50;
      OutsideToCenter(x[1], x[2], x[3], EyeSize, SpeedDelay, ReturnDelay);
      CenterToOutside(x[1], x[2], x[3], EyeSize, SpeedDelay, ReturnDelay);
      Serial.println("2025");
    }
    if (serialdata == 1026) {
      setAll(0, 0, 0);
      int a = NUM_LEDS / 2;
      int b = NUM_LEDS / 2;
      int SpeedDelay = 70;
      for (int n = 0; n < (NUM_LEDS / 2) + 1; n++) {
        setPixel(a, x[1], x[2], x[3]);
        setPixel(b, x[1], x[2], x[3]);
        a += 1;
        b -= 1;
        showStrip();
        delay(SpeedDelay);
      }
      Serial.println("2026");
    }
    if (serialdata == 1027) {
      setAll(0, 0, 0);
    }
  }
  serialout();
}

void serialout(){
  Serial.print("a.");
  Serial.println(analogRead(sensor_1));
  delay(5); 
  Serial.print("b.");
  Serial.println(analogRead(sensor_2));
  delay(5); 
  Serial.print("c.");
  Serial.println(analogRead(sensor_3));
  delay(5); 
  Serial.print("d.");
  Serial.println(analogRead(sensor_4));
  delay(5); 
  Serial.print("e.");
  Serial.println(analogRead(sensor_5));
  delay(5); 
  Serial.print("f.");
  Serial.println(analogRead(sensor_6));
  delay(5); 
  Serial.print("g.");
  Serial.println(analogRead(sensor_7));
  delay(5); 
  Serial.print("h.");
  Serial.println(analogRead(sensor_8));
  delay(5); 
  Serial.print("i.");
  Serial.println(analogRead(sensor_9));
  delay(5);
  Serial.print("j.");
  Serial.println(analogRead(battery));
  delay(5);
}

void CenterToOutside(byte red, byte green, byte blue, int EyeSize, int SpeedDelay, int ReturnDelay) {
  for (int i = ((NUM_LEDS - EyeSize) / 2); i >= 0; i--) {
    setAll(0, 0, 0);

    setPixel(i, red / 10, green / 10, blue / 10);
    for (int j = 1; j <= EyeSize; j++) {
      setPixel(i + j, red, green, blue);
    }
    setPixel(i + EyeSize + 1, red / 10, green / 10, blue / 10);

    setPixel(NUM_LEDS - i, red / 10, green / 10, blue / 10);
    for (int j = 1; j <= EyeSize; j++) {
      setPixel(NUM_LEDS - i - j, red, green, blue);
    }
    setPixel(NUM_LEDS - i - EyeSize - 1, red / 10, green / 10, blue / 10);

    showStrip();
    delay(SpeedDelay);
  }
  delay(ReturnDelay);
}

void OutsideToCenter(byte red, byte green, byte blue, int EyeSize, int SpeedDelay, int ReturnDelay) {
  for (int i = 0; i <= ((NUM_LEDS - EyeSize) / 2); i++) {
    setAll(0, 0, 0);

    setPixel(i, red / 10, green / 10, blue / 10);
    for (int j = 1; j <= EyeSize; j++) {
      setPixel(i + j, red, green, blue);
    }
    setPixel(i + EyeSize + 1, red / 10, green / 10, blue / 10);

    setPixel(NUM_LEDS - i, red / 10, green / 10, blue / 10);
    for (int j = 1; j <= EyeSize; j++) {
      setPixel(NUM_LEDS - i - j, red, green, blue);
    }
    setPixel(NUM_LEDS - i - EyeSize - 1, red / 10, green / 10, blue / 10);

    showStrip();
    delay(SpeedDelay);
  }
  delay(ReturnDelay);
}

void showStrip() {
#ifdef ADAFRUIT_NEOPIXEL_H
  // NeoPixel
  strip.show();
#endif
#ifndef ADAFRUIT_NEOPIXEL_H
  // FastLED
  FastLED.show();
#endif
}

void setPixel(int Pixel, byte red, byte green, byte blue) {
#ifdef ADAFRUIT_NEOPIXEL_H
  // NeoPixel
  strip.setPixelColor(Pixel, strip.Color(red, green, blue));
#endif
#ifndef ADAFRUIT_NEOPIXEL_H
  // FastLED
  leds[Pixel].r = red;
  leds[Pixel].g = green;
  leds[Pixel].b = blue;
#endif
}

void setAll(byte red, byte green, byte blue) {
  for (int i = 0; i < NUM_LEDS; i++) {
    setPixel(i, red, green, blue);
  }
  showStrip();
}