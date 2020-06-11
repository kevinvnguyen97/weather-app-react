const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client", "build"));
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});