let firstCard=Math.floor(Math.random()*10)+2;
let secondCard=Math.floor(Math.random()*10)+2;
let a=[firstCard,secondCard];
let sum=firstCard+secondCard
let hashBlackJack=false
let isAlive=true
let message=""
let s="";
let variable=document.getElementById('message-el');
let variable2=document.getElementById('sum-el');
let variable3=document.querySelector('#Card-el');
function startGame()
{
    renderGame();
}
function renderGame()
{
if(sum<=20)
{
    message="Do you want to draw a new card?"
}
else if(sum===21)
{
    message="Wohoo! you've got Blackjack"
    hashBlackJack=true
}
else
{
   message="You're out of the game!"
   isAlive=false;
}
s="Sum:"+sum;
let s2="Card:"
let s4="";
for(let i=0;i<a.length;i++)
{
    s4=s4+" "+a[i];
    s2="Card:"+s4;
}
variable2.innerText=s;
variable.innerText=message;
variable3.innerText=s2;
}
function New_card()
{
    let thirdCard=Math.floor(Math.random()*10)+2;
    sum=sum+thirdCard;
    a.push(thirdCard);
    renderGame();
}
