// this code is for the sensors and LED strip
// v1
// recive values from rgb + brightness
// |r|g|b|brightness|
// |0-255|256-511|512-767|768-|1023|
// commands for led effect
// 1051 - rainbow
// 1053 || 1054 - center to outside
// 1055 - snake outside to center and vice viera
// 1057 - clear

#include <FastLED.h>
#define NUM_LEDS 59
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
TaskHandle_t SensRead;

// fast led cyclon e za rainbow

void showStrip();
void setPixel(int Pixel, byte red, byte green, byte blue);
void codeForSensRead(void *parameter);
void serialout();
void loop();
void serialin();
void CenterToOutside(byte red, byte green, byte blue, int EyeSize, int SpeedDelay, int ReturnDelay);
void OutsideToCenter(byte red, byte green, byte blue, int EyeSize, int SpeedDelay, int ReturnDelay);
void fadeall();
void Rainbow();

void setup()
{
  Serial.begin(115200);
  Serial.setTimeout(5);
  FastLED.addLeds<WS2812B, PIN, GRB>(leds, NUM_LEDS);

  xTaskCreatePinnedToCore(
      codeForSensRead, /* Task function. */
      "SensRead",      /* name of task. */
      1000,            /* Stack size of task */
      NULL,            /* parameter of the task */
      1,               /* priority of the task */
      &SensRead,       /* Task handle to keep track of created task */
      0);              /* Core */

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

  x[3]=60;
}

void showStrip()
{
  FastLED.show();
}

void setPixel(int Pixel, byte red, byte green, byte blue)
{
  leds[Pixel].r = red;
  leds[Pixel].g = green;
  leds[Pixel].b = blue;
}

void setAll(byte red, byte green, byte blue)
{
  for (int i = 0; i < NUM_LEDS; i++)
  {
    setPixel(i, red, green, blue);
  }
  showStrip();
}

void codeForSensRead(void *parameter)
{
  for (;;)
  {
    serialout();
   
  }
}
void serialout()
{
  Serial.print("a.");
  Serial.println(map(analogRead(sensor_1), 0, 4095, 500, 0));
  delay(5);
  Serial.print("b.");
  Serial.println(map(analogRead(sensor_2), 0, 4095, 500, 0));
  delay(5);
  Serial.print("c.");
  Serial.println(map(analogRead(sensor_3), 0, 4095, 500, 0));
  delay(5);
  Serial.print("d.");
  Serial.println(map(analogRead(sensor_4), 0, 4095, 500, 0));
  delay(5);
  Serial.print("e.");
  Serial.println(map(analogRead(sensor_5), 0, 4095, 500, 0));
  delay(5);
  Serial.print("f.");
  Serial.println(map(analogRead(sensor_6), 0, 4095, 500, 0));
  delay(5);
  Serial.print("g.");
  Serial.println(map(analogRead(sensor_7), 0, 4095, 500, 0));
  delay(5);
  Serial.print("h.");
  Serial.println(map(analogRead(sensor_8), 0, 4095, 500, 0));
  delay(5);
  Serial.print("i.");
  Serial.println(map(analogRead(sensor_9), 0, 4095, 500, 0));
  delay(5);
}

void loop()
{
  serialin();
}

void serialin()
{
  if (Serial.available() > 0)
  {
   // Serial.print("values  ");
    serialdata = Serial.parseInt();
    //Serial.println(serialdata);
    if (serialdata >= 0 && serialdata <= 255)
    {
      x[0] = serialdata;
     
    }
    if (serialdata >= 256 && serialdata <= 511)
    {
      x[1] = serialdata;
      x[1] = x[1] - 256;
    }
    if (serialdata >= 512 && serialdata <= 767)
    {
      x[2] = serialdata;
      x[2] = x[2] - 512;
    }
     if (serialdata >= 768 && serialdata <= 1023)
     {
       x[3] = serialdata;
       x[3] = x[3] - 768;
       FastLED.setBrightness(x[3]);
     }
    if (serialdata == 1051)
    {
      Rainbow();
    }
    if (serialdata == 1053 || serialdata == 1054)
    {
     // Serial.println("1053-1054 start");
      setAll(0, 0, 0);
      int a = NUM_LEDS / 2;
      int b = NUM_LEDS / 2;
      int SpeedDelay = 70;
      for (int n = 0; n < (NUM_LEDS / 2) + 1; n++)
      {
        setPixel(a, x[0], x[1], x[2]);
        setPixel(b, x[0], x[1], x[2]);
        a += 1;
        b -= 1;
        showStrip();
        delay(SpeedDelay);
      }
      while (Serial.available() > 0)
      {
        Serial.read();
      }
      // Serial.println("1053-1054 end");
    }
    if (serialdata == 1055)
    {
     //  Serial.println("1055 start");
      int EyeSize = 5;
      int SpeedDelay = 70;
      int ReturnDelay = 50;
      
      CenterToOutside(x[0], x[1], x[2], EyeSize, SpeedDelay, ReturnDelay);
      OutsideToCenter(x[0], x[1], x[2], EyeSize, SpeedDelay, ReturnDelay);
     //  Serial.println("1055 end");
    }

    if (serialdata == 1057)
    {
      setAll(0, 0, 0);
    }
  }
}
void CenterToOutside(byte red, byte green, byte blue, int EyeSize, int SpeedDelay, int ReturnDelay)
{
  for (int i = ((NUM_LEDS - EyeSize) / 2); i >= 0; i--)
  {
    setAll(0, 0, 0);

    setPixel(i, red / 10, green / 10, blue / 10);
    for (int j = 1; j <= EyeSize; j++)
    {
      setPixel(i + j, red, green, blue);
    }
    setPixel(i + EyeSize + 1, red / 10, green / 10, blue / 10);

    setPixel(NUM_LEDS - i, red / 10, green / 10, blue / 10);
    for (int j = 1; j <= EyeSize; j++)
    {
      setPixel(NUM_LEDS - i - j, red, green, blue);
    }
    setPixel(NUM_LEDS - i - EyeSize - 1, red / 10, green / 10, blue / 10);

    showStrip();
    delay(SpeedDelay);
  }
  delay(ReturnDelay);
  while (Serial.available() > 0)
  {
    Serial.read();
  }
}

void OutsideToCenter(byte red, byte green, byte blue, int EyeSize, int SpeedDelay, int ReturnDelay)
{
  for (int i = 0; i <= ((NUM_LEDS - EyeSize) / 2); i++)
  {
    setAll(0, 0, 0);

    setPixel(i, red / 10, green / 10, blue / 10);
    for (int j = 1; j <= EyeSize; j++)
    {
      setPixel(i + j, red, green, blue);
    }
    setPixel(i + EyeSize + 1, red / 10, green / 10, blue / 10);

    setPixel(NUM_LEDS - i, red / 10, green / 10, blue / 10);
    for (int j = 1; j <= EyeSize; j++)
    {
      setPixel(NUM_LEDS - i - j, red, green, blue);
    }
    setPixel(NUM_LEDS - i - EyeSize - 1, red / 10, green / 10, blue / 10);

    showStrip();
    delay(SpeedDelay);
  }
  delay(ReturnDelay);
  while (Serial.available() > 0)
  {
    Serial.read();
  }
}

void Rainbow()
{
  static uint8_t hue = 0;
  // First slide the led in one direction
  for (int i = 0; i < NUM_LEDS; i++)
  {
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
  for (int i = (NUM_LEDS)-1; i >= 0; i--)
  {
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

void fadeall()
{
  for (int i = 0; i < NUM_LEDS; i++)
  {
    leds[i].nscale8(250);
  }
}