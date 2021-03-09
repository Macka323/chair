const int sensor_1=36;
const int sensor_2=39;
const int sensor_3=34;
const int sensor_4=35;
const int sensor_5=32;
const int sensor_6=33;
const int sensor_7=25;
const int sensor_8=26;
const int sensor_9=27;
const int battery=14;

void setup(){
  Serial.begin(38400);
  Serial.setTimeout(10);
}

void loop(){
  Serial.print("a.");
  Serial.println(analogRead(sensor_1));
  delay(50); 
  Serial.print("b.");
  Serial.println(analogRead(sensor_2));
  delay(50); 
  Serial.print("c.");
  Serial.println(analogRead(sensor_3));
  delay(50); 
  Serial.print("d.");
  Serial.println(analogRead(sensor_4));
  delay(50); 
  Serial.print("e.");
  Serial.println(analogRead(sensor_5));
  delay(50); 
  Serial.print("f.");
  Serial.println(analogRead(sensor_6));
  delay(50); 
  Serial.print("g.");
  Serial.println(analogRead(sensor_7));
  delay(50); 
  Serial.print("h.");
  Serial.println(analogRead(sensor_8));
  delay(50); 
  Serial.print("i.");
  Serial.println(analogRead(sensor_9));
  delay(50);
  Serial.print("j.");
  Serial.println(analogRead(battery));
  delay(50);
}
