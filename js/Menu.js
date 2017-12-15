function Menu(title,menuItemData){
  this.title = title;
  this.menuItemData = menuItemData;
};
Menu.prototype.render = function(){
  var menuItems = this.menuItemData.map(function(data){
    return new MenuItem(data.icon,data.text,data.isSelected).render();
  }).join("");
  return "<div>\
  <div class=\"menuTitle\">" + this.title + "</div>\
  <div>" +
  menuItems + 
 "</div> </div>";
}