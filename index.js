const app = require("./src/app");
const connectDB = require("./src/db/db");

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  await connectDB();
  console.log(`server running on [+] http://localhost:${port}`);
});
