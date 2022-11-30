const btn = document.querySelector('.btn');
const resultBlock = document.querySelector('.result');
const testsArray = Array.from(document.querySelectorAll('.test-list__item'));
const questionsArray = Array.from(document.querySelectorAll('.level'));

btn.addEventListener('click', result);

function result(e) {
    e.preventDefault;
    let points = 0;

    const testSelected = document.querySelector('.test-list__item_selected');
    const testSelectedIndex = testsArray.indexOf(testSelected);
    const currentQuestions = questionsArray[testSelectedIndex];

    if (currentQuestions.querySelector('#answerOne').checked) {
        points++;
    }
    if (currentQuestions.querySelector('#answerTwo').checked) {
        points++;
    }
    if (currentQuestions.querySelector('#answerThree').checked) {
        points++;
    }
    if (currentQuestions.querySelector('#answerFour').checked) {
        points++;
    }

    resultBlock.style.display = 'block';
    resultBlock.textContent = "Your result is " + points + " points";
}

testsArray.forEach(item => {
    item.addEventListener('click', () => changeTest(item));
})


function changeTest(a) {
    clearSelectedItems();
    a.classList.add('test-list__item_selected');
    let index = testsArray.indexOf(a);

    questionsArray.forEach(test => {
        test.style.display = 'none';
    })

    questionsArray[index].style.display = 'block';
    resultBlock.style.display = 'none';
}

function clearSelectedItems() {
    testsArray.forEach(testItem => {
        testItem.classList.remove('test-list__item_selected');
    })

    questionsArray.forEach(questionsBlock => {
        questionsBlock.querySelector('input').checked = false;
    })
}