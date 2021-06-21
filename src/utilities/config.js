// set app mode
const AppMode = [process.env.REACT_APP_ENV];

// set API URLs
var production = 'http://localhost:1339';
const development = 'http://localhost:1339';

let baseURL = '';
switch (AppMode[0]) {
  case 'development':
    baseURL = development;
    break;
  case 'production':
    baseURL = production;
    break;
  default:
    baseURL = production;
}

export {baseURL};
