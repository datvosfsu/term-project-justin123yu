const express = require("express");
const createError = require("http-errors");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "static")));

const rootRoute = require("./routes/root");

app.get("/", rootRoute);

app.use((req, res, next) => {
    next(createError(404));
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});