function InputBox(){

};
InputBox.prototype.render = function(){
return htmlToNode('\
  <div class="forInputboxPos">\
    <input class="inputBox" placeholder="What do you want to do?">\
    <div class="fa fa-plus plus"></div>\
    </div>')
};