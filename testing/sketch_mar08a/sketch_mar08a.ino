int x[4];
int serialdata = 0;
void setup() {
  Serial.begin(9600);
}
void loop() {
  serialdata = Serial.read();

 
    if (serialdata >= 1 && serialdata <= 256) {
      x[0] = serialdata;
      x[0]=x[0]-1;
    }
    if (serialdata >= 257 && serialdata <= 513) {
      x[1] = serialdata;
      x[1]=x[1]-256;
    }
    if (serialdata >= 514 && serialdata <= 770) {
      x[2] = serialdata;
      x[2]=x[2]-513;
    }
    if (serialdata > 771 && serialdata <= 1027) {
      x[3] = serialdata;
      x[3]=x[3]-770;
    }
    Serial.print(x[0]);
    Serial.println("x");
    Serial.print(x[1]);
    Serial.println("r");
    Serial.print(x[2]);
    Serial.println("g");
    Serial.print(x[3]);
    Serial.println("b");
  
}
