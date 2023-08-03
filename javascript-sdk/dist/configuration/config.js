let configOptions = {
  baseUrl: 'http://18.198.159.59:10001'
};

export function setConfig(options) {
  configOptions = { ...configOptions, ...options };
}

export function getConfig() {
  return configOptions;
}
