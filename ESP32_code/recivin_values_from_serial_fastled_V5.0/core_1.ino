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
  
}
