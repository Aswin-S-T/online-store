const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/users/userRouter");
const app = express();

const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes configuration
app.use("/api/v1/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
