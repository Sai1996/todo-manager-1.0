function Menu(){
  this.menuItem = new MenuItem();
};
Menu.prototype.render = function(){
  return "<div>" + 
  this.menuItem.render() + 
 "</div>";
}