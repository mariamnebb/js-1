// 1.ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე
for (let loop=5; loop <100; loop ++ )
{
    console.log(loop);
}


//2.
let numbers= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let item of numbers)
{
if (item >0 && item <10)
console.log(item)};


// 3.
let LOOP2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let item of LOOP2){
if (item==5)
{console.log('YES');
break;}}


// 4.
let i= [1, 2, 3, 4, 5];
 let sum=0;
 for(let item of i){
 sum=item;}
  {
console.log(sum);
}


// 5.
let bar= [1, 2, 3, 4, 5];
 let s=0;
 for(let item of bar){
 sum+=item;}

 let avr= sum / bar.length;
console.log(avr);
 
 

// 6.
let cont = [1, 2, 3, 7, 6, 9];
for (let item of cont) {
  if (item === 7) {
    continue;
  }
  console.log(item);
}

// 7.
let userinfo = {
    firstname: "Giorgi",
    lastname: "Smith",
    age: 25,  
    studentstatus: "Active"
};
 console.log(userinfo.studentstatus);


//  8.
let user = {
    name: 'Anna',
    age:  20,
    studentstatus: 'Active'
}

 if(user.age < 18 && user.studentstatus !='active')
 console.log('Hllo user');
else if (user.name==='levani')
console.log('hello levani');
else if(user.studentstatus==='active'|| user.age < 25 )
console.log('hello anna');
else console.log('error');



// 9.
let numb2 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
//  მხოლოდ ლუწი რიცხვები

for (let item of numb2) {
  if (item % 2 === 0) {
    console.log(item);
  }
}


// 10.
let usersinfo = [
    { username: "Giorgi", status: false },
    { username: "levani", status: false },
    { username: "Anna", status: true },
  ];
  
  for (let item of Object.values(usersinfo)) {
    if (item.status === true) {
      console.log(item);
    }
  }


//   11.
let array7 = [32, 14, 10, 'hello', null, '40', 50];

for(let item of array7){
    if(typeof item =='number' && item %5 ===0){
    console.log(item);}}

// 12.

let array8 = [ [2, -3, 5, 11], [1, -35, 11], [12, -36, -24] ];
for (let ar = 0; ar < array8.length; ar++) 
