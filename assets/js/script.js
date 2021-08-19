var rotatingPages = document.querySelector("#rotating-pages");
var timer = document.querySelector("#timer");
var page1 = document.querySelector("#page1");
var page4 = document.querySelector("#page4");
var startQuiz = document.querySelector("#start-quiz");

var secondsLeft = 60;
var score = 0;

var timerInterval;
var highScore;

function startTimer() {

    timerInterval = setInterval(function() {

        secondsLeft--;
        timer.textContent = secondsLeft;

        if(secondsLeft === 0) {

            clearInterval(timerInterval);
            thirdPage();
        }
    }, 1000);

    return secondsLeft;
}

if (startQuiz){

    startQuiz.addEventListener("click", function() {

        startTimer();

        page1.innerHTML = "";

        var page2header = document.createElement("h2");
        page2header.textContent = "1. Of the following if statements, which one correctly executes three instructions, if the condition is true?";
        rotatingPages.appendChild(page2header);
        page2header.setAttribute("style", "text-align: center;");

        var page2div = document.createElement("div");
        rotatingPages.appendChild(page2div);

        var page2button1 = document.createElement("button");
        page2button1.textContent = "A. If (x < 0) a = b * 2; y = x; z = a – y;";
        page2div.appendChild(page2button1);
        page2button1.setAttribute("data-state", "not-answer");
        page2button1.setAttribute("style", "display: block; margin: 20px auto; padding: 15px;");

        var page2button2 = document.createElement("button");
        page2button2.textContent = "B. { if (x < 0) a = b * 2; y = x; z = a – y; }";
        page2div.appendChild(page2button2);
        page2button2.setAttribute("data-state", "not-answer");
        page2button2.setAttribute("style", "display: block; margin: 20px auto; padding: 15px;");

        var page2button3 = document.createElement("button");
        page2button3.textContent = "C. If { (x < 0) a = b * 2; y = x; z = a – y ; }";
        page2div.appendChild(page2button3);
        page2button3.setAttribute("data-state", "not-answer");
        page2button3.setAttribute("style", "display: block; margin: 20px auto; padding: 15px;");

        var page2button4 = document.createElement("button");
        page2button4.textContent = "D. If (x < 0) { a = b * 2; y = x; z = a – y; }";
        page2div.appendChild(page2button4);
        page2button4.setAttribute("data-state", "answer");
        page2button4.setAttribute("style", "display: block; margin: 20px auto; padding: 15px;");

        page2div.addEventListener("click", function(event) {

            var element = event.target;

            if (element.matches("button")) {

                var answer = element.getAttribute("data-state");

                if (answer === "answer") {

                    score ++;
                    timer.setAttribute("style", "color: black;");
                    rotatingPages.innerHTML = "";
                    question2(score);

                } else if (answer === "not-answer") {

                    secondsLeft -= 5;
                    timer.setAttribute("style", "color: red;");
                }
            }
        }); 
    });
}

function question2(score) {

    var page2header = document.createElement("h2");
    page2header.textContent = "2. Which of the sets of statements below will add 1 to x if x is positive and subtract 1 from x if x is negative but leave x alone if x is 0?";
    rotatingPages.appendChild(page2header);
    page2header.setAttribute("style", "text-align: center;");

    var page2div = document.createElement("div");
    rotatingPages.appendChild(page2div);

    var page2button1 = document.createElement("button");
    page2button1.textContent = "A. If (x > 0) x++; else x--;";
    page2div.appendChild(page2button1);
    page2button1.setAttribute("data-state", "not-answer");
    page2button1.setAttribute("style", "display: block; margin: 20px auto; padding: 15px;");

    var page2button2 = document.createElement("button");
    page2button2.textContent = "B. If (x > 0) x++; else if (x < 0) x--;";
    page2div.appendChild(page2button2);
    page2button2.setAttribute("data-state", "not-answer");
    page2button2.setAttribute("style", "display: block; margin: 20px auto; padding: 15px;");

    var page2button3 = document.createElement("button");
    page2button3.textContent = "C. If (x == 0) x = 0; else x++; x--;";
    page2div.appendChild(page2button3);
    page2button3.setAttribute("data-state", "answer");
    page2button3.setAttribute("style", "display: block; margin: 20px auto; padding: 15px;");

    var page2button4 = document.createElement("button");
    page2button4.textContent = "D. X++; x--;";
    page2div.appendChild(page2button4);
    page2button4.setAttribute("data-state", "not-answer");
    page2button4.setAttribute("style", "display: block; margin: 20px auto; padding: 15px;");

    page2div.addEventListener("click", function(event) {

        var element = event.target;

        if (element.matches("button")) {

            var answer = element.getAttribute("data-state");

            if (answer === "answer") {

                score ++;
                timer.setAttribute("style", "color: black;");
                rotatingPages.innerHTML = "";
                question3(score);

            } else if (answer === "not-answer") {
                
                secondsLeft -= 5;
                timer.setAttribute("style", "color: red;");
            }
        }
    });
}

