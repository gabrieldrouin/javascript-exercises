const repeatString = function(word, times) {

    let phrase = '';

    for (let i = 0 ; i < times ; ++i) {
        phrase += word;
    };

    if (times < 0) {
        phrase = 'ERROR';
    };

    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
