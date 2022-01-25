const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const regexp = /(?:0|1|\*){10}/gm;
    const spaceChar = '**********';
    
    const arrayMatches = [...expr.matchAll(regexp)];
    const arrChar = arrayMatches.map(match => {
        if(match[0] === spaceChar) return ' ';
        let morseCode = match[0].replaceAll('00', '').replaceAll('11', '-').replaceAll('10', '.');
        return MORSE_TABLE[morseCode];
    });

    return arrChar.join('');
}

module.exports = {
    decode
}