void setup() {
  // put your setup code here, to run once:
Serial.begin(38400);
pinMode(13, OUTPUT);
pinMode(12, OUTPUT);
}

void loop() {
Serial.print(map(analogRead(13),0,4095,255,0));
Serial.print(" ");
Serial.println(map(analogRead(12),0,4095,255,0));
delay(50);
}
