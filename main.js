const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

//select  tab content item
function selectItem(e) {
  removeBorder();
  //add border to the current tab
  this.classList.add("tab-border");
}

function removeBorder() {
  tabItems.forEach((items) => items.classList.remove("tab-boreder"));
}
// listen for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));
