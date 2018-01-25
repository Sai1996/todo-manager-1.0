function Menu(title,menuItemData){
  this.title = title;
  this.menuItemData = menuItemData;
};
Menu.prototype.render = function(){
  var menuItems = this.menuItemData.map(function(data){
    return new MenuItem(data.icon,data.text,data.isSelected,data.pos).render();
  });
  var wrapper = document.createElement("div");
  for(var i = 0; i < menuItems.length;i++){
    wrapper.appendChild(menuItems[i]);
  }
  return htmlToNode('\
    <div>\
      <div class="menuTitle">Status</div>\
      <div id="menuItems"> </div>\
    </div>',[{
      selector: "#menuItems",
      element: wrapper
    }]);
}; 