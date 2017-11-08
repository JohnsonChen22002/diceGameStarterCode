$(document).ready(function() {
  $("button").click(function() {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    if (dice1 === 1) {
      $("#first-die").html("<img src = images/Dice-1.svg.png> ")
    }
    if (dice1 === 2) {
      $("#first-die").html("<img src = images/Dice-2.svg.png> ")
    }
    if (dice1 === 3) {
      $("#first-die").html("<img src = images/Dice-3.svg.png> ")
    }
    if (dice1 === 4) {
      $("#first-die").html("<img src = images/Dice-4.svg.png> ")
    }
    if (dice1 === 5) {
      $("#first-die").html("<img src = images/Dice-5.svg.png> ")
    }
    if (dice1 === 6) {
      $("#first-die").html("<img src = images/Dice-6.svg.png> ")
    }
    if (dice2 === 1) {
      $("#second-die").html("<img src = images/Dice-1.svg.png> ")
    }
    if (dice2 === 2) {
      $("#second-die").html("<img src = images/Dice-2.svg.png> ")
    }
    if (dice2 === 3) {
      $("#second-die").html("<img src = images/Dice-3.svg.png> ")
    }
    if (dice2 === 4) {
      $("#second-die").html("<img src = images/Dice-4.svg.png> ")
    }
    if (dice2 === 5) {
      $("#second-die").html("<img src = images/Dice-5.svg.png> ")
    }
    if (dice2 === 6) {
      $("#second-die").html("<img src = images/Dice-6.svg.png> ")
    }
  });
});
