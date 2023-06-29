// 1- Write a program that allow user to enter number then print it

function myFunction1() {
  debugger;
  var x = +document.getElementById("number1").value;
  console.log(x);
  if (x) {
    document.getElementById("result1").innerHTML = "Your Result is :" + x;
    document
      .getElementById("result1")
      .setAttribute("class", "card-footer text-body-secondary bg-success");
  } else {
    document.getElementById("result1").innerHTML =
      "please enter a valid number";
    document
      .getElementById("result1")
      .setAttribute("class", "card-footer text-body-secondary bg-danger");
  }
}

// 2- Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no

function myFunction2() {
  debugger;
  var x = +document.getElementById("number2").value;
  if (x % 3 === 0 && x % 4 === 0) {
    document.getElementById("result2").innerHTML = "Your Result is : Yes";
    document
      .getElementById("result2")
      .setAttribute("class", "card-footer text-body-secondary bg-success");
  } else {
    document.getElementById("result2").innerHTML = "Your Result is : No";
    document
      .getElementById("result2")
      .setAttribute("class", "card-footer text-body-secondary bg-warning");
  }
}

//3- Write a program that allows the user to insert 2 integers then print the max

function myFunction3() {
  debugger;
  var x = +document.getElementById("number3inp1").value;
  var y = +document.getElementById("number3inp2").value;
  if (x > y) {
    document.getElementById("result3").innerHTML = " The Max is : " + x;
    document
      .getElementById("result3")
      .setAttribute("class", "card-footer text-body-secondary bg-success");
  } else {
    document.getElementById("result3").innerHTML = "The Max is : " + y;
    document
      .getElementById("result3")
      .setAttribute("class", "card-footer text-body-secondary bg-success");
  }
}

// 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

function myFunction4() {
  debugger;
  var x = document.getElementById("number4").value;
  if (x === "") {
    document.getElementById("result4").innerHTML =
      "Please Enter A Valid Number";
  } else {
    var number = +x;
    if (number > 0) {
      document.getElementById("result4").innerHTML =
        "Your Result is : Output Positive";
      document
        .getElementById("result4")
        .setAttribute("class", "card-footer text-body-secondary bg-success");
    } else if (number < 0) {
      document.getElementById("result4").innerHTML =
        "Your Result is : Output Negative";
      document
        .getElementById("result4")
        .setAttribute("class", "card-footer text-body-secondary bg-warning");
    } else {
      document.getElementById("result4").innerHTML =
        "Your Result is : Zero is neither positive nor negative";
    }
  }
}

// 5- Write a program that take 3 integers from user then print the max element
// and the min element.

function myFunction5() {
  debugger;
  var x = +document.getElementById("number5inp1").value;
  var y = +document.getElementById("number5inp2").value;
  var z = +document.getElementById("number5inp3").value;
  var numbers = [x, y, z];
  var { max, min } = findMinMax(numbers);
  document.getElementById("result5").innerHTML =
    " Max Number is : " + max + "<br>" + "Min Number is : " + min;

  document
    .getElementById("result5")
    .setAttribute("class", "card-footer text-body-secondary bg-success");
}

function findMinMax(numbers) {
  let max = numbers[0];
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return { max, min };
}

// 6- Write a program that allows the user to insert integer number then check If a number is oven or odd

function myFunction6() {
  debugger;
  var x = +document.getElementById("number6").value;
  if (x % 2 === 0) {
    document.getElementById("result6").innerHTML = "Your Number is : Even";
    document
      .getElementById("result6")
      .setAttribute("class", "card-footer text-body-secondary bg-success");
  } else {
    document.getElementById("result6").innerHTML = "Your Number is : Odd";
    document
      .getElementById("result6")
      .setAttribute("class", "card-footer text-body-secondary bg-warning");
  }
}

// 7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
function myFunction7() {
  debugger;
  var x = document.getElementById("number7").value;
  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(x.toLowerCase())) {
    document.getElementById("result7").innerHTML = "Your Character is : Vowel";
    document
      .getElementById("result7")
      .setAttribute("class", "card-footer text-body-secondary bg-success");
  } else {
    document.getElementById("result7").innerHTML = "Your Number is : Consonant";
    document
      .getElementById("result7")
      .setAttribute("class", "card-footer text-body-secondary bg-warning");
  }
}

