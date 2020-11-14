//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
const getRandomColor = function () {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



let buttonOne = document.getElementById('button1');
let buttonTwo = document.getElementById('button2');


buttonOne.onclick = () => {
 let colorIndex = Math.floor(Math.random() * colors.length);
 document.body.style.backgroundColor = colors[colorIndex];  
 buttonOne.innerHTML = colors[colorIndex]
 buttonTwo.innerHTML = 'Click Me!'
}

buttonTwo.onclick = () => {
  randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  buttonTwo.innerHTML = randomColor;
  buttonOne.innerHTML = 'Click Me!'
};


