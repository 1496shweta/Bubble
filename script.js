var timer=60;
var score =0;
var hitnum=0;

function getNewHit(){
    hitnum = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent= hitnum;
}

function makeBubble(){
var cluter=" ";

for(var i=1;i<=154;i++){
    var s=Math.floor(Math.random()*10);

    cluter+= `<div class="bubble">${s}</div>`;

}
document.querySelector('.pbottom').innerHTML=cluter;
} 

function runTimer(){

   var t= setInterval(function(){
        if (timer >0){
        timer--;
        document.querySelector('#timerValue').textContent=timer;}
        else{
            clearInterval(t);
            document.querySelector(".pbottom").innerHTML=`<h1> Game Over and your score is ${score}</h1>`;
                }

    },1000);

}

function scoreIn(){
    score+= 10;
    document.querySelector("#scoreval").textContent = score;

}


document.querySelector(".pbottom").addEventListener("click",function(dets){
    var clicknum =Number(dets.target.textContent);
    if(clicknum === hitnum){
       
        scoreIn();
        makeBubble();
        getNewHit();

    }
    
});

getNewHit();
runTimer();
makeBubble();

