class Trivia {
  constructor(category, type, difficulty, question, correctAnswer, incorrectAnswers) {
    this.category = category;
    this.type = type;
    this.difficulty = difficulty;
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.incorrectAnswers = incorrectAnswers;
  }

  getAllAnswers(){
    const allAnswers = [];
    allAnswers.push(this.correctAnswer);
    allAnswers.push(...this.incorrectAnswers);
    // for (const answ of this.incorrectAnswers) {
    //   allAnswers.push(answ);
    // }
    const shuffledArray = Utility.shuffleArray(allAnswers);
    return shuffledArray;
  }

  checkAnswer(answer){
    if(answer === this.correctAnswer){
      return 1;
    }
    else {
      return 0;
    }
  }


}

