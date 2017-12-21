function MenuItem(icon,text,isSelected){
  this.icon = icon;
  this.text = text;
  this.isSelected = isSelected;
  controller.state[this.text] = controller.state[this.text] || {};
};
MenuItem.prototype.render = function(){
  var wrapper = document.createElement("div");
  wrapper.id = this.text;
  wrapper.className = "forSeparate";
  wrapper.appendChild(document.createElement("div"));
  wrapper.children[0].className = "fa fa-" + this.icon + " forIcon";
  wrapper.appendChild(document.createElement("div"));
  wrapper.children[1].className = "forTextAfterIcon";
  wrapper.children[1].innerText = this.text;
  var t = this;
  wrapper.addEventListener("click",function(){
    controller.state[t.text].isSelected = true;
    controller.render("app");
  });
  if(controller.state[t.text].isSelected){
    wrapper.className += " onClick";
  }
  return wrapper;
};