import express from "express"
import cors from "cors"
import taskRoutes from "./routes/tasks"

const app = express()
app.use(cors())
app.use(express.json())
app.use("/tasks", taskRoutes)

app.listen(3001, () => console.log("API running on http://localhost:3001"))
