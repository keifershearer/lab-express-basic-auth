const router = require("express").Router();
// const router = express.Router()
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.use('/', require('./auth.routes'))
router.use('/', require('./users.routes'))
module.exports = router;
