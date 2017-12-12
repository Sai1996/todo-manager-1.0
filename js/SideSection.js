function SideSection() {
  this.logo = new Logo();
  this.menu = new Menu();
}
SideSection.prototype.render = function () {
  return "\<div>\
  <div>" +
    this.logo.render() +
    "</div>\
  <div>" +
    this.menu.render() +
    "</div>\
  </div>";
};