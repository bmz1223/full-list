"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fullList = require("full-list");
//  新增的商品规格数组
var newOptions = [
    { name: "gender", values: ["male", "female"] },
    { name: "color", values: ["red", "blue", "yellow"] },
    { name: "size", values: ["30", "31", "32", "33"] },
];
console.log(fullList(newOptions));
