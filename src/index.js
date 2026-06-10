import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoute.js";
import orderRoutes from "./routes/orderRoute.js";
import sequelize from "./config/database.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(
  cors({
    origin: "http://127.0.0.1:8080",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Origin"],
  }),
);

sequelize
  .sync()
  .then(() => {
    console.log("Database connected and synced.");
    app.listen(
      PORT,
      () => console.log(`Server running on http://localhost:${PORT}`),
      console.log("Swagger em http://localhost:3000/api-docs"),
    );
  })
  .catch((err) => console.error("Database connection failed:", err));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});
