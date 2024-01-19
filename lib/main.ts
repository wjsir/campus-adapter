import { StandardBridge } from './bridge/standard/index';
import { EasType, School } from './eas/types';
import { appBridge } from './bridge/appBridge/AppBridge';

const registerSchool = async (school: School, debug = false) => {
  console.log(school);
  console.log(debug);
  console.log(school.getName());
  let a = await school
    .getEAS(EasType.Undergraduate)
    ?.getEasAuthenticator()
    .auth('');
  console.log(a);
};

let globalBridge = appBridge;

const registerBridge = async (bridge: StandardBridge) => {
  globalBridge = bridge;
};

export { registerSchool, registerBridge, globalBridge };
