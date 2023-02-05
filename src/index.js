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
    let toString = String(expr);
    let toStatment = '';
    let numberOfSymbols = toString.length;
    let numberOfLetters = numberOfSymbols/10;
    let i = 0;
    let s = 0;
        do {
            let symbol = toString.substr(s, 10);
            let letter;
            switch (symbol) {
                case '0000001011':
                    letter = 'a'; 
                    toStatment += letter;
                    break;
                case '0011101010':
                    letter = 'b'; 
                    toStatment += letter;
                    break;
                case '0011101110':
                    letter = 'c'; 
                    toStatment += letter;
                    break;
                case '0000111010':
                    letter = 'd'; 
                    toStatment += letter;
                    break;
                case '0000000010':
                    letter = 'e'; 
                    toStatment += letter;
                    break;
                case '0010101110':
                    letter = 'f'; 
                    toStatment += letter;
                    break;
                case '0000111110':
                    letter = 'g'; 
                    toStatment += letter;
                    break;
                case '0010101010':
                    letter = 'h'; 
                    toStatment += letter;
                    break;
                case '0000001010':
                    letter = 'i'; 
                    toStatment += letter;
                    break;
                case '0010111111':
                    letter = 'j'; 
                    toStatment += letter;
                    break;
                case '0000111011':
                    letter = 'k'; 
                    toStatment += letter;
                    break;
                case '0010111010':
                    letter = 'l'; 
                    toStatment += letter;
                    break;
                case '0000001111':
                    letter = 'm'; 
                    toStatment += letter;
                    break;
                case '0000001110':
                    letter = 'n'; 
                    toStatment += letter;
                    break;
                case '0000111111':
                    letter = 'o'; 
                    toStatment += letter;
                    break;
                case '0010111110':
                    letter = 'p'; 
                    toStatment += letter;
                    break;
                case '0011111011':
                    letter = 'q'; 
                    toStatment += letter;
                    break;
                case '0000101110':
                    letter = 'r'; 
                    toStatment += letter;
                    break;
                case '0000101010':
                    letter = 's'; 
                    toStatment += letter;
                    break;
                case '0000000011':
                    letter = 't'; 
                    toStatment += letter;
                    break;
                case '0000101011':
                    letter = 'u'; 
                    toStatment += letter;
                    break;
                case '0010101011':
                    letter = 'v'; 
                    toStatment += letter;
                    break;
                case '0000101111':
                    letter = 'w'; 
                    toStatment += letter;
                    break;
                case '0011101011':
                    letter = 'x'; 
                    toStatment += letter;
                    break;
                case '0011101111':
                    letter = 'y'; 
                    toStatment += letter;
                    break;
                case '0011111010':
                    letter = 'z'; 
                    toStatment += letter;
                    break;
                case '1011111111':
                    letter = '1'; 
                    toStatment += letter;
                    break;
                case '1010111111':
                    letter = '2'; 
                    toStatment += letter;
                    break;
                case '1010101111':
                    letter = '3'; 
                    toStatment += letter;
                    break;
                case '1010101011':
                    letter = '4'; 
                    toStatment += letter;
                    break;
                case '1010101010':
                    letter = '5'; 
                    toStatment += letter;
                    break;
                case '1110101010':
                    letter = '6'; 
                    toStatment += letter;
                    break;
                case '1111101010':
                    letter = '7'; 
                    toStatment += letter;
                    break;
                case '1111111010':
                    letter = '8'; 
                    toStatment += letter;
                    break;
                case '1111111110':
                    letter = '9'; 
                    toStatment += letter;
                    break;
                case '1111111111':
                    letter = '0'; 
                    toStatment += letter;
                    break;
                case '**********':
                    letter = ' '; 
                    toStatment += letter;
                    break;
            }
            s = s+10;
            i++;
        } while (i < numberOfSymbols);
    return toStatment;
}

module.exports = {
    decode
}