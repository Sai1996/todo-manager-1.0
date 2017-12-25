function InputBox(){};
InputBox.prototype.render = function(){
 var wrapper = document.createElement("div");
 wrapper.appendChild(document.createElement("input"));
wrapper.children[0].className = "inputBox";
};