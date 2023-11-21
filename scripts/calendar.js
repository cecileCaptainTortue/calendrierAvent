function updateDays(cases) {
    let today = new Date(Date.now());
    let day = today.getDate();

    if (today.getMonth() != 11) {
        day = 0;
    }

    for (let i = 0; i < cases.length; i ++) {
        let box = cases.item(i);

        if (box.id.substring(4) <= day) {
            box.classList.add('unlocked');
        } else {
            box.classList.add('locked');
        }

        box.addEventListener('click', function() {
            if (box.classList.contains('unlocked'))
                displayDay(box.id.substring(4));
            else
                AddAnimation(box, 'shake-animation');
        })
    }
}

function displayDay(DayNo) {
    let DayObject = DaysGifts[DayNo - 1];
    
    if (DayObject == undefined) {
        alert('jour pas encore créé');
        return;
    }

    let background = createBackground();

    if (DayObject.type == 'text') {
        background.appendChild(createSimpleDay(DayObject));
    } else if (DayObject.type == 'question') {
        createQuestion(DayObject, background);
    }

    document.body.appendChild(background);

    setTimeout(() => {
        background.style.opacity = 1;
    }, 100);
}

function createBackground() {
    let dayGift = document.createElement('div');

    dayGift.className = 'day-gift';

    dayGift.addEventListener('click', closeDayWhenClickOutside);
    return dayGift;
}

function closeDayWhenClickOutside(event) {
    let dayGift = document.querySelector('.day-gift');

    if (event.target == dayGift) {
        dayGift.style.opacity = 0;

        setTimeout(() => {
            dayGift.remove();
        }, 200);

        document.body.removeEventListener('click', closeDayWhenClickOutside);
    }
}

function createSimpleDay(DayObject) {
    let content = document.createElement('div');

    content.className = 'day-gift-content';
    content.innerHTML = DayObject.content;

    return content;
}

document.addEventListener('DOMContentLoaded', function() {
    let containerCases = document.getElementById('container-case');
    let cases = containerCases.children;

    updateDays(cases);
});