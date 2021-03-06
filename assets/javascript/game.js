$(document).ready(function() {


var timeLeft = 60;
var timerBox = $(" <div id='timerTarget' style='width:60%' class='container'><div class='row'><div class='text-center col p-2 m-3'></div></div></div>");
var questionBox = $("#questionsContainer");
var drawButton = $("<button type='button' id='start' class='m-3 btn btn-dark'>START</button>");

//Question Stored

var question1 = $("<div id='questionText' class='m-3 p-4'>What is the name of the man who launched eBay back in 1995?</div></br><div id='qcheck1' class='form-check m-6 p-6'> <input class='form-check-input' type='radio' name='q1' id='q1a' value='1a'> <label class='form-check-label' for='q1a'>Pierre Omidyar</label></br><input class='form-check-input' type='radio' name='q1' id='q1b' value='1b'> <label class='form-check-label' for='q1c'>Jeff Bezos</label></br><input class='form-check-input' type='radio' name='q1' id='q1c' value='1c' checked> <label class='form-check-label' for='q1c'>John Deer</label></br><input class='form-check-input' type='radio' name='q1' id='q1d' value='1d'> <label class='form-check-label' for='q1d'>Bill Gates</label></div>");
var question2 = $("<div id='questionText' class='m-3 p-4'>What was Twitter’s original name?</div></br><div id='qcheck2' class='form-check m-6 p-6'> <input class='form-check-input' type='radio' name='q2' id='q2a' value='2a'> <label class='form-check-label' for='q2a'>ShoutChamber</label></br><input class='form-check-input' type='radio' name='q2' id='q2b' value='2b'> <label class='form-check-label' for='q2c'>twttr</label></br><input class='form-check-input' type='radio' name='q2' id='q2c' value='2c' checked> <label class='form-check-label' for='q2c'>tweetz</label></br><input class='form-check-input' type='radio' name='q2' id='q2d' value='2d'> <label class='form-check-label' for='q2d'>BirdsYelling</label></div>");
var question3 = $("<div id='questionText' class='m-3 p-4'>What is meteorology the study of?</div></br><div id='qcheck3' class='form-check m-6 p-6'> <input class='form-check-input' type='radio' name='q3' id='q3a' value='3a'> <label class='form-check-label' for='q3a'>God</label></br><input class='form-check-input' type='radio' name='q3' id='q3b' value='3b'> <label class='form-check-label' for='q3c'>Weather</label></br><input class='form-check-input' type='radio' name='q3' id='q3c' value='3c' checked> <label class='form-check-label' for='q3c'>Rocks</label></br><input class='form-check-input' type='radio' name='q3' id='q3d' value='3d'> <label class='form-check-label' for='q3d'>Asteroids</label></div>");
var question4 = $("<div id='questionText' class='m-3 p-4'>Which planet is the hottest in the solar system?</div></br><div id='qcheck4' class='form-check m-6 p-6'> <input class='form-check-input' type='radio' name='q4' id='q4a' value='4a'> <label class='form-check-label' for='q4a'>Your An...</label></br><input class='form-check-input' type='radio' name='q4' id='q4b' value='4b'> <label class='form-check-label' for='q4c'>Uranus</label></br><input class='form-check-input' type='radio' name='q4' id='q4c' value='4c' checked> <label class='form-check-label' for='q4c'>Mars</label></br><input class='form-check-input' type='radio' name='q4' id='q4d' value='4d'> <label class='form-check-label' for='q4d'>Saturn</label></div>");
var question5 = $("<div id='questionText' class='m-3 p-4'>What year was the very first model of the iPhone released?</div></br><div id='qcheck5' class='form-check m-6 p-6'> <input class='form-check-input' type='radio' name='q5' id='q5a' value='5a'> <label class='form-check-label' for='q5a'>1992</label></br><input class='form-check-input' type='radio' name='q5' id='q5b' value='5b'> <label class='form-check-label' for='q5c'>2006</label></br><input class='form-check-input' type='radio' name='q5' id='q5c' value='5c' checked> <label class='form-check-label' for='q5c'>2009</label></br><input class='form-check-input' type='radio' name='q5' id='q5d' value='5d'> <label class='form-check-label' for='q5d'>2007</label></div>");

//Answers Tracked

var correctAnswers = 0;
var incAnswers = 0;



var submitButton = $("<button type='button' id='start' class='m-3 btn btn-dark'>SUBMIT</button>");


//Draws Questions and Starts Timer

function questionDraw() 

{

    startButton.animate({opacity: 0, }, 600);
    setTimeout(function(){ questionBox.empty();}, 700);
    setInterval(function(){

    if (timeLeft === 0) {

        questionBox.empty();
        questionBox.html("<h1 style='font-size:100px'>You Lose</h1>");

    }

    else  timeLeft--; $("#timerTarget").html("<div id='timerTarget' style='width:60%' class='container'><div class='row'><div id='timerTitle' class='text-center col p-2 m-3'><h1>Timer: " + timeLeft + "</h1>") },1000);


        setTimeout(function(){ questionBox.empty();}, 700);   
        
    setTimeout(function(){questionBox.append(timerBox);},800);
    setTimeout(function(){questionBox.append(question1);},800); 
    setTimeout(function(){questionBox.append(question2);},800); 
    setTimeout(function(){questionBox.append(question3);},800); 
    setTimeout(function(){questionBox.append(question4);},800); 
    setTimeout(function(){questionBox.append(question5);},800); 



    setTimeout(function(){questionBox.append(submitButton);},800);  
    

}

//Draws the Start Button and the OnClick

questionBox.append(drawButton);
var startButton = $("#start");
startButton.on("click", questionDraw);


//Submit Answers and Check Radio Properties

submitButton.on("click", function(){

//q1 checks
if($("#q1a").prop("checked") == true)

{

    correctAnswers++;

}

else if ($("#q1b").prop("checked") == true)

{

    incAnswers++;

}

else if ($("#q1c").prop("checked") == true)

{

    incAnswers++;

}

else if ($("#q1d").prop("checked") == true)

{

    incAnswers++;

}

//q2 checks
if($("#q2a").prop("checked") == true)

{

    incAnswers++;

}

else if ($("#q2b").prop("checked") == true)

{

    correctAnswers++;

}

else if ($("#q2c").prop("checked") == true)

{

    incAnswers++;

}

else if ($("#q2d").prop("checked") == true)

{

    incAnswers++;

}

//q3 checks
if($("#q3a").prop("checked") == true)

{

    incAnswers++;

}

else if ($("#q3b").prop("checked") == true)

{

    correctAnswers++;

}

else if ($("#q3c").prop("checked") == true)

{

    incAnswers++;

}

else if ($("#q3d").prop("checked") == true)

{

    incAnswers++;

}

//q4 checks
if($("#q4a").prop("checked") == true)

{

    incAnswers++;

}

else if ($("#q4b").prop("checked") == true)

{

    correctAnswers++;

}

else if ($("#q4c").prop("checked") == true)

{

    incAnswers++;

}

else if ($("#q4d").prop("checked") == true)

{

    incAnswers++;

}


//q5 checks
if($("#q5a").prop("checked") == true)

{

    incAnswers++;

}

else if ($("#q5b").prop("checked") == true)
{

    incAnswers++;

}

else if ($("#q5c").prop("checked") == true)

{

    incAnswers++;

}

else if ($("#q5d").prop("checked") == true)

{

    correctAnswers++;

}

//Post Results

questionBox.empty();

questionBox.html("<h1>Correct Answers: " +correctAnswers + "</br>" + "<h1>Incorrect Answers: " +incAnswers);






});
});