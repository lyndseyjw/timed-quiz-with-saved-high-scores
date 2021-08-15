var rotatingPages = document.querySelector("#rotating-pages");
var timer = document.querySelector("#timer");
var page1 = document.querySelector("#page1");
var page4 = document.querySelector("#page4");
var startQuiz = document.querySelector("#start-quiz");

var secondsLeft = 60;
var score = 0;

function secondPage() {

    startTimer();
    question1();
}

function startTimer() {

    var timerInterval = setInterval(function() {

        secondsLeft--;
        timer.textContent = secondsLeft

        if(secondsLeft === 0) {

            clearInterval(timerInterval);
            thirdPage();
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

        // var page2div::after {

        //     content: 'correct!';
        // }

        score ++;
        question2();
        return score;

    } else {

        // var pag2div::after {

        //     content: 'wrong!';
        // }

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

        // var page2div::after {

        //     content: 'correct!';
        // }

        score ++;
        question3();
        return score;

    } else {

        // var pag2div::after {

        //     content: 'wrong!';
        // }

        secondsLeft - 5;
        question2();
        return secondsLeft;
    }

}

function question3() {

    page1.setAttribute("style", "visibility: hidden;");

    var page2header = document.createElement("h2");
    page2header.textContent = "3. _______ is the process of finding errors and fixing them within a program.";
    rotatingPages.appendChild(page2header);
    page2header.setAttribute("style", "text-align: center;");

    var page2div = document.createElement("div");
    rotatingPages.appendChild(page2div);
    page2div.setAttribute("style", "margin-left: 200px;");

    var page2button1 = document.createElement("button");
    page2button1.textContent = "A. Compiling";
    page2div.appendChild(page2button1);

    var page2button2 = document.createElement("button");
    page2button2.textContent = "B. Executing";
    page2div.appendChild(page2button2);

    var page2button3 = document.createElement("button");
    page2button3.textContent = "C. Debugging";
    page2div.appendChild(page2button3);

    var page2button4 = document.createElement("button");
    page2button4.textContent = "D. Scanning";
    page2div.appendChild(page2button4);

    if (page2button3.onclick) {

        // var page2div::after {

        //     content: 'correct!';
        // }

        score ++;
        question4();
        return score;

    } else {

        // var pag2div::after {

        //     content: 'wrong!';
        // }

        secondsLeft - 5;
        question3();
        return secondsLeft;
    }

}

function question4() {

    page1.setAttribute("style", "visibility: hidden;");

    var page2header = document.createElement("h2");
    page2header.textContent = "4. Sal needs to execute a section of code ten times within a program. Compare the selection structures below and select which one meets the needs identified.";
    rotatingPages.appendChild(page2header);
    page2header.setAttribute("style", "text-align: center;");

    var page2div = document.createElement("div");
    rotatingPages.appendChild(page2div);
    page2div.setAttribute("style", "margin-left: 200px;");

    var page2button1 = document.createElement("button");
    page2button1.textContent = "A. If-Else";
    page2div.appendChild(page2button1);

    var page2button2 = document.createElement("button");
    page2button2.textContent = "B. For";
    page2div.appendChild(page2button2);

    var page2button3 = document.createElement("button");
    page2button3.textContent = "C. While";
    page2div.appendChild(page2button3);

    var page2button4 = document.createElement("button");
    page2button4.textContent = "D. If";
    page2div.appendChild(page2button4);

    if (page2button2.onclick) {

        // var page2div::after {

        //     content: 'correct!';
        // }

        score ++;
        question5();
        return score;

    } else {

        // var pag2div::after {

        //     content: 'wrong!';
        // }

        secondsLeft - 5;
        question4();
        return secondsLeft;
    }
}    

function question5() {

    page1.setAttribute("style", "visibility: hidden;");

    var page2header = document.createElement("h2");
    page2header.textContent = "5. Which of the following attributes is used to open an hyperlink in new tab?";
    rotatingPages.appendChild(page2header);
    page2header.setAttribute("style", "text-align: center;");

    var page2div = document.createElement("div");
    rotatingPages.appendChild(page2div);
    page2div.setAttribute("style", "margin-left: 200px;");

    var page2button1 = document.createElement("button");
    page2button1.textContent = "A. tab";
    page2div.appendChild(page2button1);

    var page2button2 = document.createElement("button");
    page2button2.textContent = "B. target";
    page2div.appendChild(page2button2);

    var page2button3 = document.createElement("button");
    page2button3.textContent = "C. href";
    page2div.appendChild(page2button3);

    var page2button4 = document.createElement("button");
    page2button4.textContent = "D. src";
    page2div.appendChild(page2button4);

    if (page2button2.onclick) {

        // var page2div::after {

        //     content: 'correct!';
        // }

        score ++;
        thirdPage();
        return score;

    } else {

        // var pag2div::after {

        //     content: 'wrong!';
        // }

        secondsLeft - 5;
        question5();
        return secondsLeft;
    }
}

function thirdPage() {

    page1.setAttribute("style", "visibility: hidden;");
    
    var page3header = document.createElement("h2");
    page3header.textContent = "All done!";
    rotatingPages.appendChild(page3header);
    page3header.setAttribute("style", "text-align: center;");

    var page3paragraph = document.createElement("p");
    page3paragraph.textContent = "Your final score is : " + score;

    var page3input = document.createElement("input");
    rotatingPages.appendChild(page3input)
    page3input.setAttribute("type", "text");
    page3input.setAttribute("placeholder", "Type your initials here to save your score");

    var page3button = document.createElement("button");
    page3button.textContent = "Submit";
    rotatingPages.appendChild(page3button);
    page3button.setAttribute("style", "margin: 20px auto; padding: 15px;");

}

if (startQuiz){

    startQuiz.addEventListener("click", secondPage());
}

// question 1-4 complementary of : https://www.proprofs.com/quiz-school/story.php?title=computer-programming-ii-exam-multiple-choice