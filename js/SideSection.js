function SideSection() {
  this.logo = new Logo();
  this.statusMenu = new Menu(controller.state.statusMenuData.title,controller.state.statusMenuData.menuItems);
  this.dateMenu = new Menu(controller.state.dateMenuData.title,controller.state.dateMenuData.menuItems);
}
SideSection.prototype.render = function () {

  return htmlToNode(
    '<div class="grad">\
    <div id="logo">\
    </div>\
    <div>\
      <div id="menuUpper">\
      </div>\
    </div>\
    <div>\
      <div id="menuLower">\
      </div>\
    </div>\
    </div>',[{
    selector: "#logo",
    element:this.logo.render()
  },{
    selector: "#menuUpper",
    element:this.statusMenu.render()
  },{
    selector: "#menuLower",
    element: this.dateMenu.render()
  }]
  )
};