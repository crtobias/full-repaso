import app from "./app.js"
import { sequelize } from "./database/database.js";




async function main() {
    try {
        await sequelize.sync({force:false})
        console.log("conecto correctamente al database");
        app.listen(3000)
        console.log("server en puerto 3000", 3000);
    } catch (error) {
        console.error('fallo al conectar al database', error);
    }
}

main();