import fullList = require('full-list')
//  新增的商品规格数组
const newOptions = [
    { name: "gender", values: ["male", "female"] },
    { name: "color", values: ["red", "blue", "yellow"] },
    { name: "size", values: ["30", "31", "32", "33"] },
];

console.log(fullList(newOptions))