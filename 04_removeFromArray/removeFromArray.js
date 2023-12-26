const removeFromArray = function(...args) {
    
    let arrayToRemoveFrom = args[0];

    let numbersToRemove = [];
    
    for (let i = 1 ; i < args.length ; i++) {
        numbersToRemove.push(args[i]);
    };
    
    let a = arrayToRemoveFrom;
    let n = numbersToRemove;
    
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < n.length; j++) {
            if (a[i] == n[j]) {
                a.splice(i, 1);
                i--; //repeat at same index with new value after splice
            };
        };
    };

    return arrayToRemoveFrom;
};

// Do not edit below this line
module.exports = removeFromArray;
