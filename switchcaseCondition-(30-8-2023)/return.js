function year(months){

switch(months){
    case 1:
        return "january";
    case 3:
        return "march";  
    case 5:
        return "may";    
    case 7:
        return "july";
    case 9:
        return "september";
    case 11:
        return "november";
    case 12:
        return "december";
    default:
        return "none of the month";   
        
}
}
let month = year(5);
console.log(month);