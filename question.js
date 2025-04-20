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