module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'emberitas-color-palette',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
