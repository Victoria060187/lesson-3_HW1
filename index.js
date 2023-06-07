const hours = prompt('How many hours do you want to convert to seconds?')?.trim();
const seconds = 3600;

if(!hours || isNaN(hours)){
    alert ('Error! Incorrect input value!');
}
else if (hours <=0){
    alert ('Error! Input value is negative or 0!');
} 
else {
    const result = hours*seconds;
    alert ('Total: ' + result);
}