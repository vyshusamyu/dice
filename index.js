function getRandom() {
    var diceImages = [
      "/images/dice1.png",
      "/images/dice2.png",
      "/images/dice3.png",
      "/images/dice4.png",
      "/images/dice5.png",
      "/images/dice6.png",
    ];

    var RandomNumber1 = Math.floor(Math.random() * 6);
    var RandomNumber2 = Math.floor(Math.random() * 6);
    document.querySelector(".img1").setAttribute("src", diceImages[RandomNumber1]);
      document.querySelector(".img2").setAttribute("src", diceImages[RandomNumber2]);

      
      var resultElement = document.querySelector(".container h1");
      if (RandomNumber1 > RandomNumber2) {
        resultElement.innerHTML = "Player 1 won";
      } else if (RandomNumber2 > RandomNumber1) {
        resultElement.innerHTML = "Player 2 won";
      } else {
        resultElement.innerHTML = "Draw";
      }
    }

    
    document.querySelector(".container h1").addEventListener("click", getRandom);
  