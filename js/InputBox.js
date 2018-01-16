function InputBox(){

};
InputBox.prototype.render = function(){
 var wrapper = document.createElement("div");
 wrapper.appendChild(document.createElement("input"));
wrapper.children[0].className = "inputBox";
wrapper.children[0].placeholder = "What do you want to do?";
wrapper.appendChild(document.createElement("div"));
wrapper.children[1].className = "fa fa-plus forPlus";
return wrapper;
};