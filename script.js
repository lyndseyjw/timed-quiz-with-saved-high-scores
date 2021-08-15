var rotatingPages = document.querySelector("#rotating-pages");
var timer = document.querySelector("#timer");
var page1 = document.querySelector("#page1");
var page4 = document.querySelector("#page4");
var startQuiz = document.querySelector("#start-quiz");

var secondsLeft = 60;
var score = 0;

function 2ndPage() {

    function startTimer() {

        var timerInterval = setInterval(function() {

            secondsLeft--;
            timer.textContent = secondsLeft

            if(secondsLeft === 0) {

                clearInterval(timerInterval);
                3rdPage();
            }
        }, 1000);

        return secondsLeft;
    }

    function question1() {

        page1.setAttribute("style", "visibility: hidden;");

        var page2header = document.createElement("h2");
        page2header.textContent = "1. Of the following if statements, which one correctly executes three instructions, if the condition is true?";
        rotatingPages.appendChild(page2header);
        page2header.setAttribute("style", "text-align: center;");

        var page2div = document.createElement("div");
        rotatingPages.appendChild(page2div);
        page2div.setAttribute("style", "margin-left: 200px;");

        var page2button1 = document.createElement("button");
        page2button1.textContent = "A. If (x < 0) a = b * 2; y = x; z = a – y;";
        page2div.appendChild(page2button1);

        var page2button2 = document.createElement("button");
        page2button2.textContent = "B. { if (x < 0) a = b * 2; y = x; z = a – y; }";
        page2div.appendChild(page2button2);

        var page2button3 = document.createElement("button");
        page2button3.textContent = "C. If { (x < 0) a = b * 2; y = x; z = a – y ; }";
        page2div.appendChild(page2button3);

        var page2button4 = document.createElement("button");
        page2button4.textContent = "D. If (x < 0) { a = b * 2; y = x; z = a – y; }";
        page2div.appendChild(page2button4);

        if (page2button4.onclick) {

            var page2div::after {

                content: 'correct!';
                score ++;
                return score;
            }
            
            question2();

        } else {

            secondsLeft - 5;
            question1();
            return secondsLeft;
        }

    }

    function question2() {

        page1.setAttribute("style", "visibility: hidden;");

        var page2header = document.createElement("h2");
        page2header.textContent = "2. Which of the sets of statements below will add 1 to x if x is positive and subtract 1 from x if x is negative but leave x alone if x is 0?";
        rotatingPages.appendChild(page2header);
        page2header.setAttribute("style", "text-align: center;");

        var page2div = document.createElement("div");
        rotatingPages.appendChild(page2div);
        page2div.setAttribute("style", "margin-left: 200px;");

        var page2button1 = document.createElement("button");
        page2button1.textContent = "A. If (x > 0) x++; else x--;";
        page2div.appendChild(page2button1);

        var page2button2 = document.createElement("button");
        page2button2.textContent = "B. If (x > 0) x++; else if (x < 0) x--;";
        page2div.appendChild(page2button2);

        var page2button3 = document.createElement("button");
        page2button3.textContent = "C. If (x == 0) x = 0; else x++; x--;";
        page2div.appendChild(page2button3);

        var page2button4 = document.createElement("button");
        page2button4.textContent = "D. X++; x--;";
        page2div.appendChild(page2button4);

        if (page2button3.onclick) {

            var page2div::after {

                content: 'correct!';
                score ++;
                return score;
            }

            question3();

        } else {

            secondsLeft - 5;
            question2();
            return secondsLeft;
        }

    }

    
}

function 3rdPage() {


}

startQuiz.addEventListener("click", 2ndPage());