// 8- Write a program that allows user to insert integer then print all numbers between 1 to that number
function myFunction8() {
  debugger;
  var x = +document.getElementById("number8").value;
  var numbers = [];
  if (isNaN(x)) {
    document.getElementById("result8").innerHTML =
      "Please Enter A Valid Number";
    document
      .getElementById("result8")
      .setAttribute("class", "card-footer text-body-secondary bg-warning");
  } else {
    for (let i = 0; i <= x - 1; i++) {
      numbers[i] = i + 1;
    }

    document.getElementById("result8").innerHTML =
      "Your Numbers Are : " + numbers;
    document
      .getElementById("result8")
      .setAttribute("class", "card-footer text-body-secondary bg-success");
  }
}

// 9- Write a program that allows user to insert integer then print a multiplication table up to 12.
function myFunction9() {
  debugger;
  var x = +document.getElementById("number9").value;
  var numbers = [];
  if (isNaN(x)) {
    document.getElementById("result9").innerHTML =
      "Please Enter A Valid Number";
    document
      .getElementById("result9")
      .setAttribute("class", "card-footer text-body-secondary bg-warning");
  } else {
    for (let i = 0; i < 12; i++) {
      numbers[i] = x * (i + 1);
    }

    document.getElementById("result9").innerHTML =
      "Your Numbers Are : " + numbers;
    document
      .getElementById("result9")
      .setAttribute("class", "card-footer text-body-secondary bg-success");
  }
}

// 10- Write a program that allows user to insert number then print all even numbers between 1 to this number
function myFunction10() {
  debugger;
  var x = +document.getElementById("number10").value;
  var numbers = [];
  var j = 0;
  if (isNaN(x)) {
    document.getElementById("result10").innerHTML =
      "Please Enter A Valid Number";
    document
      .getElementById("result10")
      .setAttribute("class", "card-footer text-body-secondary bg-warning");
  } else {
    for (let i = 1; i <= x; i++) {
      debugger;

      if (i % 2 === 0) {
        numbers[j] = i;
        j++;
      }
    }

    if (numbers.length > 0) {
      document.getElementById("result10").innerHTML =
        "Your Numbers Are : " + numbers;
      document
        .getElementById("result10")
        .setAttribute("class", "card-footer text-body-secondary bg-success");
    } else {
      numbers[0] = `there are no even numbers between 1 and your number : ${x}`;
      document.getElementById("result10").innerHTML = numbers;
      document
        .getElementById("result10")
        .setAttribute("class", "card-footer text-body-secondary bg-danger");
    }
  }
}

// 11- Write a program that take two integers then print the power
function myFunction11() {
  debugger;
  var base = +document.getElementById("number11inp1").value;
  var exponent = +document.getElementById("number11inp2").value;
  var power = calculatePower(base, exponent);

  document.getElementById("result11").innerHTML = " The Result is : " + power;
  document
    .getElementById("result11")
    .setAttribute("class", "card-footer text-body-secondary bg-success");
}

function calculatePower(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  let result = 1;
  const isNegativeBase = base < 0;
  const isNegativeExponent = exponent < 0;
  base = Math.abs(base);
  exponent = Math.abs(exponent);

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  if (isNegativeExponent) {
    if (isNegativeBase) {
      return -1 / result;
    } else {
      return 1 / result;
    }
  } else {
    return isNegativeBase ? -result : result;
  }
}

// 12- Write a program to enter marks of five subjects and calculate total, average and percentage.

