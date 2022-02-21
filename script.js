

function loadTrivia() {
    fetch('https://opentdb.com/api.php?amount=10')
        .then(resp => resp.json())
        .then(createTrivias)
        .catch(err => console.log(err));
}

function createTrivias(data) {
    const results = data.results;
    const triviaArray = [];

    for (const res of results) {
        const trivia = new Trivia(res.category, res.type, res.difficulty, res.question, res.correct_answer, res.incorrect_answers);
        triviaArray.push(trivia);
    }

    displayTrivia(triviaArray);
}


function displayTrivia(triviaArray){
    const list = document.getElementById('trivia-list');

    const title = document.getElementsByClassName('main-title')[0];

    const body = document.getElementsByTagName('body')[0];

    const list2 = document.querySelector('#trivia-list');

    const title2 = document.querySelector('.main-title');

    const li = document.querySelector('li');


    console.log(li);
}

