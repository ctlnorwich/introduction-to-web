const name = document.getElementById("name");
const nameButton = document.getElementById("name-button");
const welcomeText = document.getElementById("welcome-text");
const questionText = document.getElementById("question");
const answerList = document.querySelector("#answers");
const scoreText = document.querySelector(".score");
const resultMessage = document.querySelector(".result-message");
const resetButton = document.querySelector("#reset-button");

nameButton.addEventListener("click", function (event) {
  welcomeText.innerHTML = `Welcome ${name.value}!`;
});

const questionBank = [
  {
    question: "Question 1",
    answers: ["Answer 1-1", "Answer 1-2", "Answer 1-3"],
    correctAnswer: 1,
  },
  {
    question: "Question 2",
    answers: ["Answer 2-1", "Answer 2-2", "Answer 2-3"],
    correctAnswer: 0,
  },
  {
    question: "Question 3",
    answers: ["Answer 3-1", "Answer 3-2", "Answer 3-3"],
    correctAnswer: 2,
  },
];

let currentScore = 0;
let questionIndex = 0;

const checkAnswer = function (button) {
  button.addEventListener("click", (event) => {
    let index = Number(event.target.getAttribute("data-index"));
    let result = index === currentQuestion.correctAnswer;

    questionIndex++;

    if (result) {
      currentScore++;
      console.log(currentScore);
      scoreText.innerHTML = currentScore.toString();
      setUpQuestion(questionIndex);
      resultMessage.innerHTML = `Well done, ${name.value}, that's correct!`;
    } else {
      resultMessage.innerHTML = `Sorry, ${name.value}, that's not correct.`;
      setUpQuestion(questionIndex);
    }
  });
};

const setUpQuestion = function (questionIndex) {
  answerList.innerHTML = "";

  if (!questionBank[questionIndex]) {
    questionText.innerHTML = `End of Quiz! You scored ${currentScore.toString()} out of ${questionBank.length.toString()}!`;
    return;
  }

  currentQuestion = questionBank[questionIndex];
  questionText.innerHTML = currentQuestion.question;

  index = 0;
  for (const answer of currentQuestion.answers) {
    const answerListItem = document.createElement("li");
    const answerButton = document.createElement("button");
    answerButton.innerHTML = answer;
    answerButton.setAttribute("data-index", index);

    if (index === currentQuestion.correctAnswer) {
      console.log(answer);
      answerButton.setAttribute("correct", "true");
    } else {
      answerButton.setAttribute("correct", "false");
    }

    answerList.append(answerListItem);
    answerListItem.append(answerButton);

    checkAnswer(answerButton);
    index++;
  }
};

setUpQuestion(questionIndex);

resetButton.addEventListener("click", function (event) {
  currentScore = 0;
  questionIndex = 0;
  scoreText.innerHTML = "0";
  resultMessage.innerHTML = "";
  setUpQuestion(questionIndex);
});
