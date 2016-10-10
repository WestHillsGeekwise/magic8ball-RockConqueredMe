// add all your js here
var askButton = document.getElementById("askButton");
var img1 = "url('http://planetoftheweb.com/i/8ball/1.png') #666";
var img2 = "url('http://planetoftheweb.com/i/8ball/2.png') #666";
var img3 = "url('http://planetoftheweb.com/i/8ball/3.png') #666";
var img4 = "url('http://planetoftheweb.com/i/8ball/4.png') #666";
var img5 = "url('http://planetoftheweb.com/i/8ball/5.png') #666";
var img6 = "url('http://planetoftheweb.com/i/8ball/6.png') #666";
var img7 = "url('http://planetoftheweb.com/i/8ball/7.png') #666";
var img8 = "url('http://planetoftheweb.com/i/8ball/8.png') #666";
var img9 = "url('http://planetoftheweb.com/i/8ball/9.png') #666";
var img10 = "url('http://planetoftheweb.com/i/8ball/10.png') #666";
var img11 = "url('http://planetoftheweb.com/i/8ball/11.png') #666";
var img12 = "url('http://planetoftheweb.com/i/8ball/12.png') #666";
var img13 = "url('http://planetoftheweb.com/i/8ball/13.png') #666";
var img14 = "url('http://planetoftheweb.com/i/8ball/14.png') #666";
var img15 = "url('http://planetoftheweb.com/i/8ball/15.png') #666";
var img16 = "url('http://planetoftheweb.com/i/8ball/16.png') #666";
var img17 = "url('http://planetoftheweb.com/i/8ball/17.png') #666";
var img18 = "url('http://planetoftheweb.com/i/8ball/18.png') #666";
var img19 = "url('http://planetoftheweb.com/i/8ball/19.png') #666";

var answer = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19] ;

function reply()
{
  var content = answer[Math.floor(18*Math.random())];
  document.getElementById("myDIV").style.background = content;
}
askButton.addEventListener("click", reply );
