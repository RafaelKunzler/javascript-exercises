const repeatString = function(string, num) {
    let text = ''
    let i = 0;
    if (num < 0) {
        text = 'ERROR';
    } else {
        while (i < num){
            text += string;
            i++;
        }
    } 
    return text;
}

// Do not edit below this line
module.exports = repeatString;
