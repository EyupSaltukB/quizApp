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
  document.querySelector(".next-btn").classList.remove("show");
});

document.querySelector(".next-btn").addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex +1) {
      quiz.questionIndex += 1;
    showQuestion(quiz.getQuestion());
    document.querySelector(".next-btn").classList.remove("show");
  } else {
    console.log("Quiz Completed");
  }
});

const optionList = document.querySelector(".option-list")
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';


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
  optionList.innerHTML = options;

  const option = optionList.querySelectorAll(".option");

  for(let opt of option){
    opt.setAttribute("onclick", "optionSelected(this)")
  }

}

function optionSelected(option){
  let answer = option.querySelector("span b").textContent;
  let question = quiz.getQuestion();

  if(question.checkAnswer(answer)){
    option.classList.add("correct")
    option.insertAdjacentHTML("beforeend", correctIcon)
  } else{
    option.classList.add("incorrect")
    option.insertAdjacentHTML("beforeend", incorrectIcon)
  }

  for(let i = 0; i < optionList.children.length; i++){
    optionList.children[i].classList.add("disabled");
  }
  document.querySelector(".next-btn").classList.add("show");

}