function writeCards(names, event){
    let emptyArray= []
    for(let i=0; i<names.length; i++){
        const thankYouMessage= `Thank you, ${names[i]}, for the wonderful ${event} gift!`
     emptyArray.push(thankYouMessage)
    }
   return emptyArray

}
console.log(writeCards(["Joseph", "Calvince", "Otieno"], "Engagement"))


//countdown function using while
function countDown(){
    let number=10;
    while(number>=0){
        console.log(number--)
    }
}