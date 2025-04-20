function UI() {
  this.btn_start = document.querySelector(".btn-start");
  this.btn_next = document.querySelector(".next-btn");
  this.quiz_box = document.querySelector(".quiz-box");

  this.optionList = document.querySelector(".option-list");
  this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
  this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';
}

UI.prototype.showQuestion = function(question) {
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
    this.optionList.innerHTML = options;
  
    const option = this.optionList.querySelectorAll(".option");
  
    for(let opt of option){
      opt.setAttribute("onclick", "optionSelected(this)")
    }
  }
  
  UI.prototype.showQuestionNumber = function(questionNumber, totalQuestion){
    let tag = `
    <span class="badge bg-warning">${questionNumber}/${totalQuestion}</span>
    `;
    document.querySelector(".quiz-box .question-index").innerHTML = tag;
  }