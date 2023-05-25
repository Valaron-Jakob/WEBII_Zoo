let curr_bunnies = 1
let last_bunnies = 0

let curr_month_index = 0

function NextMonth() {
    const ELEM_MONTH = document.getElementById('month')
    const ELEM_BUNNIES = document.getElementById('bunnies')

    curr_month_index += 1
    ELEM_MONTH.innerHTML = getMonthName(curr_month_index)

    bunnies = ''

    next_bunnies = curr_bunnies + last_bunnies

    for ( i = 0; i < next_bunnies; i++ ) {
        bunnies += '<img src="./assets/bunny.jpg" width=40px height=30px>'
    }

    ELEM_BUNNIES.innerHTML = bunnies

    last_bunnies = curr_bunnies
    curr_bunnies = next_bunnies
}

function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber);
  
    return date.toLocaleString('en-US', { month: 'long' });
  }