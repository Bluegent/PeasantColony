var num1 = new BigNumber();
var num2 = new BigNumber();
var num3 = new BigNumber();
var num5 = new BigNumber();
num1.m_numbers[3]= 12;
num2.m_numbers[5]= 1;
num2.m_numbers[4]= 332;
num3.m_numbers[3]= 999;
num5.m_numbers[0] = 1;
var num4 = bigNumberAdd(num1,num3);
var num6 = bigNumberAdd(num2,num3);



console.log("num1:"+num1.toString());
console.log("num2:"+num2.toString());
console.log("num3:"+num3.toString());
console.log("num1+num3:"+num4.toString());
console.log("num5:"+num5.toString());
console.log("num2+num3:",num6.toString());
console.log("num1e:"+num1.toStringE());
console.log("num2e:"+num2.toStringE());
console.log("num3e:"+num3.toStringE());
console.log("num4e:"+num4.toStringE());
console.log("num5e:"+num5.toStringE());
console.log("num6e:"+num6.toStringE());



var num7 = bigNumberSubtract(num2,num3);
console.log("num7e(num2-num3):"+num7.toStringE());
console.log("num7+num3",bigNumberAdd(num7,num3).toStringE());
console.log("num2e:"+num2.toStringE());
var num8 = bigNumberSubtract(num2,num5);
console.log("num8e(num2-num5):"+num8.toStringE());
console.log("num8+num5",bigNumberAdd(num8,num5).toStringE());
console.log("num2e:"+num2.toStringE());


var num9 = new BigNumber();
num9.m_numbers[2]=200;
num9.m_numbers[3]=205;
num9.m_numbers[0]=1;
console.log("num9e:"+num9.toStringE());
num9.multiply(0.5);
console.log("num9e:"+num9.toStringE());