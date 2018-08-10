let express = require("express");
let router = express.Router();

const searchRoute = require("./search");
const users = require("./users");

router.use("/users", users);
router.use("/search", searchRoute);

/* GET home page. */
router.get("/", function(req, res) {
	res.send("This Api Works!");
});

module.exports = router;
