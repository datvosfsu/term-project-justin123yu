const express = require("express");
const router = express.Router();

router.get("/", (_req, res) => {
    const name = "Some name";

    res.render("root.ejs", {name});
})

module.exports = router;