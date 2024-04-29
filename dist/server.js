import { app } from "./app.js";
import { config } from "./config/config.js";
import { connectDB } from "./database/connection.js";
// server listen and database connection
;
(async () => {
    const PORT = config.PORT || 8090;
    const server = app.listen(PORT, () => console.log(`server runnit at port ${PORT}`));
    //database connection
    await connectDB();
    process.on("unhandledRejection", (err) => {
        console.log(`Error ${err}`);
        console.log("shutting down the server");
        server.close(() => process.exit(1));
    });
})();
