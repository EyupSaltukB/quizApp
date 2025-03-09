function Question(questionText, answerChoices, trueAnswer) {
  this.questionText = questionText;
  this.answerChoices = answerChoices;
  this.trueAnswer = trueAnswer;
}

Question.prototype.checkAnswer = function (answer) {
  return answer === this.trueAnswer;
};

let questions = [
  new Question(
    "1) Hangisi js paket yönetim uygulamasıdır?",
    { a: "ads", b: "dsds", c: "sas" },
    "c"
  ),
  new Question(
    "2) Hangisi js paket yönetim uygulamasıdır?",
    { a: "ads", b: "dsds", c: "sas" },
    "c"
  ),
  new Question(
    "3) Hangisi js paket yönetim uygulamasıdır?",
    { a: "ads", b: "dsds", c: "sas" },
    "c"
  ),
  new Question(
    "4) Hangisi js paket yönetim uygulamasıdır?",
    { a: "ads", b: "dsds", c: "sas" },
    "c"
  ),
];

function Quiz(questions) {
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function () {
  return this.questions[this.questionIndex];
};

const quiz = new Quiz(questions);

document.querySelector(".btn-start").addEventListener("click", function () {
  document.querySelector(".quiz-box").classList.add("active");
  showQuestion(quiz.getQuestion());
});

document.querySelector(".next-btn").addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex +1) {
      quiz.questionIndex += 1;
    showQuestion(quiz.getQuestion());
  } else {
    console.log("Quiz Completed");
  }
});

function showQuestion(question) {
  let questionText = `<span>${question.questionText}</span>`;
  let options = "";

  for (let answer in question.answerChoices) {
    // Burada yanlış değişken ismi düzeltilmiş
    options += `
        <div class="option">
            <span> <b>${answer}</b> : ${question.answerChoices[answer]} </span>
        </div>
        `;
  }

  document.querySelector(".question-text").innerHTML = questionText; // Burada değişken çakışması düzeltilmiş
  document.querySelector(".option-list").innerHTML = options;
}