int x[4];
int serialdata = 0;
void setup() {
  Serial.begin(9600);
}
void loop() {
  serialdata = Serial.read();

  if (Serial.available() > 0) {
    if (serialdata >= 0 && serialdata <= 255) {
      x[0] = serialdata;
    }
    if (serialdata > 255 && serialdata <= 510) {
      x[1] = serialdata;
      x[1]=x[1]-255;
    }
    if (serialdata > 510 && serialdata <= 765) {
      x[2] = serialdata;
      x[2]=x[2]-510;
    }
    if (serialdata > 765 && serialdata <= 1020) {
      x[3] = serialdata;
      x[3]=x[3]-765;
    }
  }
}
