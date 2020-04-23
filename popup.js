let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.addEventListener("click", btnClicked);

function btnClicked(){
  console.log("clicked");
  alert("asdad clicked!");
};