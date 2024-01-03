// variable -> es5 -> var a=6;
// variable -> es6 -> let,const --> syntax
let b=5;
let txt="text";
// scope --> haaltan dotor l ajilna
function num(){
    let too=5;
    console.log(too);
}
// const -> togtmol utga; uurchlug duh gui -> dom
const pi = 3.14;


// es5 function
function sum(a,b){
    console.log(a+b);
}
// es6 fuction -> arrow fuc/shugman func
const sum2 = (a,b) => {
    console.log(a+b);
}
sum(10,20);
sum2(5,10);
// massive
let item = ["sword","gun","axe"]
// massiveName.push(value) -> hamgiin ard tald value/utga nemeh
// massiveName.pop() -> hamgiin ard taliin value/utga ustgah
// massiveName.shift() -> hamgiin urd taliin value/utga ustgah
// massiveName.unshift() -> hamgiin urd tald value/utga nemeh
console.log(item);
item.push("sheild");
console.log(item);
item.pop();
console.log(item);
item.shift();
console.log(item);
item.unshift("helmet");
console.log(item);
// slice -> huvaah ,  splice
// massiveName.scile(start.end);
// shine massive ruu copy hiij avdag
let copyItem  = item.slice(0,2);
console.log(copyItem);
let fruits = ["apple","banana","cherry","tomato"];
// splice(start,delete);
fruits.splice(2,1);
console.log(fruits);
fruits.splice(0,1);
console.log(fruits);
// splice(start,0,addValue);
let months = ["Jan","March","April","June"];
months.splice(1,0,"Feb");
console.log(months);
//
months.splice(4,1,"May","June","July","Aug");
console.log(months);
// slice (-1,-2); -1 esrgeerei buyu hoinoos n
console.log(months.slice(-2));
console.log(months.slice(-5,-3));


const slider = document.getElementsByTagName('span')[1];
// check
let photo = document.getElementsByTagName("img")[0];
let value = [("gojo.jpg"),("gojos.jpg"),("kaisen.jpg"),("puple.jpg"),("satoru.jpg")]; // toonii orond zurag tavi
let i=0;
console.log(photo)
console.log(slider[0])
function next(){
    i++;
    if(i>value.length-1){
        i=0;
    }
    photo.src = value[i];
}
function prev(){
    i--;
    if(i<0){
        i=value.length-1;
    }
    photo.src =value[i];
}
let time;
function auto(){
    i++;
    if(i>value.length-1){
        i=0;
    }
    photo.src = value[i];
    time = setTimeout(auto,1000);
    document.querySelector('.auto').disabled = true;
    document.querySelector('.stop').disabled = false;
}
function stop(){
    clearTimeout(time);
    document.querySelector('.stop').disabled = true;
    document.querySelector('.auto').disabled = false;
}
// setTimeout() -> func-iig heden millisecondiin daraa ajillahiig zaaj ugnu / millisecond 100ms ==1s