function question3(score) {

    var page2header = document.createElement("h2");
    page2header.textContent = "3. _______ is the process of finding errors and fixing them within a program.";
    rotatingPages.appendChild(page2header);
    page2header.setAttribute("style", "text-align: center;");

    var page2div = document.createElement("div");
    rotatingPages.appendChild(page2div);

    var page2button1 = document.createElement("button");
    page2button1.textContent = "A. Compiling";
    page2div.appendChild(page2button1);
    page2button1.setAttribute("data-state", "not-answer");
    page2button1.setAttribute("style", "display: block; margin: 20px auto; padding: 15px;");

    var page2button2 = document.createElement("button");
    page2button2.textContent = "B. Executing";
    page2div.appendChild(page2button2);
    page2button2.setAttribute("data-state", "not-answer");
    page2button2.setAttribute("style", "display: block; margin: 20px auto; padding: 15px;");

    var page2button3 = document.createElement("button");
    page2button3.textContent = "C. Debugging";
    page2div.appendChild(page2button3);
    page2button3.setAttribute("data-state", "answer");
    page2button3.setAttribute("style", "display: block; margin: 20px auto; padding: 15px;");

    var page2button4 = document.createElement("button");
    page2button4.textContent = "D. Scanning";
    page2div.appendChild(page2button4);
    page2button4.setAttribute("data-state", "not-answer");
    page2button4.setAttribute("style", "display: block; margin: 20px auto; padding: 15px;");

    page2div.addEventListener("click", function(event) {

        var element = event.target;

        if (element.matches("button")) {

            var answer = element.getAttribute("data-state");

            if (answer === "answer") {

                score ++;
                timer.setAttribute("style", "color: black;");
                rotatingPages.innerHTML = "";
                question4(score);

            } else if (answer === "not-answer") {

                secondsLeft -= 5;
                timer.setAttribute("style", "color: red;");
            }
        }
    });
}

function question4(score) {

    var page2header = document.createElement("h2");
    page2header.textContent = "4. Sal needs to execute a section of code ten times within a program. Compare the selection structures below and select which one meets the needs identified.";
    rotatingPages.appendChild(page2header);
    page2header.setAttribute("style", "text-align: center;");

    var page2div = document.createElement("div");
    rotatingPages.appendChild(page2div);

    var page2button1 = document.createElement("button");
    page2button1.textContent = "A. If-Else";
    page2div.appendChild(page2button1);
    page2button1.setAttribute("data-state", "not-answer");
    page2button1.setAttribute("style", "display: block; margin: 20px auto; padding: 15px;");

    var page2button2 = document.createElement("button");
    page2button2.textContent = "B. For";
    page2div.appendChild(page2button2);
    page2button2.setAttribute("data-state", "answer");
    page2button2.setAttribute("style", "display: block; margin: 20px auto; padding: 15px;");

    var page2button3 = document.createElement("button");
    page2button3.textContent = "C. While";
    page2div.appendChild(page2button3);
    page2button3.setAttribute("data-state", "not-answer");
    page2button3.setAttribute("style", "display: block; margin: 20px auto; padding: 15px;");

    var page2button4 = document.createElement("button");
    page2button4.textContent = "D. If";
    page2div.appendChild(page2button4);
    page2button4.setAttribute("data-state", "not-answer");
    page2button4.setAttribute("style", "display: block; margin: 20px auto; padding: 15px;");

    page2div.addEventListener("click", function(event) {

        var element = event.target;

        if (element.matches("button")) {

            var answer = element.getAttribute("data-state");

            if (answer === "answer") {

                score ++;
                timer.setAttribute("style", "color: black;");
                rotatingPages.innerHTML = "";
                question5(score);

            } else if (answer === "not-answer") {

                secondsLeft -= 5;
                timer.setAttribute("style", "color: red;");
            }
        }
    });
}    