function myFunction12() {
  debugger;

  var marksInput = document.getElementById("number12").value;

  var marksArray = marksInput.split(",");

  if (marksArray.length !== 5) {
    document.getElementById("result12").innerHTML =
      "Please enter marks for exactly five subjects.";
    document
      .getElementById("result12")
      .setAttribute("class", "card-footer text-body-secondary bg-danger");
  } else {
    var isValidInput = true;

    for (var i = 0; i < marksArray.length; i++) {
      if (isNaN(parseFloat(marksArray[i]))) {
        isValidInput = false;
        break;
      }
    }

    if (!isValidInput) {
      document.getElementById("result12").innerHTML =
        "Invalid input. Please enter numeric values for marks.";
      document
        .getElementById("result12")
        .setAttribute("class", "card-footer text-body-secondary bg-danger");
    } else {
      var totalMarks = 0;
      for (var i = 0; i < marksArray.length; i++) {
        totalMarks += parseFloat(marksArray[i]);
      }

      var averageMarks = totalMarks / marksArray.length;

      var percentage = (totalMarks / (marksArray.length * 100)) * 100;

      document.getElementById("result12").innerHTML =
        " Total Marks : " +
        totalMarks +
        "<br>" +
        "Average Marks: " +
        averageMarks +
        "<br>" +
        "Percentage: " +
        percentage +
        " %";
      document
        .getElementById("result12")
        .setAttribute("class", "card-footer text-body-secondary bg-success");
    }
  }
}

// 13- Write a program to input month number and print number of days in that month.
function myFunction13() {
  var monthNumber = document.getElementById("number13").value;
  if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
    document.getElementById("result13").innerHTML =
      " Please Enter Correct Month Number Between 1 And 12 ";
    document
      .getElementById("result13")
      .setAttribute("class", "card-footer text-body-secondary bg-danger");
  } else {
    const monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const daysInMonth = [
      31, // January
      28, // February
      31, // March
      30, // April
      31, // May
      30, // June
      31, // July
      31, // August
      30, // September
      31, // October
      30, // November
      31, // December
    ];

    monthIndex = monthNumber - 1;

    document.getElementById("result13").innerHTML =
      "Days in Month : " +
      "In The Month Of " +
      monthName[monthIndex] +
      " There Are " +
      daysInMonth[monthIndex] +
      " Days";
    document
      .getElementById("result13")
      .setAttribute("class", "card-footer text-body-secondary bg-success");
  }
}

// 14- Write a program to input marks of five subjects Physics,Chemistry, Biology, Mathematics and Computer, Find percentage and grade
function myFunction14() {
  const marks = [];

  const subjects = [
    "Physics",
    "Chemistry",
    "Biology",
    "Mathematics",
    "Computer",
  ];

  for (let i = 0; i < subjects.length; i++) {
    const subject = subjects[i];
    const marksInput = prompt(`Enter ${subject} marks:`);
    marks.push(parseFloat(marksInput));
  }

  const percentage = calculatePercentage(marks);
  const grade = assignGrade(percentage);
  document.getElementById("result14").innerHTML =
    " Percentage : " + percentage + " %" + "<br>" + "Grade : " + grade;
  document
    .getElementById("result14")
    .setAttribute("class", "card-footer text-body-secondary bg-success");
}

function calculatePercentage(marks) {
  const totalMarks = 500;
  const obtainedMarks = marks.reduce((sum, mark) => sum + mark, 0);

  return (obtainedMarks / totalMarks) * 100;
}

function assignGrade(percentage) {
  if (percentage >= 90) return "A";
  if (percentage >= 80) return "B";
  if (percentage >= 70) return "C";
  if (percentage >= 60) return "D";
  if (percentage >= 40) return "E";
  return "F";
}

//******************************** Using switch case*******************************

//15- Write a program to print total number of days in month
function myFunction15() {
  let month = document.getElementById("number15").value;
  let daysInMonth = getDaysInMonth(month.toLowerCase());

  if (daysInMonth === -1) {
    document.getElementById("result15").innerHTML =
      " The Result is : " + "Please Insert Correct Month Name";
    document
      .getElementById("result15")
      .setAttribute("class", "card-footer text-body-secondary bg-info");
  } else {
    document.getElementById("result15").innerHTML = `The month of ${
      month.charAt(0).toUpperCase() + month.slice(1)
    } has ${daysInMonth} days.`;
    document
      .getElementById("result15")
      .setAttribute("class", "card-footer text-body-secondary bg-success");
  }
}

function getDaysInMonth(month) {
  let days;

  switch (month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
      days = 31;
      break;

    case "april":
    case "june":
    case "september":
    case "november":
      days = 30;
      break;

    case "february":
      days = 28;
      break;

    default:
      days = -1;
      break;
  }

  return days;
}
