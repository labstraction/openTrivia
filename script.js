

function loadTrivia() {
    fetch('https://opentdb.com/api.php?amount=15')
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

    for (const trivia of triviaArray) {
        let liElement = createTriviaListElement(trivia)
        list.appendChild(liElement);
    }


    // const title = document.getElementsByClassName('main-title')[0];

    // const body = document.getElementsByTagName('body')[0];

    // const list2 = document.querySelector('#trivia-list');

    // const title2 = document.querySelector('.main-title');

    // const li = document.querySelector('li');
    
}


function createTriviaListElement(trivia){
    let liElement = document.createElement('li');
    let span = document.createElement('span');

    span.className += "question-text ";
    span.style.fontWeight = 'bold';

    let textNode = document.createTextNode(trivia.question);

    span.appendChild(textNode);
    liElement.appendChild(span)

    let answersList = createAnswersList(trivia.getAllAnswers())

    liElement.appendChild(answersList);

    return liElement;
}

function createAnswersList(answers){
    let answerList = document.createElement('ul');

    for (const answ of answers) {
        let liElement = createAnswerListElement(answ)
        answerList.appendChild(liElement);
    }

    return answerList;
}

function createAnswerListElement(answ){
    let liElement = document.createElement('li');
    let span = document.createElement('span');
    let textNode = document.createTextNode(answ);

    span.appendChild(textNode);
    liElement.appendChild(span)

    return liElement;
}

function displayTrivia2(triviaArray){
    
    const li0 = document.getElementById('li-0')
    let textNode0 = document.createTextNode(triviaArray[0].question);
    li0.appendChild(textNode0);
    
    const li1 = document.getElementById('li-1')
    let textNode1 = document.createTextNode(triviaArray[1].question);
    li1.appendChild(textNode1);

    const li2 = document.getElementById('li-2')
    let textNode2 = document.createTextNode(triviaArray[2].question);
    li2.appendChild(textNode2);

    const li3 = document.getElementById('li-3')
    let textNode3 = document.createTextNode(triviaArray[3].question);
    li3.appendChild(textNode3);

    const li4 = document.getElementById('li-4')
    let textNode4 = document.createTextNode(triviaArray[4].question);
    li4.appendChild(textNode4);

    
}


function displayTrivia3(triviaArray){
    
    const triviaListElementArray = document.getElementsByClassName('trivia-li');
    
    for (let i = 0; i < triviaListElementArray.length; i++) {
        const liElement = triviaListElementArray[i];
        const trivia = triviaArray[i]
        let textNode = document.createTextNode(trivia.question);
        liElement.appendChild(textNode);
    }

    
}



