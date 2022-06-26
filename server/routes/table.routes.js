import {Router} from "express";
import tableController from '../controller/table.controller.js'

const router = new Router()

router.post('/table', tableController.createRow)
router.get('/table', tableController.getRows)
router.get('/table/:id', tableController.getOneRow)
router.put('/table', tableController.updateRow)
router.delete('/table/:id', tableController.deleteRow)

export default router
