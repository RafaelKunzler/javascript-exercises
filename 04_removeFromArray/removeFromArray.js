
const removeFromArray = function(array, ...args) {
    function isNot(num) {return (args.indexOf(num) == -1);}
    array = array.filter(isNot);
    return(array); 
};


// Do not edit below this line
module.exports = removeFromArray;
