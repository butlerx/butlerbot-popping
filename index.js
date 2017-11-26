import Popping from './app/controllers/popping';

export default config => (app) => {
  const popping = new Popping(config);
  app.joinChannels(popping.config.channelsToJoin);
  app.cmd('pop', '', popping.config.channels, popping.config.channelsToExclude, popping.pop);
};
