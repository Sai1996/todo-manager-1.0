var objMap = {};

function Select(text){
  for(var i = 0; i < this.menuItems.length; i++){
    this.menuItems[i].isSelected = false;
    if(text == this.menuItems[i].text){
      this.menuItems[i].isSelected = true;
    }
  };
}

var controller = {
  register:function(name,obj){
    objMap[name] = obj;
  },
  render:function(name){
    objMap[name].render();
  },
  state:{
    statusMenuData:{
      title:"Status",
      menuItems:[{
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
      }],
       select:Select
    },
    dateMenuData:{
      title:"Date",
      menuItems:[{
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
      }],
      select:Select
    }
  },

};