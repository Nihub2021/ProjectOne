async function myFunction() {

  let url = "https://nihubrestapi.herokuapp.com/"

  console.log("launched");

  document.getElementById("demo").innerHTML = "script running";

  // const response = await fetch("http://localhost:5000/");
  const response = await fetch(url);
  const data = await response.json();
  console.log("bam", data.values);
}
