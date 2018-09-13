
var form = document.querySelector("form");

form.addEventListener("input", function(e) {
  console.log(e.type, e.target, e);
  
});
form.addEventListener("change", function(e) {
  console.log(e.type, e.target, e);
  
});
form.addEventListener("focusout", function(e) {
  console.log(e.type, e.target, e);
  
});
form.addEventListener("submit", function(e) {
  console.log(e.type, e.target, e);
  e.preventDefault();
  
});
