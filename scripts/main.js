var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('h1').onclick = function() {
    alert('痛っ! つつくのはやめて!');
}
// 上記は、これを短くしたもの
// var myHTML = document.querySelector('html');
// myHTML.onclick = function() {};

//画像クリック時の挙動
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

//ボタンクリック時の挙動
var myButton = document.querySelector('button');

myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    var myName = prompt('あなたの名前を入力してください。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'こんにちは、' + myName;
}
// prompt()関数を使用し、ダイアログボックスを表示。
// prompt()はユーザにデータを入力するよう求め、ユーザが OK を押した後に変数にそのデータを格納。
// この場合、ユーザに名前を入力。次にlocalStorageと呼ばれるAPIを呼び出すことで、ブラウザにデータを格納して後で受け取ることができる。
// localStorageのsetItem()関数を使って、'name' と呼ばれるデータを作成し、myName に入っているユーザから入力されたデータを格納。
// 最後に、見出しの textContent に文字列と新しく格納されたユーザの名前を設定

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = '設定前の名前は' + storedName;
  }