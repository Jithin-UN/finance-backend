import express from "express";
import {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
} from "../controllers/recordController.js";

import { auth } from "../middleware/auth.js";
import { allowRoles } from "../middleware/roles.js";

const router = express.Router();

router.use(auth);

router.get("/", getRecords);
router.post("/", allowRoles("admin"), createRecord);
router.put("/:id", allowRoles("admin"), updateRecord);
router.delete("/:id", allowRoles("admin"), deleteRecord);

export default router;