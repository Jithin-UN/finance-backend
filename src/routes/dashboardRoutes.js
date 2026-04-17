import express from "express";
import { getSummary } from "../controllers/dashboardController.js";
import { auth } from "../middleware/auth.js";
import { allowRoles } from "../middleware/roles.js";

const router = express.Router();

router.get("/", auth, allowRoles("analyst", "admin"), getSummary);

export default router;