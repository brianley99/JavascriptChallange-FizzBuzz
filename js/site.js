
//input function
//get values from document

function getValues() {

    let fizz = document.getElementById('fizzNum').value;
    let buzz = document.getElementById('buzzNum').value;

    let fizzNum = parseInt(fizz);
    let buzzNum = parseInt(buzz);
    
    //authenticate input
    if (Number.isInteger(fizzNum) && Number.isInteger(buzzNum)) {
        
        //genrate list
        let fizzBuzzNums = generateNums(fizzNum, buzzNum);

        //display the numbers onto the document
        displayList(fizzBuzzNums);

    } else {
        //vertification fail
        alert("Must Input Integer")
    }
}


//logic function
//generate data for table
function generateNums(fizzNum, buzzNum) {
    
    const fizzBuzzArray = []

    //genertate num 1-100 and change to fizzbuzz/fizz/buzz if nedded
    //add to fizzBuzzArray
    for (let index = 1; index <= 100; index++) {
        
        if ((index % fizzNum === 0) && (index % buzzNum === 0)) {
            //number is fizzbuzz
            fizzBuzzArray.push('FizzBuzz')  

        } else if (index % fizzNum === 0) {
            //number is fizz 
            fizzBuzzArray.push('Fizz')

        } else if (index % buzzNum === 0) {
            //number is buzz 
            fizzBuzzArray.push('Buzz')

        } else {
            //number is just added to array 
            fizzBuzzArray.push(index)

        }
    }

    return fizzBuzzArray;
}

//output function
//display numbers
function displayList (fizzBuzzNums) {

    //turn table invisible
    document.getElementById('result-div').classList.add('invisible');

    //genarate html
    let templateRows = "";

    for (let index = 0; index < 100; index++) {
        
        //generates a row with 5 td 
        if (index % 5 === 0) {
            templateRows += `
        <tr>
            <td class="ps-3">${fizzBuzzNums[index]}</td>
            <td class="ps-3">${fizzBuzzNums[index + 1]}</td>
            <td class="ps-3">${fizzBuzzNums[index + 2]}</td>
            <td class="ps-3">${fizzBuzzNums[index + 3]}</td>
            <td class="ps-3">${fizzBuzzNums[index + 4]}</td>
        </tr>
        `;
        }
        
    }

    //insert html
    document.getElementById('results').innerHTML = templateRows;

    //turn table visible
    document.getElementById('result-div').classList.remove('invisible');
}
