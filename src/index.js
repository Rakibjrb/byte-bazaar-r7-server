const app = require("./app");
const connectDB = require("./db/db");

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  await connectDB();
  console.log(`server running on [+] http://localhost:${port}`);
});
