const express = require("express");
const calculatorRoutes = require("./calculator.routes");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/calculator", calculatorRoutes);

app.get("/", (req, res) => {
  res.send("REST API is running...");
});

// wrong route handler
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find the route!");
});


// error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
