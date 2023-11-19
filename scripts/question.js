function createQuestion(DayObject, background) {
    let question = document.createElement('div');

    let gift = createSimpleDay(DayObject);
    gift.style.display = 'none';

    let badAnswerMessage;

    question.className = 'day-gift-content';

    question.innerHTML = `${DayObject.questionContent}`
        + '<input type="text" id="answerInput">'
        + '<button id="validationButton">Valider</button>';
    
    let questionInput = question.querySelector('#answerInput');
    let validationButton = question.querySelector('#validationButton');

    validationButton.addEventListener('click', function() {
        let answer = questionInput.value.toLowerCase();
        
        if (testAnswer(DayObject, answer)) {
            question.style.opacity = 0;

            setTimeout(() => {
                gift.style.display = 'block';
                question.style.display = 'none';
            }, 200);
        } else {
            if (!(badAnswerMessage = question.querySelector('#badAnswerMessage'))) {
                badAnswerMessage = createBadAnswer();
                question.appendChild(badAnswerMessage);
                setTimeout(() => {
                    badAnswerMessage.style.opacity = 1;
                }, 50);
            } else {
                AddAnimation(badAnswerMessage, 'error-animation');
            }
            questionInput.value = '';
        }
    });

    background.appendChild(gift);
    background.appendChild(question);
}

function createBadAnswer() {
    let badAnswerMessage = document.createElement('p');

    badAnswerMessage.id = 'badAnswerMessage';
    badAnswerMessage.innerText = 'Mauvaise réponse, réessaie encore.';

    return badAnswerMessage;
}

function testAnswer(DayObject, Answer) {
    let choices = DayObject.choices;
    let AnswerArray = Answer.split(' ');

    for (let i = 0; i < choices.length; i ++)
        if (AnswerArray.includes(choices[i]))
            return true;

    return false;
}