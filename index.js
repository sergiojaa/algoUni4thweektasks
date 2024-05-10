//1.დაწერეთ ფუნქცია,სახელად sayHello,რომელიც დაპრინტავს - 'hello world'
const sayHello = function(){
    console.log('hello world')
}
sayHello()
//2.დაწერეთ ფუნქცია,სახელად greet,რომელიც პარამეტრად მიიღებს 
// სახელს და დაპრინტავს - გამარჯობა '[სახელი]'
    const greet = function(name) {
        if (name === undefined) {
            console.log('hello ucnobo');
        } else {
            return "Hello" + " " + name;
        }
    };
    
    greet(sergi)
    
//3.დაწერეთ ფუნქცია sum,რომელიც არგუმენტებად მიიღებს ორ რიცხვს და დააბრუნებს
// მათ ჯამს,შედეგი გამოიტანეთ ტერმინალში
const sum = function(num1,num2){
    return num1 + num2
}
console.log(sum(10,20))
//4.დაწერეთ ფუნქცია,სახელად calculateArea,რომელიც არგუმენტად მიიღებს ოთხკუთხედის
// სიგრძესა და სიგანეს და დააბრუნებს მათ ფართობს.
const calculateArea = function(width,height){
    return width * height
}
console.log('mati fartobi aris' + calculateArea(20,20))
//5. დაწერეთ ფუნქციარომელიცმიიღებს ორ არგუმენტს და დააბრუნებს მათ შორის
// უდიდესს. გამოიყენეთ სამივე -  function declaration, function expression, arrow functions
const task5 = (number1,number2) =>{
    return Math.max(number1,number2)
}
console.log(task5(20,10))
//6.დაწერეთ ფუნქცია ,რომელიც პარამეტრად მიიღებს იმ რაოდენობას,რამდენჯერაც უნდა 
// გამოკონსოლდეს  'hello world'
function value(amount){
    for(let i = 0;i < amount;i++){
        console.log('hello world')
    }
}
console.log(value(5))
// 7.დაწერეთ ფუნქცია სახელად celsiusToFarenheit,რომელიც პარამეტრად მიიღებს
// ცელსიუსს და გადაიყვანს ფარენჰეიტში.ფორმულა (celsius * 9/5) + 32
const celsiusToFarenheit = (celsius) =>{
    return (celsius * 9/5) + 32
}
console.log(celsiusToFarenheit(5))
//8.დაწერეთ ფუნქცია სახელად sumDigits,რომელიც არგუმენტად იღებს 
// რიცხვს და აბრუნებს მისი ციფრების ჯამს
function sumDigits(number){
    let num = 0
    for(let i = 0;i <=number;i++){
        num = num + i
    }
}

console.log(sumDigits(5))
//9. დაწერეთ ფუნქცია სახელად countBs,რომელიც იღებს სტრიქონს თავის ერთადერთ 
// არგუმენტად და აბრუნებს სტრიქონში დიდი 'B' სიმბოლოების რაოდენობას
function countBs(str){
    let sum = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'B'){
            sum++
        }
    }
    return sum
}
console.log(countBs('BiBileishvili'))
//10. დაწერეთ ფუნქცია,რომელიც მიიღებს ორ პარამეტრს და დააჯამებს ყველა რიცხვს 
// გარკვეულ შუალედში.მაგალითად შეკრიბავს რიცხვებს 5-დან 100-მდე
function sum(num1,num2){
    let numbers = 0
    for(let i = 5;i < 100;i++){
        numbers = numbers + i
    }
    return numbers
}
console.log(sum(5,100))
//11.დაწერეთ ფუნქცია,რომელიცპარამეტრად მიიებს სტრინგს და დააბრუნებს true-ს თუ 
// სტრინგი არის პალინდრომი(თავიდან ბოლომდე იგივენაირად იწერება) და false-ს
// თუ არაა პალინდრომი
function palindrom(text){
    let reverse = '';
    for(let i = text.length - 1; i >= 0;i--){
        reverse = reverse + text[i]
    }
    return reverse == text
}
console.log(palindrom('level'))