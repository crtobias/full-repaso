import {Router} from "express"

import {getPersonajes , createPersonajes} from "../controllers/personajes.controllers.js"

const router = Router()



router.get('/personajes', getPersonajes);
router.post('/personajes', createPersonajes);
router.put('/personajes/:id');
router.delete('/personajes/:id');
router.get('/personajes/:id');


export default router