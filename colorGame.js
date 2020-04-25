var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay");
var h1=document.querySelector("h1");
var newColors=document.querySelector("#newColors");
var gameModes=document.querySelectorAll(".gameMode");
var messageSpan=document.querySelector("#message");

var gameMode="hard";
var colors=[];
var pickedColor;


gameModes[0].addEventListener("click",function(){
    this.classList.add("selected");
    gameModes[1].classList.remove("selected");
    gameMode="easy";
    setSquaresColor(3);
    for(var l=3; l<=5; l++)
    {
        squares[l].style.backgroundColor="#232323";
    }
    resetGame();

});
gameModes[1].addEventListener("click",function(){
    this.classList.add("selected");
    gameModes[0].classList.remove("selected");
    gameMode="hard";
    setSquaresColor(6);
    resetGame();
});
newColors.addEventListener("click",function(){
    resetGame();
    gameMode==="hard" ? setSquaresColor(6): setSquaresColor(3);
});


init();


function init()
{
    setSquaresColor(6);
    setClickListener();
}
function setSquaresColor(len)
{
    if(len===3)
    {
        colors=[];
    }
    for(var j=0; j<len; j++)
    {
        colors[j]="RGB(";

        for(var k=1; k<4; k++)
        {
            var rgb=Math.floor(Math.random() * 256);
            rgb=rgb.toString();
            
            k<3 ? colors[j]+= rgb + ", ": colors[j]+=rgb + ")";
        }

        squares[j].style.backgroundColor=colors[j];
    }

    pickedColor=colors[ Math.floor(Math.random() * len) ];
    colorDisplay.textContent=pickedColor;
}

function setClickListener()
{
    for(var i=0; i<6; i++)
    {
        squares[i].addEventListener("click",function()
        {
            var clickedColor=this.style.backgroundColor;
            if(clickedColor!=="#232323" && messageSpan.innerHTML!=="Correct!")
            {
                clickedColor=clickedColor.toUpperCase();

                if(clickedColor===pickedColor)
                {
                    messageSpan.innerHTML="Correct!";
                    h1.style.backgroundColor=pickedColor;
                    for(var j=0; j<colors.length; j++)
                    {
                        squares[j].style.backgroundColor=pickedColor;
                    }
                    newColors.innerHTML="PLAY AGAIN?";
                }
                else
                {
                    messageSpan.innerHTML="Try Again";
                    this.style.backgroundColor="#232323";
                }
            }
        });
    }
}
function resetGame()
{
    newColors.innerHTML="NEW COLORS";
    h1.style.backgroundColor="steelblue";
    messageSpan.innerHTML="";
}