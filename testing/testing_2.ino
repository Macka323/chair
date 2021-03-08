long long x,y,r,g,b;

void setup(){
  Serial.begin(9600);
}
void main(){
    y=Serial.read();
    /*y=x;
    r=y;
    g=y;
    b=y;*/
    
    x=y/1000000000;
    
    r=y/1000000;
    r=r%1000;
    
    g=y/1000;
    g=g%1000000;
    
    b=y%1000000000;

    Serial.print("y.");
    Serial.println(y);
    Serial.print("x.");
    Serial.println(x);
    Serial.print("r.");
    Serial.println(r);
    Serial.print("g.");
    Serial.println(g);
    Serial.print("b.");
    Serial.println(b);
    delay(100);
    
}
