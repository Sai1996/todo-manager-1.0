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
  
  return "\<div>\
  <div>" +
    this.logo.render() +
    "</div>\
  <div>" +
    this.statusMenu.render() + 
    "</div>\
     <div>" +
    this.dateMenu.render() +
  "</div> </div>";
};