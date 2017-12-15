function MenuItem(icon,text,isSelected){
  this.icon = icon;
  this.text = text;
  this.isSelected = isSelected;
};
MenuItem.prototype.render = function(){
  return "<div class=\"forSeparate\"><div class=\"fa fa-" + this.icon + " forIcon\"> </div> <div class=\"forTextAfterIcon\">" + this.text +"</div></div>";
};