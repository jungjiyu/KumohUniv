let target='Bppofoale\n\nBdaofo\n'; 
let result3=target.match(/.*/g); // 빈 문자열 왜 나오는거임 
console.log(result3); 
result3=target.match(/.*a/g); 
console.log(result3); 
result3=target.match(/(?=.*a)/g); // A(?=B) 는 A의 바로 뒤에 B가 있을떄 A를 표시함 
console.log(result3); 
result3=target.match(/(?=.*a)./g); 
console.log(result3); 
result3=target.match(/.(?=.*a)./g); 
console.log(result3); 
let target2 = 'Adfd89!dff'; 
let result4=target2.match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/gm); 
console.log(result4); 

s = 'appleeee';
console.log(s.match(/apple/g));