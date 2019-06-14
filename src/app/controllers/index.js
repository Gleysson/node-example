require('fs').readdirSync(__dirname + '/').forEach(function(file) {
  if (file.match(/\.js$/) !== null && file !== 'index.js') {
      
      let name = file.replace('.js', '')
      name = name.split('.').map( el => {
          return el.charAt(0).toUpperCase() + el.slice(1)
      })

      exports[name.join('')] = require('./' + file)
  }
});