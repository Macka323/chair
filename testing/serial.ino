int x;

Serial.begin(9600);

if (Serial.available() > 0){
  x=Serial.read();
  y=Serial.read();
  r=Serial.read();
  g=Serial.read();
  b=Serial.read();

  
  
}
