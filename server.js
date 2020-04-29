const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT||3000;
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get ('/', function (req, res)  {
    console.log (req.query);
  res.render('index')
});
app.post('/sum', function (req,res)
{
  const a =Number(req.body.a);
  const b =Number(req.body.b);
  const sum =  a + b;
  res.render('sum',{a,b,sum});
});
app.get('/hello',function (req,res)
{
  res.end (`Hello Route`);
});
app.get('/an', function (req,res)
{
  res.render('an');
});
app.get('/count', function (req,res)
{
  const number =  Number(req.query.number || 0);
  res.render('count',{number});
});
app.use(express.static('public'));
app.listen(port);

    console.log(`server is listening on ${port}`);
