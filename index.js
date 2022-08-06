//declarations
var higherNumber, lowerNumber;
var numArray;
var newNumber = "";
let i = 0;
let solutionDiv = document.getElementById("solution");
/* //Function toAscending to arrange array into ascending order, convert it into string and then to number to get lowest value
function toAscending() {
  numArray.sort(function (a, b) {
    return a - b;
   });
  let lowerString = numArray.toString();
   lowerNumber = parseInt(lowerString);
 }

  //Function toDescending to arrange array into ascending order and get the highest number
  function toDescending() {
    numArray.sort(function (a, b) {
        return b - a;
     });
     let higherString = numArray.toString();
     higherNumber = parseInt(higherString);
   }

//function to get the new number and print it


 //Generate Series the main function
 


//  generateSeries(document.getElementById("number").value);

*/
function generateSeries(numberForKaprekar) {
	console.log(newNumber);
	solutionDiv.innerHTML += `<br><br> Step No  : ${+i} The number is : ${newNumber}`;
	arr = Array.from(numberForKaprekar);

	let ascArr = Array.from(numberForKaprekar).sort((a, b) => {
		return a - b;
	});
	let descArr = Array.from(numberForKaprekar).sort((a, b) => {
		return b - a;
	});

	// console.log("asc arry="+ascArr);
	// console.log("desc arry="+descArr);
	higherNumber = descArr.join("");

	lowerNumber = ascArr.join("");
	getNewNumber();

	/* toDescending();
   toAscending();
   getNewNumber();
*/
}
//get new number by diff of hoigher and lower number
function getNewNumber() {
	newNumber = higherNumber - lowerNumber;
	// document.getElementById("display2").value=newNumber;
	console.log(newNumber);
	newNumber += "";
}
//function to determine validity of input

function isValidNumber(newNumber) {
	let i = 0;
	let arrayNewNumber = Array.from(newNumber);
	arrayNewNumber.forEach((element) => {
		arrayNewNumber.forEach((item) => {
			if (element == item) {
				i++;
			}
		});
	});
	if (i > 13) {
		return false;
	} else {
		return true;
	}
}

//make valid for converting a non four digit number into it by adding "0"
function makeValid(newNumber) {
	if (newNumber.length == 3) {
		let temp = newNumber;
		newNumber = "0" + temp;
	} else if (newNumber.length == 2) {
		let temp = newNumber;
		newNumber = "00" + temp;
	} else if (newNumber.length == 1) {
		let temp = newNumber;
		newNumber = "000" + temp;
	}
}

//call functions here with condition of stopping at 6147 value of newNumber

function displayOutput() {
	newNumber = document.getElementById("number").value;
	if (isValidNumber(newNumber) == true && newNumber < 9999) {
		while (newNumber != "6174") {
			makeValid(newNumber);

			generateSeries(newNumber);
			i++;
		}
		solutionDiv.innerHTML += `<br><br> Step No. ${+i} and you reach the Kaprekar's constant : 6174`;
		solutionDiv.innerHTML +="<br>No of iterations : " + i+"<br>";
	} else if (newNumber == 0) {
		alert("Don't leave blanks , just enter a four digitnumber");
	} else {
		console.log("Number is not valid");
		document.getElementById("display1").innerHTML =
			"<br> Number is not valid, It should be 4 digit and and at least 1 unequal number<br><br>";
		solutionDiv.innerHTML = "";
	}
}

//function to clear the solution div on reset

function clearOnReset() {
	solutionDiv.innerHTML = "";
	document.getElementById("display1").innerHTML = "";
}
