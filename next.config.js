const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  // reactStrictMode: true,
  if (phase === PHASE_DEVELOPMENT_SERVER){
    return ({
      env: {
        mongodb_username: 'nathan',
        mongodb_password: 'ixprzyV3yPi3SeGn',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'mePortfolio',
        NEXTAUTH_URL: 'https://me-portfolio-zeta.vercel.app',
        gmail_username: 'pthanhnhan93@gmail.com',
        gmail_password: 'obavgdooeloncgdi',
        url_connection: 'http://localhost:3000'
      },
      webpack: (config, {
        isServer
     }) => {
        if (!isServer) {
           // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
           config.resolve.fallback = {
              fs: false
           }
        }
   
        return config;
     }
    });
  }
  return ({
    env: {
      mongodb_username: 'nathan',
      mongodb_password: 'ixprzyV3yPi3SeGn',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'mePortfolio',
      NEXTAUTH_URL: 'https://me-portfolio-zeta.vercel.app',
      gmail_username: 'pthanhnhan93@gmail.com',
      gmail_password: 'obavgdooeloncgdi',
      url_connection: 'https://me-portfolio-zeta.vercel.app'
    },
    webpack: (config, {
      isServer
   }) => {
      if (!isServer) {
         // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
         config.resolve.fallback = {
            fs: false
         }
      }
 
      return config;
   }
  });
  
};

// module.exports = {
//   webpack: (config, {
//      isServer
//   }) => {
//      if (!isServer) {
//         // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
//         config.resolve.fallback = {
//            fs: false
//         }
//      }

//      return config;
//   }
// }