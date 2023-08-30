//elseif condition

let salary=70000;

if(salary>=80000 && salary<=100000){
    console.log("You're  grade A");
}
else if(salary>=60000 && salary<=79999){
    console.log("You're  grade B");
}
else if(salary>=40000 && salary<=59999){
    console.log("You're  grade C");
}
else if(salary>=25000 && salary<=39999){
    console.log("You're  grade D");
}
else if(salary>=10000 && salary<=24999){
    console.log("You're  grade E");
}
else if(salary>=100001){
    console.log("No one get this salary");
}
else{
    console.log("you're part time person");
}