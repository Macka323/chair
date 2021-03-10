#include <FastLED.h>
#define NUM_LEDS 30
#define DATA_PIN 15

CRGB leds[NUM_LEDS];

void setup() {
  Serial.begin(38400);
  FastLED.addLeds<WS2812B, DATA_PIN, RGB>(leds, NUM_LEDS);  // GRB ordering is typical

}

void loop() {
  cyclon();
  delay(5000);
  }

void cyclon(){
  for (int i = 0; i < NUM_LEDS; i++) {
    leds[i].setRGB( 255, 68, 0);
    FastLED.show();
    delay(100);
    i=i-5;
    leds[i].setRGB( 0, 0, 0);
    i=i+5;
    FastLED.show();
  }

  for (int a = NUM_LEDS; a > 0; a--) {
    leds[a].setRGB( 255, 68, 0);
    FastLED.show();
    delay(100);
    a=a+5;
    leds[a].setRGB( 0, 0, 0);
    a=a-5;
    FastLED.show();
  }
}
