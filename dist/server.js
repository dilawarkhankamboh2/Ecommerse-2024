import { app } from "./app.js";
import { config } from "./config/config.js";
// server listen
(() => {
    const PORT = config.PORT || 8090;
    app.listen(PORT, () => console.log(`server runnit at port ${PORT}`));
})();
