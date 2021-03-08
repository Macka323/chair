//for support https://www.youtube.com/watch?v=q416XXJDE_M
int x[4];
int serialdata = 0;
void setup() {
  Serial.begin(9600);
  Serial.setTimeout(10);
}
void loop() {
  serialdata = Serial.parseInt();

 
    if (serialdata >= 1 && serialdata <= 256) {
      x[0] = serialdata;
      x[0] -= 1;
    }
    if (serialdata >= 257 && serialdata <= 512) {
      x[1] = serialdata;
      x[1]=x[1]-257;
    }
    if (serialdata >= 513 && serialdata <= 768) {
      x[2] = serialdata;
      x[2]=x[2]-513;
    }
    if (serialdata >= 769 && serialdata <= 1024) {
      x[3] = serialdata;
      x[3]=x[3]-769;
    }
    Serial.println("-----------");
    Serial.print(x[0]);
    Serial.println("x");
    Serial.print(x[1]);
    Serial.println("r");
    Serial.print(x[2]);
    Serial.println("g");
    Serial.print(x[3]);
    Serial.println("b");
  delay(100);
}
