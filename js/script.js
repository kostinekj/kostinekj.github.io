// function openPopup(){
   // var popup = document.getElementById("popup");
   // popup.classList.add("open-popup");
  //  console.log("hello")
//}

//function closePopup(){
  //  var popup = document.getElementById("popup");
 //   popup.classList.remove("open-popup");
//}

const showButton = document.getElementById('showDialog');
const favDialog = document.getElementById('favDialog');
const outputBox = document.querySelector('output');
const selectEl = favDialog.querySelector('select');
const confirmBtn = favDialog.querySelector('#confirmBtn');

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener('click', () => {
  favDialog.showModal();
});

selectEl.addEventListener('change', (e) => {
  confirmBtn.value = selectEl.value;
});


favDialog.addEventListener('close', (e) => {
  outputBox.value = favDialog.returnValue === 'default' ? "No return value." : `ReturnValue: ${favDialog.returnValue}.`;
});


confirmBtn.addEventListener('click', (event) => {
  event.preventDefault();
  favDialog.close(selectEl.value);
});