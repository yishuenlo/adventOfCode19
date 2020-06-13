//input = 172930-683082

//number are always in ascending order
//next number can be same or greater
//must have two adjacent number repeat itself, like 11, 22, 33...etc.

//17-2930
//17-7999
//17-8999
//17-9999
//18-9999
//19-9999
//20-0000


let input = 172930;
let str = input.toString().split('');

for(let i = 0; i < str.length; i++){
    //convert to ascending numbers
    if(str[i + 1] < str[i]) str[i + 1] = str[i];
}

input = str.join('') + 1;

console.log(str.join(''));