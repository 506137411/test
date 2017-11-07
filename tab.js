
function tab(){
  var navitem = document.querySelectorAll(".nav a");
  var item = document.querySelectorAll(".item");
  for(var i = 0; i < navitem.length; i++){
    navitem[i].index = i;
    navitem[i].addEventListener("click",function () {
      for(var j = 0; j < navitem.length; j++){
          navitem[j].classList.remove("active");
          item[j].classList.remove("active");
      }
      navitem[this.index].classList.add("active");
      item[this.index].classList.add("active");
    },false);
  }
}
