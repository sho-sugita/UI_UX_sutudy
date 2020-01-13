var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('h1').onclick = function() {
    alert('痛っ! つつくのはやめて!');
}
// 上記は、これを短くしたもの
// var myHTML = document.querySelector('html');
// myHTML.onclick = function() {};

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    // getAttribute　属性を返す
    if(mySrc === 'images/firefox.jpeg') {
        myImage.setAttribute ('src','images/firefox2.png');
    } else {
        myImage.setAttribute ('src','images/firefox.jpeg');
    }
}