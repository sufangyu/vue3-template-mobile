// 生产系统域名标识
const SYSTEM_DOMAINS_PROD = ['bps', 'ops'];

export function getEnv(defaultEnv = 'dev5') {
  const defaultMainDomain = 'ibaibu.com';
  const { hostname } = window.location;
  const isLocal = /(^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$)|(^localhost$)/.test(hostname);
  const domains = hostname.split('.');
  const [levelDomain] = domains;
  const mainDomain = isLocal ? defaultMainDomain : `${domains[1]}.${domains[2]}`;
  let prefix;
  const prefixList = levelDomain.split('-');

  if (isLocal) {
    prefix = defaultEnv;
  } else if (SYSTEM_DOMAINS_PROD.includes(levelDomain)) {
    prefix = 'prod';
  } else if (prefixList.length === 1) {
    prefix = levelDomain;
  } else {
    [prefix] = prefixList;
  }

  return {
    isLocal,
    mainDomain,
    levelDomain,
    prefix,
  };
}


export const API_BASE = (() => {
  const { prefix, mainDomain, levelDomain } = getEnv();

  const APIS: any = {
    prod: {
      open: `https://openapi.${mainDomain}`,
      base: `https://api.${mainDomain}`,
    },
    others: {
      open: ['blue-', 'oms-'].includes(levelDomain) ? `https://openapi.${mainDomain}` : `https://uat-openapi.${mainDomain}`,
      base: `https://${prefix}-api.${mainDomain}`,
    },
  };
  return APIS[prefix] || APIS.others;
})();
