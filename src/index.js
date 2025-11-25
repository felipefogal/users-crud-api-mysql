import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoute.js";
import sequelize from "./config/database.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", productRoutes);

app.use(cors({ origin: "*" }));

sequelize
  .sync()
  .then(() => {
    console.log("Database connected and synced.");
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("Database connection failed:", err));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});
