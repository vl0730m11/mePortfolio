const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  // reactStrictMode: true,
  if (phase === PHASE_DEVELOPMENT_SERVER){
    return ({
      env: {
        mongodb_username: 'nathan',
        mongodb_password: 'ixprzyV3yPi3SeGn',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'mePortfolio'
      },
    });
  }
  return ({
    env: {
      mongodb_username: 'nathan',
      mongodb_password: 'ixprzyV3yPi3SeGn',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'mePortfolio'
    },
  });
  
};
