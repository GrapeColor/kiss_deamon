import KissYou from './kiss_you/index.mjs';

const kissYou = new KissYou();

kissYou.login(process.env['KISS_DAEMON_TOKEN'])
  .catch(console.error);
