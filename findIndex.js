const objs = [{ id: "a" }, { id: "b" }, { id: "c" }];
const foundIndex = objs.findIndex(function(i) {
  return i.id === "d";
});
console.log(foundIndex);

//searches and returns that item's index. If not, it returns -1
