const express = require('express')
const compression = require('compression');
const app = express()

app.use(compression({
  threshold: 0,
  level: 9,
  memLevel: 9
}));
app.set('port', process.env.PORT || 3000)
app.use(express.static('./public', {index: "index.min.html"}))

app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'))
})
