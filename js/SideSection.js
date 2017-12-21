function SideSection() {
  this.logo = new Logo();
  this.statusMenu = new Menu("Status",[{
    icon:"bars",
    text:"All",
    isSelected:false
  },
  {
    icon:"refresh",
    text:"Active",
    isSelected:false
  },
  {
    icon:"check-square",
    text:"Completed",
    isSelected:false
  }]);
  this.dateMenu = new Menu("Date",[{
    icon:"calendar",
    text:"Yesterday",
    isSelected:false
  },
  {
    icon:"calendar",
    text:"Today",
    isSelected:false
  },
  {
    icon:"calendar",
    text:"Tomorrow",
    isSelected:false
  },
  {
    icon:"calendar",
    text:"Other Date",
    isSelected:false
  }]);
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