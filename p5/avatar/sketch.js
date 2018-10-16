var a, c=255, data, r=200, img;


function setup() {

 
}

function draw() {
a = makeid();
img = createImg("http://api.adorable.io/avatar/200/"+a);

}

function makeid() {

  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 0123456789";


  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  print(a);
  return text;
}
