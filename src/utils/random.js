/**
 * 
 * @param {*} min número minimo dentro del random
 * @param {*} max número maximo a tomar dentro del random
 * @param {*} length dimensión del array de numeros generados 
 * @returns 
 */

function calculateRandomNumber(max, min) {
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

export function randonNumber(max, min) {
    return calculateRandomNumber(max,min)
}

export function getRandomNumbers(min,max,length) {

    var randomNumbers=[];

    for(let i=0; i < length; i++ ) {
        var random = calculateRandomNumber(max, min)
        var isInArray = randomNumbers.includes(random);

        if( !isInArray ) {
            randomNumbers.push(random);
        } else {
            while ( isInArray ) {
                random = calculateRandomNumber(max, min)
                isInArray = randomNumbers.includes(random);
                  if( !isInArray ){
                    randomNumbers.push(random);
                  }
            }
        }

    }

    return randomNumbers;

}