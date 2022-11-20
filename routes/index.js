var express = require('express');
var router = express.Router();
const distanceInWords = require("date-fns/formatDistanceToNow");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages:messages, format: distanceInWords });
});

router.get('/new', function(req, res, next) {
  res.render('form', {title: "Mini Messageboard"});
});

router.post('/new', function(req, res, next) {
  let {messageUser, messageText} = req.body;
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect("/");
});

module.exports = router;
