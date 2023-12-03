import express from "express"
import personajesRoutes from "./routes/personajes.routes.js"
import cors from "cors"
const app = express()


//middlewars
app.use(express.json());
app.use(cors());





app.use(personajesRoutes)

export default app