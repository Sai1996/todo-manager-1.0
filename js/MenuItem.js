function MenuItem(icon,text,isSelected,pos){
  this.icon = icon;
  this.text = text;
  this.isSelected = isSelected;
  this.pos = pos;
};
MenuItem.prototype.render = function(){
  var wrapper = htmlToNode('\
  <div id="' + this.text +'" class="forSeparate '+ (this.isSelected ? 'onClick' : '') + '">\
    <div class="fa fa-' + this.icon + ' forIcon"></div>\
    <div class="forTextAfterIcon">' + this.text + '</div>\
  </div>');
  
  var t = this;
  wrapper.addEventListener("click",function(){
    switch(t.pos){
      case "Status":
      controller.state.statusMenuData.select(t.text);
      break;
      case "Date":
      controller.state.dateMenuData.select(t.text);
      break;
    }
    controller.render("app");
  }); 

  return wrapper;
};