function question5(score) {

    var page2header = document.createElement("h2");
    page2header.textContent = "5. Which of the following attributes is used to open an hyperlink in new tab?";
    rotatingPages.appendChild(page2header);
    page2header.setAttribute("style", "text-align: center;");

    var page2div = document.createElement("div");
    rotatingPages.appendChild(page2div);

    var page2button1 = document.createElement("button");
    page2button1.textContent = "A. tab";
    page2div.appendChild(page2button1);
    page2button1.setAttribute("data-state", "not-answer");
    page2button1.setAttribute("style", "display: block; margin: 20px auto; padding: 15px;");

    var page2button2 = document.createElement("button");
    page2button2.textContent = "B. target";
    page2div.appendChild(page2button2);
    page2button2.setAttribute("data-state", "answer");
    page2button2.setAttribute("style", "display: block; margin: 20px auto; padding: 15px;");

    var page2button3 = document.createElement("button");
    page2button3.textContent = "C. href";
    page2div.appendChild(page2button3);
    page2button3.setAttribute("data-state", "not-answer");
    page2button3.setAttribute("style", "display: block; margin: 20px auto; padding: 15px;");

    var page2button4 = document.createElement("button");
    page2button4.textContent = "D. src";
    page2div.appendChild(page2button4);
    page2button4.setAttribute("data-state", "not-answer");
    page2button4.setAttribute("style", "display: block; margin: 20px auto; padding: 15px;");

    page2div.addEventListener("click", function(event) {

        var element = event.target;

        if (element.matches("button")) {

            var answer = element.getAttribute("data-state");

            if (answer === "answer") {

                score ++;
                timer.setAttribute("style", "color: black;");
                rotatingPages.innerHTML = "";
                timer.textContent = "";
                thirdPage(score);

            } else if (answer === "not-answer") {

                secondsLeft -= 5;
                timer.setAttribute("style", "color: red;");
            }
        }
    });
}

function thirdPage(score) {

    clearInterval(timerInterval);
    rotatingPages.innerHTML = "";

    var page3header = document.createElement("h2");
    page3header.textContent = "All done!";
    rotatingPages.appendChild(page3header);
    page3header.setAttribute("style", "text-align: center; margin-bottom: 40px");

    var page3paragraph = document.createElement("p");
    page3paragraph.textContent = "Your final score is : " + score;
    rotatingPages.appendChild(page3paragraph);

    var page3input = document.createElement("input");
    rotatingPages.appendChild(page3input)
    page3input.setAttribute("type", "text");
    page3input.setAttribute("placeholder", "Type your initials here to save your score");
    page3input.setAttribute("style", "margin: 20px auto; display: block;")
    page3input.setAttribute("size", page3input.getAttribute("placeholder").length)

    var page3button = document.createElement("button");
    page3button.textContent = "Submit";
    rotatingPages.appendChild(page3button);
    page3button.setAttribute("style", "display: block; margin: 20px auto; padding: 15px;");
    page3button.setAttribute("data-type", "submit");

    rotatingPages.addEventListener("click", function(event) {

        var element = event.target;

        if (element.matches("button")) {

            var answer = element.getAttribute("data-type");

            if (answer === "submit") {

                highScore = page3input.value + " - " + score;
                localStorage.setItem("high-score", highScore);
            }
        }
    });
}

page4.addEventListener("click", function() {

    rotatingPages.innerHTML = "";

    var page4header = document.createElement("h2");
    page4header.textContent = "Your High Score";
    rotatingPages.appendChild(page4header);
    page4header.setAttribute("style", "text-align: center;");

    var page4paragraph = document.createElement("p");
    page4paragraph.textContent = localStorage.getItem ("high-score", highScore);
    page4paragraph.setAttribute("style", "margin-bottom: 20px;");
    rotatingPages.appendChild(page4paragraph);

    var page4button = document.createElement("button");
    page4button.textContent = "Retake Quiz";
    rotatingPages.appendChild(page4button);
    page4button.setAttribute("data-state", "reload");
    page4button.setAttribute("style", "display: block; margin: 20px auto; padding: 15px;");

    rotatingPages.addEventListener("click", function(event) {

        var element = event.target;

        if (element.matches("button")) {

            var answer = element.getAttribute("data-state");

            if (answer === "reload") {

                location.reload();

            }
        }
    });
});

// question 1-4 complementary of : https://www.proprofs.com/quiz-school/story.php?title=computer-programming-ii-exam-multiple-choice