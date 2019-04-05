const objs = [{ id: "a" }, { id: "b" }, { id: "c" }];
const foundIndex = objs.find(function(i) {
  return i.id === "b";
});
console.log(foundIndex);

//searches and returns that item. If not, it returns undefined
