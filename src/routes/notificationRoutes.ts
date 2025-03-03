import { Router } from "express"

import notificationController from "../controllers/notificationController"

const router = Router()

router.post("/send", notificationController.sendNotification)

export default router
