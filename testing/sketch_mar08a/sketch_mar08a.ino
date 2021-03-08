int x=0,r=0,g=0,b=0;
int y;
void setup(){
  Serial.begin(9600);
}
void loop(){
    if (Serial.available() > 0) {
      y=Serial.read();      
      Serial.flush();
      y=2632554;
      Serial.print(y);   
    }
}
