function MenuItem(icon,text,isSelected,pos){
  this.icon = icon;
  this.text = text;
  this.isSelected = isSelected;
  this.pos = pos;
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
    switch(t.pos){
      case "Status":
      controller.state.statusMenuData.select(t.text);
      break;
      case "Date":
      controller.state.dateMenuData.select(t.text);
      break;
    }
    controller.render("app");
  });
  if(t.isSelected){
    wrapper.className += " onClick"; 
  }
  return wrapper;
};