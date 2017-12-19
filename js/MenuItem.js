function MenuItem(icon,text,isSelected){
  this.icon = icon;
  this.text = text;
  this.isSelected = isSelected;
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
  return wrapper;
};