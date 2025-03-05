
function Question(questionText, answerChoices, trueAnswer){
    this.questionText = questionText;
    this.answerChoices = answerChoices;
    this.trueAnswer = trueAnswer;
}

Question.prototype.checkAnswer = function(answer){
    return answer === this.trueAnswer;
}

let questions = [
    new Question ("1)Hangisi js pkaet yönetim uygulamasıdır?", {a: "ads", b: "dsds" , c : "sas"}, "c"),
    new Question ("2)Hangisi js pkaet yönetim uygulamasıdır?", {a: "ads", b: "dsds" , c : "sas"}, "c"),
    new Question ("3)Hangisi js pkaet yönetim uygulamasıdır?", {a: "ads", b: "dsds" , c : "sas"}, "c"),
    new Question ("4)Hangisi js pkaet yönetim uygulamasıdır?", {a: "ads", b: "dsds" , c : "sas"}, "c"),
]

function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}
const quiz = new Quiz(questions);

document.querySelector(".btn-start").addEventListener("click", function(){
    if(quiz.questions.length != quiz.questionIndex){
        console.log(quiz.getQuestion())
        quiz.questionIndex += 1;
    } else {
        console.log("Quiz Completed")
    }

})