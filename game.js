var buttonColors = ["white","poloblue","palevioletred","palegreen"];
var pattern=[];
var clickedPattern = [];
var count=0;
var level="Level ";
var started = false;
    $(document).on("keydown",function(event){
        if(!started){
        $("h1").text(level+count);
        nextSeq(); 
        started = true;
        }
    });

function nextSeq(){
    clickedPattern=[];
    count++;
    $("h1").text(level+count);
    var random = Math.floor(Math.random()*4);
    var randColor = buttonColors[random];
    pattern.push(randColor);
    playSound(randColor);
    $("#"+randColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}
$(".btn").on("click", function(){
    var clickedButton =this.id;
    clickedPattern.push(clickedButton);
    playSound(clickedButton);
    animatePress(this);
    checkAnswer(clickedPattern.length-1);
});

function checkAnswer(currentLevel){
    var flag=0;
   
    if(clickedPattern[currentLevel]===pattern[currentLevel]){
            console.log("success");
        
    if(clickedPattern.length===pattern.length){
            setTimeout(function(){nextSeq();}, 1000); 
        }
    }

    else{
       $("body").addClass("game-over");
       setTimeout(function(){
        $("body").removeClass("game-over");}, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    playSound("wrong");
    startOver();
    
        
    }
}

function playSound(name){
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}
function animatePress(currentColor){
    $(currentColor).addClass("pressed");
   setTimeout(function(){
    $(currentColor).removeClass("pressed");}, 100);

}
function startOver(){
    count =0;
    pattern=[];
    started = false;
}




