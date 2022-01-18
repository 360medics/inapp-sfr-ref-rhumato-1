const fs = require("fs-extra");
const data = require("../../public/dataTree.json");

console.log(data)

const flatData = [];
const flattenData = (nestedObject, fullObject) => {
  ConvertToFlat(nestedObject);
  fillFlatData(fullObject);
};

const fillFlatData = flatEntries => {
  if (flatData.includes(flatEntries)) {
    return;
  }
  flatData.push(flatEntries);
};

const ConvertToFlat = treeItems => {
  treeItems.forEach(item =>
    item.children ? flattenData(item.children, item) : fillFlatData(item)
  );
  return flatData;
};

const dataConverted = ConvertToFlat(data.tree);
fs.writeJsonSync(__dirname + "/../../public/dataFlat.json", dataConverted);
console.info(`json generate in "/public/dataFlat.json"`);
