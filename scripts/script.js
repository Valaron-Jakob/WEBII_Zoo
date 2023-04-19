// a. Log current time and date to the console
console.log(new Date())

// b. Message popup on load
alert('Willkommen im Zoo von Fröhlichsheim!')

// c. A text containing a different animal name every reload
randomAnimalName('animal-text')

function randomAnimalName(elementID) {
    const ANIMAL_NAMES = ['Lion', 'Tiger', 'Elephant']
    const RAND_ANIMAL = ANIMAL_NAMES[Math.floor(Math.random() * ANIMAL_NAMES.length)]
    const ANIMAL_TEXT = 'The Fröhlichsheim zoo is home to a variety of different animals. ' +
            'Today we have a ' + RAND_ANIMAL + ' in our zoo, eating a squirrel.'
    
    document.getElementById(elementID).innerHTML = ANIMAL_TEXT
}

// d. A text used on different webpages
animalDesc('animal-desc')

function animalDesc(elementID) {
    const ANIMAL_DESC = '<p>Here in this zoo, we feed our animals with wild living squirrels most of the time. ' +
        'Mice and rats are also a good alternative.</p>'

    document.getElementById(elementID).innerHTML = ANIMAL_DESC
}



