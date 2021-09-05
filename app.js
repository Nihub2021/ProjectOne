async function myFunction() {
  console.log("launched");

  document.getElementById("demo").innerHTML = "script running";

  const response = await fetch("http://localhost:5000/");
  const data = await response.json();
  console.log("bam", data.values);
}
