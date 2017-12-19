function Logo(){};
Logo.prototype.render = function(){
  var img = document.createElement("img");
  img.className = "todoLogo";
  img.src = "./img/logo.png";
  return img;
};