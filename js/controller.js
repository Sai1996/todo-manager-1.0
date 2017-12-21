var objMap = {};

var controller = {
  register:function(name,obj){
    objMap[name] = obj;
  },
  render:function(name){
    objMap[name].render();
  },
  state:{}
};