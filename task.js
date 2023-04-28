// GET
// POST
// DELETE
// PATCH
const arr = [
  { id: 1, name: "mohamed" },
  { id: 2, name: "ahmed" },
  { id: 3, name: "abdo" },
  { id: 4, name: "yoooo" },
  { id: 5, name: "sphinx" },
];
let id = arr.length;
id++;
const http = require("http");
// GET all data
const getAllData = function () {
  if (arr.length === 0) return 0;
  else return arr;
};
// GET single element
const getData = function (id) {
  const index = arr.findIndex((element) => {
    return element.id === id;
  });
  if (index !== -1) {
    return index;
  }
};
// POST
const addData = function (name) {
  arr.push({ id, name });
  id++;
};
// DELETE an element
const deleteElement = function (id) {
  const index = arr.findIndex((element) => {
    return element.id === id;
  });
  if (index != -1) {
    arr.splice(index, 1);
  }
};
// Patch an element
const edit = function (id, name) {
  const index = arr.findIndex((element) => {
    return element.id === id;
  });
  if (index != -1) {
    arr[index].name = name;
    return index;
  }
};
module.exports = { getAllData, getData, edit, deleteElement, addData, arr };
