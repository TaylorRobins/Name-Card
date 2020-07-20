const inputField = document.getElementById("inputField");
const submitButton = document.getElementById("submitButton");
const updatedNames = document.getElementById("updatedName");

submitButton.addEventListener("click", function () {
  updatedNam();
});

inputField.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    updatedNam();
  }
});

function updatedNam() {
  const newName = inputField.value;
  updatedNames.innerText = newName;
  return newName;
}
