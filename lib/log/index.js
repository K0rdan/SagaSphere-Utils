"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.log = exports.setApplicationName = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

// Lib imports
const logLevel = {
  debug: 'debug',
  info: 'info',
  error: 'error'
};
let _applicationName = 'SAGASPHERE';

const commonLog = (cmdName, level) => `[${_applicationName}][${cmdName.toUpperCase()}][${level.toUpperCase()}]`;

const setApplicationName = applicationName => {
  _applicationName = applicationName;
  return _applicationName;
};

exports.setApplicationName = setApplicationName;
const log = {
  debug: (cmdName, msg) => console.debug(`${_chalk.default.yellow(commonLog(cmdName, logLevel.debug))} ${msg}`),
  info: (cmdName, msg) => console.info(`${_chalk.default.green(commonLog(cmdName, logLevel.info))} ${msg}`),
  err: (cmdName, msg) => console.error(`${_chalk.default.red(commonLog(cmdName, logLevel.error))} ${msg}`)
};
exports.log = log;
var _default = log;
exports.default = _default;