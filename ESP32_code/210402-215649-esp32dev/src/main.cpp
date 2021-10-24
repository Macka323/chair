#include <FastLED.h>
#define NUM_LEDS 63
#define PIN 14
CRGB leds[NUM_LEDS];
int serialdata;
int x[4];
const int sensor_1 = 36;
const int sensor_2 = 39;
const int sensor_3 = 34;
const int sensor_4 = 35;
const int sensor_5 = 32;
const int sensor_6 = 33;
const int sensor_7 = 25;
const int sensor_8 = 26;
const int sensor_9 = 27;
const int battery = 13;
const int LED_2 = 2;
TaskHandle_t SensRead;

// fast led cyclon e za rainbow 

void showStrip();
void setPixel(int Pixel, byte red, byte green, byte blue);
void codeForSensRead(void * parameter);
void serialout();
void loop();
void serialin();
void CenterToOutside(byte red, byte green, byte blue, int EyeSize, int SpeedDelay, int ReturnDelay);
void OutsideToCenter(byte red, byte green, byte blue, int EyeSize, int SpeedDelay, int ReturnDelay);
void fadeall();
void Rainbow();


void setup() {
  Serial.begin(38400);
  Serial.setTimeout(5);
  FastLED.addLeds<WS2812B, PIN, GRB>(leds, NUM_LEDS);

  xTaskCreatePinnedToCore(
    codeForSensRead,            /* Task function. */
    "SensRead",                 /* name of task. */
    1000,                    /* Stack size of task */
    NULL,                     /* parameter of the task */
    1,                        /* priority of the task */
    &SensRead,                   /* Task handle to keep track of created task */
    0);                       /* Core */

pinMode(36, INPUT);
pinMode(39, INPUT);
pinMode(34, INPUT);
pinMode(35, INPUT);
pinMode(32, INPUT);
pinMode(33, INPUT);
pinMode(25, INPUT);
pinMode(26, INPUT);
pinMode(27, INPUT);
pinMode(13, INPUT);
pinMode(2, OUTPUT);


}

void showStrip() {
  FastLED.show();
}

void setPixel(int Pixel, byte red, byte green, byte blue) {
  leds[Pixel].r = red;
  leds[Pixel].g = green;
  leds[Pixel].b = blue;
}

void setAll(byte red, byte green, byte blue) {
  for (int i = 0; i < NUM_LEDS; i++) {
    setPixel(i, red, green, blue);
  }
  showStrip();
}

void codeForSensRead(void * parameter){
  for(;;){
    serialout();
  }
}
void serialout() {
  Serial.print("a.");
  Serial.println(map(analogRead(sensor_1),0,4095,500,0));
  delay(5); 
  Serial.print("b.");
  Serial.println(map(analogRead(sensor_2),0,4095,500,0));
  delay(5); 
  Serial.print("c.");
  Serial.println(map(analogRead(sensor_3),0,4095,500,0));
  delay(5); 
  Serial.print("d.");
  Serial.println(map(analogRead(sensor_4),0,4095,500,0));
  delay(5); 
  Serial.print("e.");
  Serial.println(map(analogRead(sensor_5),0,4095,500,0));
  delay(5); 
  Serial.print("f.");
  Serial.println(map(analogRead(sensor_6),0,4095,500,0));
  delay(5); 
  Serial.print("g.");
  Serial.println(map(analogRead(sensor_7),0,4095,500,0));
  delay(5); 
  Serial.print("h.");
  Serial.println(map(analogRead(sensor_8),0,4095,500,0));
  delay(5); 
  Serial.print("i.");
  Serial.println(map(analogRead(sensor_9),0,4095,500,0));
  delay(5);
  Serial.print("j.");
  Serial.println(analogRead(battery));
  delay(5);
}

void loop() {
  serialin();
  
}

void serialin() {
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
       // Serial.println("2025");
      OutsideToCenter(x[1], x[2], x[3], EyeSize, SpeedDelay, ReturnDelay);
      CenterToOutside(x[1], x[2], x[3], EyeSize, SpeedDelay, ReturnDelay);
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
      while (Serial.available()>0){
        Serial.read();
      }
      // Serial.println("2026");
    }
    if (serialdata == 1027) {
      setAll(0, 0, 0);
    }
  }
  
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
  while(Serial.available()>0){
    Serial.read();
  }
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
  while(Serial.available()>0){
    Serial.read();
  }
}

void Rainbow(){
  static uint8_t hue = 0;
	// First slide the led in one direction
	for(int i = 0; i < NUM_LEDS; i++) {
		// Set the i'th led to red 
		leds[i] = CHSV(hue++, 255, 255);
		// Show the leds
		FastLED.show(); 
		// now that we've shown the leds, reset the i'th led to black
		// leds[i] = CRGB::Black;
		fadeall();
		// Wait a little bit before we loop around and do it again
		delay(10);
	}

	// Now go in the other direction.  
	for(int i = (NUM_LEDS)-1; i >= 0; i--) {
		// Set the i'th led to red 
		leds[i] = CHSV(hue++, 255, 255);
		// Show the leds
		FastLED.show();
		// now that we've shown the leds, reset the i'th led to black
		// leds[i] = CRGB::Black;
		fadeall();
		// Wait a little bit before we loop around and do it again
		delay(10);
	}
}

void fadeall() { for(int i = 0; i < NUM_LEDS; i++) { leds[i].nscale8(250); } }