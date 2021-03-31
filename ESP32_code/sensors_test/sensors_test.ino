void setup() {
  // put your setup code here, to run once:
Serial.begin(38400);
pinMode(36, INPUT);
pinMode(39, INPUT);
pinMode(34, INPUT);
pinMode(35, INPUT);
pinMode(32, INPUT);
pinMode(33, INPUT);
pinMode(25, INPUT);
pinMode(26, INPUT);
pinMode(27, INPUT);

}

void loop() {
Serial.print(map(analogRead(36),0,4095,255,0));
Serial.print(" ");
Serial.print(map(analogRead(39),0,4095,255,0));
Serial.print(" ");
Serial.print(map(analogRead(34),0,4095,255,0));
Serial.print(" ");
Serial.print(map(analogRead(35),0,4095,255,0));
Serial.print(" ");
Serial.print(map(analogRead(32),0,4095,255,0));
Serial.print(" ");
Serial.print(map(analogRead(33),0,4095,255,0));
Serial.print(" ");
Serial.print(map(analogRead(25),0,4095,255,0));
Serial.print(" ");
Serial.print(map(analogRead(26),0,4095,255,0));
Serial.print(" ");
Serial.println(map(analogRead(27),0,4095,255,0));
delay(50);

}
