var sideSection = new SideSection();
document.getElementById("side-section").appendChild(sideSection.render()).innerHTML = sideSection.render();
var bodySection = new BodySection();
document.getElementById("body-section").appendChild(bodySection.render()).innerHTML = bodySection.render();

var idList = ["All","Active","Completed","Yesterday","Today","Tomorrow","Other Date"];
for(var i = 0; i < idList.length; i++){
  document.getElementById(idList[i]).addEventListener("click",function(){
    document.getElementById(idList[i]).className += "onClick";
    document.getElementById("side-section").innerHTML = sideSection.render();
    document.getElementById("body-section").innerHTML = bodySection.render();
  }
)};


