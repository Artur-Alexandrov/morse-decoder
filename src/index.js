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
    // write your solution here
    MORSE_TABLE["**********"] = " ";
    let arr = expr.match(/.{1,10}/g);
    
    for(let i = 0; i<arr.length; i++) {
      arr[i] = arr[i].replace(/11/g, "-");
      arr[i] = arr[i].replace(/10/g, ".");
      arr[i] = arr[i].replace(/00/g, " ");
      arr[i] = arr[i].trimLeft();
    }  
    
    let resArr = arr.map(word => MORSE_TABLE[word])
    return resArr.join("");
}

module.exports = {
    decode
}