document.addEventListener('DOMContentLoaded', init); // passing the function, just give a refernce, it doesn't invoke it
var scores = document.getElementById('scores');
var scoresScore = 0;
var scoresF = document.getElementById('scoresF');
var scoresScoreF = 0;


function init() {
    showScore()
    document.getElementById('question').style.opacity = "1";
    document.body.style.zoom = '300%';
    var firstNum = document.getElementById('firstNum');
    var relation = document.getElementById('relation');
    var secondNum = document.getElementById('secondNum');
    var inputter = document.getElementById('inputter');
    var answer = document.getElementById('answer');
    var resultBtn = document.getElementById('resultBtn');
    var clearBtn = document.getElementById('clearBtn');
    var btnSkip = document.getElementById('btnSkip');
    var btnR = document.getElementById('btnR');
    var answerArr;



    firstNum.textContent = Math.floor(Math.random() * 100);
    if (Math.floor(Math.random() < 0.33333333)) {
        relation.textContent = "+";
    } else if(Math.floor(Math.random() > 0.6666666)) {
        relation.textContent = "-";
    }else{
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
    if (event.target.textContent == "C") {} else if (event.target.textContent == "+/-") {
        btnRClicked();
        userAnswer = (answerArr.join(''));
        answer.textContent = userAnswer;
    } else {
        answerArr.push(event.target.textContent);
        var userAnswer = parseInt(answerArr.join(''));
        answer.textContent = userAnswer;
    }

    console.log(event.target.textContent);
}

function btnRClicked() {
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
        console.log(answerArr)
        console.log(userAnswer)
    }

}


function clearBtnClicked() {
    answerArr = [];
    answer.textContent = answerArr.join('');
}

function resultBtnClicked() {
    var userAnswer = parseInt(answerArr.join(''));
    if (relation.textContent == '+') {
        var correctAnswer = parseInt(firstNum.textContent) + parseInt(secondNum.textContent);
    } else if(relation.textContent == '-') {
        var correctAnswer = parseInt(firstNum.textContent) - parseInt(secondNum.textContent);
    }else if(relation.textContent == '*'){
var correctAnswer = parseInt(firstNum.textContent) * parseInt(secondNum.textContent);
    }
    if (userAnswer == correctAnswer) {
        document.getElementById('win').classList.add('active');
        scoresScore += 1;
    } else if (userAnswer !== correctAnswer) {
        document.getElementById('lost').classList.add('active');
        document.getElementById('lost').textContent = "Fail :( It Should be " + correctAnswer + ".";
        scoresScoreF += 1;
    }

    window.setTimeout(showScore, 300);
    window.setTimeout(slowAlert, 1300);
}

function showScore() {
    scores.textContent = scoresScore;
    scoresF.textContent = scoresScoreF;
}

function slowAlert() {
    document.getElementById('win').classList.remove('active');
    document.getElementById('lost').classList.remove('active');
    clearBtnClicked();

    init();
}

function btnSkipClicked() {
    document.getElementById('lost').classList.add('active');
    document.getElementById('lost').textContent = "You just skip it.";
function fun(){
  document.getElementById('win').classList.remove('active');
  document.getElementById('lost').classList.remove('active');
}
    window.setTimeout(fun, 800);

    clearBtnClicked();
    scoresScoreF += 0;
    init();
}
