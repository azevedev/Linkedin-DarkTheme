
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
  var colorProperties = ['color', 'background-color'];

  //iterate through every element in reverse order...
  els = document.querySelectorAll('*');
  console.log(els);
  els.forEach(element => {
    var style = window.getComputedStyle(element).color;
    var color = null;

    //create RGBColor object
    color = new RGBColor(style);

    if (color.ok) { 
        //good to go, let's build up this RGB baby!
        //subtract each color component from 255
        element.style.color = 'rgb(' + (color.r) + ', ' + (0) + ', ' + (color.b) + ')';
    }
    color = null; //some cleanup

    var style = window.getComputedStyle(element).backgroundColor;
    color = new RGBColor(style);
    if (color.ok) { 
      //good to go, let's build up this RGB baby!
      //subtract each color component from 255
      element.style.backgroundColor = 'rgb(' + (color.r) + ', ' + (0) + ', ' + (color.b) + ')';
  }
  color = null; //some cleanup

  });
})