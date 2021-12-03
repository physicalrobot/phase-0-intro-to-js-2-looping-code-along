// Code your solutions in this file

const p = ['Guadalupe', 'Ollie', 'Aki'];


function writeCards(names, event) {
    let newname = [];
    for (let i = 0; i < names.length; i++) {



        newname[i] = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)

    }
    return newname;
}

function countDown(n) {

    while (n >= 0) {
        console.log(n--);

    }
}



