//Global Variables
var imageArray = ["https://www.responsibletravel.com/ImagesClient/indian-himalayas-topbox-map.gif","https://si.wsj.net/public/resources/images/BN-CX551_EVERES_GR_20140522171151.jpg",
"http://img.timeinc.net/time/2003/adventures/touts/ed_hillary_tout.jpg","https://www.visithimalayastrek.com/wp-content/uploads/2014/05/Everest-Base-Camp-Trek-1.jpg",
"https://formafeed.com/wp-content/uploads/2019/01/snow-cold-thermometer.jpg","https://qph.fs.quoracdn.net/main-qimg-4ebc8e9f4af85a31cff6ba9b97d1ab02"];

//correct and incorrect answer arrays
var answerArray = ["Himalayas","29,035 ft.","Edmund Hillary","800","-27 degrees C","60 Million Years"];
var wrongAnswer1 = ["Alps","18,090 ft.","Ernest Shackleton","150","-10 degrees C","100 Million Years"];
var wrongAnswer2 = ["Andes","22,488 ft.","Daniel Boone","300","-5 degrees C","30 Million Years"];

// Question array
var questionArray = ["In which mountain range does Mt. Everest reside?","How tall is Mt. Everest?","Who was the first person to summit Mt.Everest?",
"How many people attempt Mt. Everest per year?","What is the average temperature on Mt. Everest?","How old is Mt. Everest?"];

//incremented and decremented variables
var time = 10;
var index = 0;
var correct = 0;
var incorrect = 0;

//This function runs the program
function run() {
if (index === 6) {
    playerScore();
}
else {
    time = 10;
    populate();
    playInterval = setInterval(decrement, 1000);
    }
}
//Populates appropriate html and calls the checker function
function populate() {
    $(".my-header").html("<h1>" + questionArray[index] + "</h1>");
    $(".main-window").html("<h3 class='right'>" + answerArray[index] + "</h3>");
    $(".main-window").append("<h3 class='wrong'>" + wrongAnswer1[index] + "</h3>");
    $(".main-window").append("<h3 class='wrong'>" + wrongAnswer2[index] + "</h3>");
    $(".img-center").html("<div>");
    checker();
}

//assigns on click and reviews answer
function checker() {
    $(".right").on("click", function(){
        right();
        stop();
    });
    $(".wrong").on("click", function(){
        wrong();
        stop();
    });
}

//notify user they were correct and increments neccessary values
function right() {
    $(".my-header").html("<h1>" + "Good Choice!" + "</h1>");
    $(".main-window").html("<h3>" + answerArray[index] + "</h3>");
    $(".img-center").html("<img class='imge' src=" + imageArray[index] + ">");
    $(".timer").html("Time: ");
    index++;
    correct++;
    setTimeout(run, 5000);
}

//notify user they were wrong and increments neccessary values
function wrong(){
    $(".my-header").html("<h1>" + "Oh No! The Answer Was:" + "</h1>");
    $(".main-window").html("<h3>" + answerArray[index] + "</h3>");
    $(".img-center").html("<img class='imge' src=" + imageArray[index] + ">");
    $(".timer").html("Time: ");
    index++;
    incorrect++;
    setTimeout(run, 5000);
}
//stops the timer
function stop() {
    clearInterval(playInterval);
}
//This function decrements the timer
function decrement() {
    time--;
    $(".timer").html("Time: " + time);
    if (time === 0) {
        stop();
        noTime();
        setTimeout(run, 5000);
    }
}
//Populates html with all game progress information
function noTime() {
    $(".my-header").html("<h1>" + "Time's Up!" + "</h1>");
    $(".main-window").html("<h3>" + "The Correct Answer Was:" + "</h3>");
    $(".main-window").append("<h3>" + answerArray[index] + "</h3>");
    $(".img-center").html("<img class='imge' src=" + imageArray[index] + ">");
    $(".timer").html("Time:");
    index++;
    incorrect++;
}

//shows player score at the end
function playerScore() {
    $(".my-header").html("<h1>" + "Here's Your Score!" + "</h1>");
    $(".main-window").html("<h3>" + "Correct Answers: " + correct + "</h3>");
    $(".main-window").append("<h3>" + "Incorrect Answers: " + incorrect + "</h3>");
    $(".timer").html("<div>");
    $(".img-center").html("<div>");
    index = 0;
    correct = 0;
    incorrect = 0;
    setTimeout(run, 7000);
}
//Calls the run function and starts the game
$(".start-but").on("click", function() {
    run(); 
});




