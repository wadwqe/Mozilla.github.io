let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/7c07bec06d13264403d04f73112e92df.jpeg') {
      myImage.setAttribute('src', 'images/2e956d48b94918092ba5fe1c8492c2be.jpeg');
    } else {
      myImage.setAttribute('src', 'images/7c07bec06d13264403d04f73112e92df.jpeg');
    }
}
myButton.onclick = function() {
    setUserName();
 }
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }
  function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
  }