#include <FastLED.h>
#define NUM_LEDS 63
#define PIN 4
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
const int battery = 14;
const int LED_2 = 2;
TaskHandle_t SensRead;


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
pinMode(14, INPUT);
pinMode(2, OUTPUT);


}
