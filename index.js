// Code your solutions in this file

const p = ['Guadalupe', 'Ollie', 'Aki'];
function writeCards(name, event) {



    for (let i = 0; i < name.length; i++) {
        let namelist = [];


        namelist[i] = console.log(`Thank you, ${name[i]} for the wonderful surprise ${event} gift!`);
    }
    return namelist;

}

writeCards(p, 'birthday');
