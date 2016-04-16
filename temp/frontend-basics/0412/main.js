document.addEventListener('DOMContentLoaded', init); // passing the function, just give a refernce, it doesn't invoke it

function init() {
    // var button = document.getElementById('myButton');
    // button.addEventListener('click', buttonClicked);

    var numButtons = document.querySelectorAll('.buttons button');
    for (i = 0; i < numButtons.length; i++) {
        numButtons[i].addEventListener('click', numButtonClicked);
    }
}

function buttonClicked(e) {
    console.log(e);
};

function numButtonClicked(e) {
  console.log(document.querySelectorAll('#number').textContent)
  console.log(document.getElementById('number').textContent)
   console.log(e.target.textContent)
};
