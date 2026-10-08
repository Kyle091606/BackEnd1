import express from "express";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();

/* Routes implementation */
app.use("/books", bookRoutes);

try {
    const port = 3000; // define port variable 
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch(e) {
    console.log(e);
}