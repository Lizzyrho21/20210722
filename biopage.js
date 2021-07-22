  // We want to write a function that nests the qeustion and runs it when the page loads.

      // this is the first question in the functions

      let userName = prompt("Greetings! What is your name?"); //declare a variable and ask the user a question
      let confirmGuess = confirm(
        " Welcome " + userName + "! Are you ready for your guessing game?"
      );

      function ageCheck() {
        let rightAnswer = false;
        while (rightAnswer === false) {
          let response = prompt("Am I 22? y/n");

          if (response === "y" || response.toUpperCase() === "YES") {
            alert("You got it!!");
            rightAnswer = true;
          } else {
            alert("No, try again..");
          }
        }
      }

      ageCheck();

      /* we want this loop question inside of a function so that 
 when the function is called the loop will begin!

 1. We want the loop inside of a function 
 what is a function?
 
 
*/

      function answerForDoIPlay() {
        let rightAnswer = false;
        while (rightAnswer === false) {
          let response = prompt("Do I like to play music? y/n? ");
          if (response === "y" || response === "yes") {
            rightAnswer = true;
            alert("You got it!!");
          } else {
            alert("try again!");
          }
        }
      }
     

      answerForDoIPlay();

      function checkIfCornbread() {
        let cornBread = false;
        while (cornBread === false) {
          let response = prompt("Do I like cornbread? y/n?");

          if (response === "n" || response === "no") {
            alert("You guessed it!");
            cornBread = true;
          } else {
            alert("NOPE!");
          }
        }
      }
      checkIfCornbread();

      function checkDrawingAnswer() {
        let loveToDraw = false;
        while (loveToDraw === false) {
          let response = prompt("Do I love to draw?");

          if (response === "yes" || response == "y") {
            alert("AWESOME!!");
            loveToDraw = true;
          } else {
            alert("I'm concerned..Try again.");
          }
        }
      }

      checkDrawingAnswer();

      function doYouLikeMyPage() {
        let likePage = false;
        while (likePage === false) {
          let response = prompt(
            "Last y / n  " + userName + " , Do you think you'll like my page?"
          );

          if (response === "y" || response === "yes") {
            alert(userName + " , You guessed correctly!!");
            likePage = true;
          } else {
            alert(" ...Let's try this again, " + userName);
          }
        }
      }

      doYouLikeMyPage();

      function fourAttemptQuestions() {
        for (attempts = 1; attempts <= 4; attempts++) {
          let correctAge = "22";
          let rightAnswer = true;

          while (rightAnswer === true) {
            let ageEntered = prompt("Guess my age!");
            if (ageEntered > correctAge) {
              alert("too high, I'm in my early twenties!");
            } else if (ageEntered < correctAge) {
              alert("I'm not THAT young..");
            } else if (ageEntered === correctAge) {
              alert("You got it!");
              rightAnswer = false;
            }
          }
          break;
        }
      }

      fourAttemptQuestions ();

      function checkTheAnswers() {
        let studyHours = ["2", "4", "6", "8", "10"];

        for (answer = 1; answer <= 6; answer++) {
          let studyHourResponse = prompt(
            "How many hours do you think I study?"
          );

          for (i = 0; i < studyHours.length; i++) {
            // console.log(studyHours[i]);

            if (studyHourResponse === studyHours[i]) {
              alert("That's right! Guess again?");
            }
            
           
          }
          
    }
   
        
        let finalAnswer = alert("Cool! the correct answers were " + studyHours + " Enjoy!!");
      }
      checkTheAnswers();

    