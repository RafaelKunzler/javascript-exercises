const sumAll = function(min, max) {
    let sum = 0;
    if (min > max){
        let temp = max;
        max = min;
        min = temp;
    }
    if(min >= 0 && max >= 0 && typeof min == 'number' && typeof max == 'number'){
        for (let i = min; i <= max; i++){
            sum += i;
        }
        return sum;
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
