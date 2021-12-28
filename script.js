function openAnswer(number) {
  let x = document.getElementById(`myDiv${number}`);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
