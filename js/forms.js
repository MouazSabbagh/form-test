console.log("hello");
var form = document.querySelector("form");
var thing = document.querySelector(".thing");
console.log(form, thing);
form.addEventListener("input", function(e){
if (e.target.name === "amount"){
  const value = parseFloat(e.target.value);

  console.log(value * 100,  value * 100 + "%" );
  thing.style.top = value * 100 + "%" ;

  
}
});