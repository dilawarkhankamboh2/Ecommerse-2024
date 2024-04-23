import { app } from "./app.js";
import { config } from "./config/config.js";
import { connectDB } from "./database/connection.js";

// server listen and database connection
(async () => {
  const PORT = config.PORT || 8090;

  app.listen(PORT, () => console.log(`server runnit at port ${PORT}`));

  // database connection
  await connectDB();
})();
