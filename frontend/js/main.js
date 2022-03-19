class HECMAthlon {

    getMaxValue = (input) => {

        return Array.from(input).reduce(function (initialNumber, currentNumber) {
            if (initialNumber > currentNumber) {
                return initialNumber
            } else {
                return currentNumber
            }
        })
    }

  /*   getMaxValue = (input) => {
        let maxValues = input.split(",");
        let maxValue = 0;
        for(let i = 0; i < maxValues.length; i++){
            let tempValue = parseInt(maxValues[i]);
            if (tempValue > maxValue) {
                maxValue = tempValue;
            }
        }
        return [maxValue];
    }; */

        getGreaterThan = (input) => {
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(currentValue => currentValue > input)
        }

    fizzBuzz = (input) => {
        let output = [];
        for (let k = 1; k <= parseInt(input); k++) {
            let value;
            if(k % 5 === 0 && k % 3 === 0) value = "FizzBuzz";
            else if(k % 3 === 0) value = "Fizz";
            else if(k % 5 === 0) value = "Buzz";
            else value = k;
            output.push(value);
        }
        return output;
    }
}

export default HECMAthlon;