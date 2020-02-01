// Lib imports
import chalk from 'chalk';
import { DEBUG } from '@env';

const logLevel = {
  debug: 'debug',
  info: 'info',
  error: 'error',
};
let _applicationName = 'SAGASPHERE';

const commonLog = (cmdName, level) =>
  `[${_applicationName}][${cmdName.toUpperCase()}][${level.toUpperCase()}]`;

export const setApplicationName = applicationName => {
  _applicationName = applicationName;
  return _applicationName;
};

export const log = {
  debug: (cmdName, msg) =>
    DEBUG === 'true'
      ? console.debug(
          `${chalk.yellow(commonLog(cmdName, logLevel.debug))} ${msg}`,
        )
      : undefined,
  info: (cmdName, msg) =>
    console.info(`${chalk.green(commonLog(cmdName, logLevel.info))} ${msg}`),
  err: (cmdName, msg) =>
    console.error(`${chalk.red(commonLog(cmdName, logLevel.error))} ${msg}`),
};

export default log;
