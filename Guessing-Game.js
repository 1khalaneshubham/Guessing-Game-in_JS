const max = prompt("Enter the max number");

const random = Math.floor(Math.random()* max) + 1;

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("User quit");
        break;
    }

    if(guess == random){
        console.log("You are right!,Congrats ! ,random number was", random);
        break;
    }else if(guess < random){
        guess = prompt("Your guess was too samll,please try again");
    }else{
        guess = prompt("Your guess is too large,please try again");
    }
}