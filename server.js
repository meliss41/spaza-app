   var express = require('express');
   var exphbs  = require('express-handlebars');
   
   var app = express();

   var hbs = exphbs.create({
    // Specify helpers which are only registered on this instance. 
    helpers: {
        foo: function () { return 'FOO!'; },
        bar: function () { return 'BAR!'; }
     }
   });

   app.engine('handlebars', hbs.engine);
   app.set('view engine', 'handlebars');
 
   app.get('/', function (req, res, next) {
    res.render('home', {
        showTitle: true,
 
        // Override `foo` helper only for this rendering. 
        helpers: {
            foo: function () { return 'foo.'; }
        }
      });
    });
 

   app.engine('handlebars', exphbs({defaultLayout: 'main'}));
   app.set('view engine', 'handlebars');

   // create a route
   app.get('/', function (req, res) {
     res.send('Hello World!');
    });

   // create hello route
   app.get('/hello', function (req, res) {
     res.send('Hello codeX');
    });


   app.get('/bye', function (req, res) {
     res.send('bye...'); 
    });

   app.get('/', function (req, res, next) {
    res.render('home', {layout: false});
    });

   app.use(express.static('public'));

   app.enable('view cache');



   //start the server
   var server = app.listen(3000, function () {

     var host = server.address().address;
     var port = server.address().port;

     console.log('Example app listening at http://%s:%s', host, port);

   });
