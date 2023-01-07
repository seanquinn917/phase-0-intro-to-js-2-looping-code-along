//Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }


 const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);




const person = ["Guadalupe", "Ollie", "Aki"]
const event = "surpise"



function writeCards(person, event){ 
    const newArray = []
    for(let s = 0; s < person.length; s++){
    newArray.push(`Thank you, ${person[s]}, for the wonderful ${event} gift!`);
};
    return newArray
};
writeCards()




function countDown(){
    let digit = 10;
    while (digit >= 0){
        console.log(digit)
        digit--;
    }
}
countDown()
