
// onclick Event function call to get all input value.
document.querySelector('#btn_sub').addEventListener('click', () => {
  // first input value get
  let first_gpa = document.querySelector('#first-spi').value;
  // two input value get
  let two_gpa = document.querySelector("#two-spi").value;
  // three input value get
  let three_gpa = document.querySelector("#three-spi").value;
  // four input value get
  let four_gpa = document.querySelector("#four-spi").value;
  // five input value get
  let five_gpa = document.querySelector("#five-spi").value;
  // six input value get
  let six_gpa = document.querySelector("#six-spi").value;
  // seven input value get
  let seven_gpa = document.querySelector("#seven-spi").value;
  // eight input value get
  let eight_gpa = document.querySelector("#eight-spi").value;

  // total final value sum 
  let x =
    parseFloat(first_gpa) +
    parseFloat(two_gpa) +
    parseFloat(three_gpa) +
    parseFloat(four_gpa) +
    parseFloat(five_gpa) +
    parseFloat(six_gpa) +
    parseFloat(seven_gpa) +
    parseFloat(eight_gpa);
  let total = (x / 8);
  let total_cgpa = total.toPrecision(3);
  // total value show output
  if(total_cgpa == "NaN"){
    document.querySelector('.cgpa_output h1').innerHTML = "CPI = Enter all value!";
  }else{
  document.querySelector('.cgpa_output h1').innerHTML = `CPI = ${total_cgpa}`
  }
})

document.querySelector('#btn_re').addEventListener('click', () => {
  document.querySelector('.cgpa_output h1').innerHTML = `CPI =`
  document.querySelector('#first-spi').value = '';
  document.querySelector('#two-spi').value = '';
  document.querySelector('#three-spi').value = '';
  document.querySelector('#four-spi').value = '';
  document.querySelector('#five-spi').value = '';
  document.querySelector('#six-spi').value = '';
  document.querySelector('#seven-spi').value = '';
  document.querySelector('#eight-spi').value = '';
})
