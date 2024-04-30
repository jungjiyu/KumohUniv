
/*
let a , b;
a= prompt('첫숫자 입력: ');
b= prompt('두번째 숫자 입력: ');
let c= parseInt(a)+parseInt(b);
document.write("dfsfdsfdsf19"); 
document.write(`write: ${a}+${b}= ${c}`); // 브라우져 화면에 직접 그린다


console.log(a+b+'hehe');
*/

let i = 0;
for (i = 0; i < 10; i++) {
    document.write("카운터 : " + i + "<br />");
}
document.write('마지막:'+i+'<br>');



for ( var j = 0; j < 10; j++) {
    document.write("카운터 : " + j + "<br />");
}
document.write('마지막:'+j+'<br>');


console.log(`h
e
he`);

let a=10, b=20;
console.log('hehe'+a+b); // 교환법칙 성립 안한다
document.write('h<br>e<br>e<br>h<br>');

document.write('NaN==NaN : '+ (NaN == NaN)+'<br>');
document.write('1==true : '+ (1 == true)+'<br>');
document.write("'1'==true : "+ ('1'==true)+'<br>');
document.write('undifined==null : '+ (undefined == null)+'<br><br>');


document.write('NaN===NaN : '+ (NaN === NaN)+'<br>');
document.write('1===true : '+ (1 === true)+'<br>');
document.write("'1'===true : "+ ('1'===true)+'<br>');
document.write('undifined===null : '+ (undefined === null)+'<br>');
document.write('1===1 : '+ (1 === 1)+'<br>');


function sayF(){
 let name= document.getElementById('name').value;
 alert(`${name}는(은) 병신이다`);  
 document.sub
}


function calc(){
   let a = parseInt(document.getElementById('a').value);
   let b =  parseInt(document.getElementById('b').value);
   let c = document.getElementById('c');

   let sum = (a,b) => a+b;
   let mul = (a,b) => a*b;
   let div = (a,b) => a/b;
   c.innerHTML= `합: ${sum(a,b)} , 곱:${mul(a,b)} , 나눗셈:${div(a,b)}`;
}



