// Das Array mit den fünf auswählbaren Tierbildern
const ANIMAL_IMG = ['<img src="assets/lion.jpg" alt="animal1">', '<img src="assets/elephant.jpg" alt="animal2">', '<img src="assets/ape.jpg" alt="animal3">',
                    '<img src="assets/oryx.jpg" alt="animal4">', '<img src="assets/giraffe.jpg" alt="animal5">']

// Die Funktion, die eines der Bilder zufällig heraussucht
// Inputs:  Die ID des Elements, in das das Bild eingefügt werden soll
//          Das Array mit den möglichen Bildern
function InsertRandomAnimalIMG(element, images) {
    // RAND_INDEX ist eine zufällige Zahl zwischen 0 und der Länge des Arrays
    const RAND_INDEX = Math.floor(Math.random() * images.length)
    // RAND_IMG ist der String mit dem Bild an der Stelle des zufälligen Index
    const RAND_IMG = images[RAND_INDEX]
    // ELEMENT ist das div Element auf der Website
    const ELEMENT = document.getElementById(element)

    // Über "innerHTML" wird dann das Bild in das angegebene div eingefügt
    ELEMENT.innerHTML = RAND_IMG
}

// Diese Funktion wird dann für jedes der drei Elemente einmal ausgeführt
InsertRandomAnimalIMG('image1', ANIMAL_IMG)
InsertRandomAnimalIMG('image2', ANIMAL_IMG)
InsertRandomAnimalIMG('image3', ANIMAL_IMG)

// ! Auf diese Weise erhält man drei VÖLLIG zufällige Bilder aus dem Array, kann also auch dreimal das selbe Bild bekommen !




//--------------------------------------------------------------------------------------------------------------------------------------

// Ein zusätzliches Array mit den IDs der Elemente
const IMG_ELEMENTS = ['image1', 'image2', 'image3']

// Eine ALTERNATIVE Funktion um immer drei unterschiedliche Bilder zu erhalten
// Inputs:  Die IDs der Elemente als Array
//          Das Array mit den möglichen Bildern
function InsertRandAnimIMGs(elements, images) {
    // Die Länge des Arrays mit den IDs
    const ELEM_LENGTH = elements.length
    // Die Länge des Arrays mit den Bildern
    const IMG_LENGTH = images.length
    // Der Index eines zufälligen Bildes als Startpunkt
    const START_INDEX = RandIndex(IMG_LENGTH)

    // Eine For-Schleife, die einmal alle IDs in unserem zusätzlichen Array durchläuft
    for ( i = 0; i < ELEM_LENGTH; i++ ) {
        // Das aktuelle Element
        let element = document.getElementById(elements[i])
        // Der Startindex + die Anzahl der Durchläufe
        //  So wird bei jedem Durchlauf das jeweils nächste Bild ausgewählt
        //  Über "% IMG_LENGTH" wird dafür gesorgt, dass nach dem letzten Bild wieder mit dem ersten angefangen wird
        let current_index = ( START_INDEX + i ) % IMG_LENGTH

        // Das aktuelle Bild wird in das aktuelle Element eingefügt
        element.innerHTML = images[ current_index ]
    }
}

// Das Generieren einer zufälligen Zahl aus der Länge eines Arrays als Funktion
function RandIndex(array_length) {
    return Math.floor(Math.random() * array_length)
}

// Die Funktion wird dann einmal ausgeführt
InsertRandAnimIMGs(IMG_ELEMENTS, ANIMAL_IMG)