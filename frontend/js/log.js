class HECMAthlon {

    getMaxValue = (input) => {

        return input.reduce(function (initialValue, currentValue) {
            if (parseInt(currentValue) > initialValue) {
                initialValue = currentValue;
            }
                return initialValue
            
        })
    }

  /*  getMaxValue = (input) => {
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
            
            return Array.from({length: input}, (_, i) => i + 1).map(k => {
                return (k % 5 === 0 && k % 3 === 0) ? "FizzBuzz"
                : (k % 3 === 0) ? "Fizz"
                : (k % 5 === 0) ? "Buzz"
                : k
        })
    }

    /* fizzBuzz = (input) => {
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
    } */
}


const hecmathlon = new HECMAthlon();

const init = _ => {
    const maxValueBtn = document.querySelector(".maxValue__btn");
    const greaterThanBtn = document.querySelector(".greaterThan__btn");
    const fizzBuzzBtn = document.querySelector(".fizzBuzz__btn");

    const maxValueInput = document.querySelector(".maxValue__input");
    const greaterThanInput = document.querySelector(".greaterThan__input");
    const fizzBuzzInput = document.querySelector(".fizzBuzz__input");

    const maxValueRoot = document.querySelector(".maxValue__container");
    const greaterThanRoot = document.querySelector(".greaterThan__container");
    const fizzBuzzRoot = document.querySelector(".fizzBuzz__container");

    maxValueBtn.addEventListener('click', () => {
        const maxValue = getOutput(hecmathlon.getMaxValue(maxValueInput.value.split(',')));
        logResult(maxValueRoot, maxValue);
    });
    greaterThanBtn.addEventListener('click', () => {
        const greaterValues = getOutput(hecmathlon.getGreaterThan(greaterThanInput.value));
        logResult(greaterThanRoot, greaterValues);
    });
    fizzBuzzBtn.addEventListener('click', () => {
        const result = getOutput(hecmathlon.fizzBuzz(fizzBuzzInput.value));
        logResult(fizzBuzzRoot, result);
    });
}
/* 
getOutput = (output) =>
    return   */

  const getOutput = output => ["The function starts", ...output, "The function ends"]

/*  function getOutput(output) {
    let returnValue = ["The function starts"];
    for(var i = 0; i < output.length; i++){
        returnValue.push(output[i]);
    }
    returnValue.push("The function ends");
    return returnValue;
} 
 */
function logResult(place, values){
    while(place.firstChild) {
        place.firstChild.remove();
    }
    for (var j = 0; j < values.length; j++) {
        place.insertAdjacentHTML("beforeend", "<div>" + values[j] + "</div>");
    } 
} 

init();
