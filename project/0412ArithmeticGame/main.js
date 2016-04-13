document.addEventListener('DOMContentLoaded', init); // passing the function, just give a refernce, it doesn't invoke it
var scores = document.getElementById('scores');
var scoresScore = 0;
var scoresF = document.getElementById('scoresF');
var scoresScoreF = 0;


function init() {
    showScore()
    document.getElementById('question').style.opacity = "1";
    // document.body.style.zoom = '300%';
    var firstNum = document.getElementById('firstNum');
    var relation = document.getElementById('relation');
    var secondNum = document.getElementById('secondNum');
    var inputter = document.getElementById('inputter');
    var answer = document.getElementById('answer');
    var resultBtn = document.getElementById('resultBtn');
    var clearBtn = document.getElementById('clearBtn');
    var btnSkip = document.getElementById('btnSkip');
    var btnR = document.getElementById('btnR');
    var answerArr = [];
    var userAnswer = parseInt(answerArr.join(''));



    firstNum.textContent = Math.floor(Math.random() * 100);
    if (Math.floor(Math.random() < 0.33333333)) {
        relation.textContent = "+";
    } else if (Math.floor(Math.random() > 0.6666666)) {
        relation.textContent = "-";
    } else {
        relation.textContent = "*";
    }
    secondNum.textContent = Math.floor(Math.random() * 100);

    inputter.addEventListener('click', numBtnClicked);
    resultBtn.addEventListener('click', resultBtnClicked);
    clearBtn.addEventListener('click', clearBtnClicked);
    btnSkip.addEventListener('click', btnSkipClicked);
    // btnR.addEventListener('click', btnRClicked);

}

var answerArr = [];

function numBtnClicked(event) {
    if (event.target.textContent == "C") {

    } else if (event.target.textContent == "+/-") {
        btnRClicked();
        userAnswer = (answerArr.join(''));
        answer.textContent = userAnswer;
    } else {
      if(answerArr.length < 7){
        answerArr.push(event.target.textContent);
        userAnswer = parseInt(answerArr.join(''));
        answer.textContent = userAnswer;
      }
    }

    console.log(event.target.textContent);
}

function btnRClicked() {
    console.log('do -')
    var userAnswer = parseInt(answerArr.join(''));
    if (answerArr.length > 0) {
        if (Math.sign(userAnswer) == 1) {
            answerArr.unshift('-');
        } else {
            answerArr.shift('-');
        }
    } else if (answerArr.length == 0) {
        answerArr.push('-');
        userAnswer = answerArr.join('');
        // console.log(answerArr)
        // console.log(userAnswer)
    }
    userAnswer = (answerArr.join(''));
    answer.textContent = userAnswer;
}


function clearBtnClicked() {
    answerArr = [];
    answer.textContent = answerArr.join('');
}

function resultBtnClicked() {
    var userAnswer = parseInt(answerArr.join(''));
    if (relation.textContent == '+') {
        var correctAnswer = parseInt(firstNum.textContent) + parseInt(secondNum.textContent);
    } else if (relation.textContent == '-') {
        var correctAnswer = parseInt(firstNum.textContent) - parseInt(secondNum.textContent);
    } else if (relation.textContent == '*') {
        var correctAnswer = parseInt(firstNum.textContent) * parseInt(secondNum.textContent);
    }
    if (userAnswer == correctAnswer) {
        window.setTimeout(function() {
            document.getElementById('win').classList.add('active');
        }, 600);
        document.getElementById('whiteCard').classList.add('active');
        scoresScore += 1;
    } else if (userAnswer !== correctAnswer) {
        window.setTimeout(function() {
            document.getElementById('lost').classList.add('active');
        }, 600);
        document.getElementById('whiteCard').classList.add('active');
        document.getElementById('lost').textContent = "Fail :( It Should be " + correctAnswer + ".";
        scoresScoreF += 1;
    }

    window.setTimeout(showScore, 900);
    window.setTimeout(slowAlert, 2000);
}

function showScore() {
    scores.textContent = scoresScore;
    scoresF.textContent = scoresScoreF;
}

function slowAlert() {
    document.getElementById('win').classList.remove('active');
    document.getElementById('lost').classList.remove('active');
    document.getElementById('whiteCard').classList.remove('active');
    clearBtnClicked();

    init();
}

function btnSkipClicked() {
    document.getElementById('lost').classList.add('active');
    document.getElementById('whiteCard').classList.add('active');
    document.getElementById('lost').textContent = "You just skip it.";

    function fun() {
        document.getElementById('win').classList.remove('active');
        document.getElementById('lost').classList.remove('active');
        document.getElementById('whiteCard').classList.remove('active');
    }
    window.setTimeout(fun, 800);
    clearBtnClicked();
    // scoresScoreF += 0;
    init();
}

window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
        return; // Should do nothing if the default action has been cancelled
    }

    var handled = false;
    if (event.key !== undefined) {
        // Handle the event with KeyboardEvent.key and set handled true.
    } else if (event.keyIdentifier !== undefined) {
        // Handle the event with KeyboardEvent.keyIdentifier and set handled true.
    } else if (event.keyCode !== undefined) {
        // Handle the event with KeyboardEvent.keyCode and set handled true.
    }

    if (handled) {
        // Suppress "double action" if event handled
        event.preventDefault();
    }
    if (event.keyCode == 189) {
        btnRClicked();
        console.log('1- 89');
    } else if (event.keyCode == 13 ) {
        resultBtnClicked();
    } else if (event.keyCode == 39 || event.keyCode == 32) {
        btnSkipClicked();
    } else if (event.keyCode == 8) {
        event.preventDefault();
        console.log(answerArr);
        console.log(userAnswer);
        if (answerArr.length > 0) {
            answerArr.pop();
        }
        answer.textContent = answerArr.join('');
    } else if (event.keyCode > 47 && event.keyCode < 58 && event.keyCode !== 13) {
      if(answerArr.length < 7){
        console.log('yes: ', event.keyCode);
        answerArr.push((event.keyCode - 48));
        var userAnswer = parseInt(answerArr.join(''));
        answer.textContent = userAnswer;
      }
    }
    console.log(event.keyCode);

    // if(){
    //
    // }

}, true);
