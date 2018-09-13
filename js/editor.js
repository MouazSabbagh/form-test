var form = document.querySelector("form");
var thing = document.querySelector(".thing");

const properties = {
  "font-family": function(node, value) {
    node.style.fontFamily = value;
  },
  "font-size": function(node, value) {
    node.style.fontSize = value + "rem";
  },
  rotate: function(node, value) {
    node.style.transform = "rotate(" + value + "deg)";
  }
};

form.addEventListener("input", function(e) {
  const input = e.target;
  const name = input.name;
  const value = input.value;

  properties[name](thing, value);
});
console.log("hello");
