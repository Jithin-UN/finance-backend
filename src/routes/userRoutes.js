import express from "express";
import { getUsers, toggleStatus } from "../controllers/userController.js";
import { auth } from "../middleware/auth.js";
import { allowRoles } from "../middleware/roles.js";

const router = express.Router();

router.use(auth, allowRoles("admin"));

router.get("/", getUsers);
router.patch("/:id", toggleStatus);

export default router;