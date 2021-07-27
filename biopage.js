// We want to write a function that nests the qeustion and runs it when the page loads.





var totalScore = "0"; // I could not figure out how to turn this into a function.


  
  

   

  

  






      let userName = prompt("Greetings! What is your name?"); //declare a variable and ask the user a question
      let confirmGuess = confirm(
        " Welcome " + userName + "! Are you ready for your guessing game?"
      );

      function ageCheck() {
        let rightAnswer = false;
        while (rightAnswer === false) {
          let response = prompt("Am I 22? y/n");

          if (response.toUpperCase() === "Y" || response.toUpperCase() === "YES") {
            totalScore++;
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

  We want the loop inside of a function


*/

      function answerForDoIPlay() {
        let rightAnswer = false;
        while (rightAnswer === false) {
          let response = prompt("Do I like to play music? y/n? ");
          if (response.toUpperCase() === "Y" || response.toUpperCase() === "YES") { //(response.toUpperCase() === ‘Y’ || response.toUpperCase() === ‘YES’)
            totalScore++;
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

          if (response.toUpperCase() === "N" || response.toUpperCase() === "NO") {
            totalScore++;
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

          if (response.toUpperCase() === "Y" || response.toUpperCase() == "YES") {
            totalScore++;
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

          if (response.toUpperCase() === "Y" || response.toUpperCase() === "YES") {
            totalScore++;
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
              totalScore++;
              
              alert("You got it!");
              rightAnswer = false;
              
            }
          }
          break;
        }
      }

fourAttemptQuestions ();



function checkTheAnswers() {
  let studyHours = ["2", "4", "6", "8", "10"]; //declaring our variable for the correct answers

  for (answer = 1; answer <= 6; answer++) {
    /* Make the question loop six times*/
    let studyHourResponse = prompt(
      "How many hours do you think I study?" //ask the user a question
    );
      let answerFound = false;
    for (i = 0; i < studyHours.length; i++) {
      /* Here, we are making a loop that will be the next correct answer in the array for the user to input*/
      // console.log(studyHours[i]);

      if (studyHourResponse === studyHours[i]) {
        // If the user answer correctly, the first 'for' loop will run again
        totalScore++
        alert("That's right! Guess again?");
        answerFound = true;
        
        break;
      }
      
    }
    if (answerFound === false) {
      //If the user answer incorrectly, The first 'for' oop will run again.
      alert("Umm noo..");
    }
  }

  let finalAnswer = alert(
    "Cool! the correct answers were " + studyHours + " Enjoy!!"
  );
}
checkTheAnswers();
alert("Your total score is " + totalScore);
console.log(totalScore);



//let userEndScore = alert("You got " + scoreKeeper());



/* We want a question that has multiple answers,

      We want to give the user 6 attempts to answer the the question
      Eeverytime a user gets an answer right, they will get a message saying they got it right
      the question gets asked to the user again
      If the user gets the answer wrong, we want to let the user know the answer was wrong.
      The question gets asked a total of six times.
      After the attempts are up, the user will get a message revealing the right answers. */
