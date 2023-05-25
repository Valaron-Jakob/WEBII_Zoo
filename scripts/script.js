const ANIMAL_DATA = {
    'lion': {
        'name': '<h3>Lion</h3>',
        'image': '<img src="assets/lion.jpg" alt="animal1">',
        'info': [
            '<p>Erster Text: Lorem Ipsum dolor sit amet, consecutor 1</p>',
            '<p>Zweiter Text: Lorem Ipsum dolor sit amet, consecutor 2</p>',
            '<p>Dritter Text: Lorem Ipsum dolor sit amet, consecutor 3</p>',
            '<p>Vierter Text: Lorem Ipsum dolor sit amet, consecutor 4</p>'
        ]
    },
    'elephant': {
        'name': '<h3>Elefant</h3>',
        'image': '<img src="assets/elephant.jpg" alt="animal2">',
        'info': [
            '<p>Erster Text: Lorem Ipsum dolor sit amet, consecutor 1</p>',
            '<p>Zweiter Text: Lorem Ipsum dolor sit amet, consecutor 2</p>',
            '<p>Dritter Text: Lorem Ipsum dolor sit amet, consecutor 3</p>',
            '<p>Vierter Text: Lorem Ipsum dolor sit amet, consecutor 4</p>'
        ]
    },
    'ape': {
        'name': '<h3>Monkey</h3>',
        'image': '<img src="assets/ape.jpg" alt="animal3">',
        'info': [
            '<p>Erster Text: Lorem Ipsum dolor sit amet, consecutor 1</p>',
            '<p>Zweiter Text: Lorem Ipsum dolor sit amet, consecutor 2</p>',
            '<p>Dritter Text: Lorem Ipsum dolor sit amet, consecutor 3</p>',
            '<p>Vierter Text: Lorem Ipsum dolor sit amet, consecutor 4</p>'
        ]
    },
    'oryx': {
        'name': '<h3>Oryx</h3>',
        'image': '<img src="assets/oryx.jpg" alt="animal4">',
        'info': [
            '<p>Erster Text: Lorem Ipsum dolor sit amet, consecutor 1</p>',
            '<p>Zweiter Text: Lorem Ipsum dolor sit amet, consecutor 2</p>',
            '<p>Dritter Text: Lorem Ipsum dolor sit amet, consecutor 3</p>',
            '<p>Vierter Text: Lorem Ipsum dolor sit amet, consecutor 4</p>'
        ]
    },
    'giraffe': {
        'name': '<h3>Giraffe</h3>',
        'image': '<img src="assets/giraffe.jpg" alt="animal5">',
        'info': [
            '<p>Erster Text: Lorem Ipsum dolor sit amet, consecutor 1</p>',
            '<p>Zweiter Text: Lorem Ipsum dolor sit amet, consecutor 2</p>',
            '<p>Dritter Text: Lorem Ipsum dolor sit amet, consecutor 3</p>',
            '<p>Vierter Text: Lorem Ipsum dolor sit amet, consecutor 4</p>'
        ]
    }
}

const TABLE_ELEMENTS = ['animal-1', 'animal-2', 'animal-3']

let infos = {
    'info-1': {
        'infos': [],
        'index': 0
    },
    'info-2': {
        'infos': [],
        'index': 0
    },
    'info-3': {
        'infos': [],
        'index': 0
    }
}

function GetRandAnimals(elements, animals) {
    const ELEM_LENGTH = elements.length
    const KEYS_LENGTH = Object.keys(animals).length
    const START_KEY = RandIndex(KEYS_LENGTH)

    let animal_ids = []

    for ( i = 0; i < ELEM_LENGTH; i++ ) {
        animal_key = ( START_KEY + i ) % KEYS_LENGTH
        animal_ids[i] = Object.keys(animals)[ animal_key ]
    }
    
    return animal_ids
}

function SetAnimalData(animal_ids, animals) {
    for ( i = 0; i < animal_ids.length; i++ ) {
        let element_name = document.getElementById('animal-' + (i + 1) + '-name')
        let element_image = document.getElementById('animal-' + (i + 1) + '-image')
        let element_info = document.getElementById('animal-' + (i + 1) + '-info')

        element_name.innerHTML = animals[ animal_ids[i] ]['name']
        element_image.innerHTML += animals[ animal_ids[i] ]['image']
        element_info.innerHTML += animals[ animal_ids[i] ]['info'][0]

        infos['info-' + (i + 1)]['infos'] = animals[ animal_ids[i] ]['info']
    }
}

function RandIndex(array_length) {
    return Math.floor(Math.random() * array_length)
}

function ScrollInfo(i) {
    let element = document.getElementById('animal-' + i + '-info')
    let curr_index = infos['info-' + i]['index']
    let infos_length = infos['info-' + i]['infos'].length

    element.innerHTML = infos['info-' + i]['infos'][ (curr_index + 1) % infos_length ]
    infos['info-' + i]['index'] = (curr_index + 1) % infos_length
}

SetAnimalData(GetRandAnimals(TABLE_ELEMENTS, ANIMAL_DATA), ANIMAL_DATA)