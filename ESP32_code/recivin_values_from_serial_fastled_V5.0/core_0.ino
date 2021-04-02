void codeForSensRead(void * parameter){
  for(;;){
    serialout();
  }
}
void serialout() {
  digitalWrite(LED_2, HIGH);
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
  digitalWrite(LED_2, LOW);
}
