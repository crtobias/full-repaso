import express from "express"
import personajesRoutes from "./routes/personajes.routes.js"

const app = express()


//middlewars
app.use(express.json());




app.use(personajesRoutes)

export default app