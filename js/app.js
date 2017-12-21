function App(){
  this.side = new SideSection();
  this.body = new BodySection();
}

App.prototype.render = function(){
  var wrapper = document.createElement("div");
  wrapper.className = "w";
  wrapper.appendChild(this.side.render());
  document.getElementById("biggestWrapper").innerHTML = "";
  document.getElementById("biggestWrapper").appendChild(wrapper);
};