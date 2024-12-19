const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const employeesRouter = require("./routes/employees");
app.use("/employees", employeesRouter);

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
