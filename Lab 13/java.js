function start() {
  var button = document.getElementById('difText');
  button.onclick = change;
}

function change() {
  //changes the text to big and pink
  document.getElementById('altered').style.fontSize = '55px';
  document.getElementById('altered').style.fontFamily = 'times';
  document.getElementById('altered').style.color = 'pink';
  
  var diffElement = document.createElement('div'); 

  var imgElement = document.createElement('img'); 

  imgElement.src = 'images/kuromi.png'; 

  diffElement.appendChild(imgElement); //add the image to the new element

  diffElement.innerHTML += '<p>Collect as many Kuromi\'s as you want! Just click the button :) </p>'; // add text to new element

  document.getElementById('altered').innerHTML = 'Look!'; 

  var body = document.getElementsByTagName('body')[0];

  body.appendChild(diffElement);
}

window.onload = start;
