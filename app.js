async function myFunction() {
  let url = "https://nihubrestapi.herokuapp.com/one";

  console.log("incoming");

  const response = await fetch(url);
  const data = await response.json();
  console.log("first", data.values);

  let firstProperty = data.values[0][0];
  let firstValue = data.values[1][0];
  let secondProperty = data.values[0][1];
  let secondValue = data.values[1][1];
  let thirdProperty = data.values[2][1];
  let thirdValue = data.values[2][2];
  let fourthProperty = data.values[3][2];
  let fourthValue = data.values[3][3];

  document.getElementById("demo").innerHTML =
    "2018-Present" +
    firstProperty +
    " is " +
    firstValue +
    " and my name is " +
    secondValue +
    "<br>" +
    "I am from " +
    thirdValue +
    " and my age is " +
    fourthValue;
}
