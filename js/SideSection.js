function SideSection() {
  this.logo = new Logo();
  this.statusMenu = new Menu(controller.state.statusMenuData.title,controller.state.statusMenuData.menuItems);
  this.dateMenu = new Menu(controller.state.dateMenuData.title,controller.state.dateMenuData.menuItems);
}
SideSection.prototype.render = function () {
  var wrapper = document.createElement("div");
  wrapper.className = "grad";
  for(var i = 0; i < 3; i++){
    wrapper.appendChild(document.createElement("div"));
  }
  wrapper.children[0].appendChild(this.logo.render());
  wrapper.children[1].appendChild(this.statusMenu.render());
  wrapper.children[2].appendChild(this.dateMenu.render());
  return wrapper;
};