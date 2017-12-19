function Menu(title,menuItemData){
  this.title = title;
  this.menuItemData = menuItemData;
};
Menu.prototype.render = function(){
  var menuItems = this.menuItemData.map(function(data){
    return new MenuItem(data.icon,data.text,data.isSelected).render();
  }).join("");
  var wrapper = document.createElement("div");
  wrapper.appendChild(document.createElement("div"));
  wrapper.children[0].className = "menuTitle";
  wrapper.children[0].innerText = this.title;
  wrapper.appendChild(document.createElement("div"));
  for(var i = 0; i < menuItems.length;i++){
    wrapper.children[1].appendChild(menuItems[i]);
  }
  return wrapper;
}