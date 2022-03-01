/*
 * @Author: wuj
 * @Date: 2022-03-01 14:21:03
 * @LastEditors: wuj
 * @LastEditTime: 2022-03-01 14:21:25
 * @Description:
 */
const toTypeString = (val) => {
  return Object.prototype.toString.call(val);
};

const typeName = (val) => {
  return Object.prototype.toString
    .call(val)
    .replace(/^\[object (\S+)\]$/, "$1")
    .toLowerCase();
};

const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);

const isFunction = (val) => toTypeString(val) === "[object Function]";
const isAsync = (val) => toTypeString(val) === "[object AsyncFunction]";
const isObject = (val) => val !== null && typeof val === "object";
const isArray = Array.isArray;
const isString = (val) => typeof val === "string";
const isNumber = (val) => typeof val === "number";
const isBigInt = (val) => typeof val === "bigint";
const isBoolean = (val) => typeof val === "boolean";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isDate = (val) => val instanceof Date;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isPromise = (val) => toTypeString(val) === "[object Promise]";
const isSymbol = (val) => typeof val === "symbol";
const isNullOrUndefined = (val) => {
  if (val === null) return true;
  if (typeof val === "undefined") return true;
  return false;
};

function log() {
  if (window.__showlog) console.log(...arguments);
}
const logTime = (msg, auto = true) => {
  const start = () => {
    if (window.__showlog) console.time(msg);
  };
  const end = () => {
    if (window.__showlog) console.timeEnd(msg);
  };
  if (auto) start(); // 自动开始计时
  return { start, end };
};

export {
  log, // 打印调试信息
  logTime, // 计时
  toTypeString, // Object.prototype.toString.call(val)
  typeName, // 获取可以识别的名称
  hasOwnProperty,
  hasOwn,
  isFunction, // 验证普通函数
  isAsync, // 验证 async 的函数
  isPromise, // 验证 Promise
  isObject, // 验证 Object
  isArray, // 验证数组
  isString, // 验证字符串
  isNumber, // 验证 number
  isBigInt, // 验证 BigInt
  isBoolean, // 验证 布尔
  isRegExp, // 验证正则类型
  isDate, // 验证日期
  isMap, // 验证 map
  isSet, // 验证 set
  isSymbol, // 验证 Symbol
  isNullOrUndefined, // null 或者 undefined 返回 true
};
