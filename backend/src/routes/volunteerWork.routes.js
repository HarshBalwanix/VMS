import { Router } from "express";

import { verifyJWT } from "../middlewares/auth.middleware.js";

import {
  approveVolunteerWork,
  createVolunteerWork,
  deleteVolunteerWork,
  getAllVolunteerWorks,
  updateVolunteerWork,
} from "../Controllers/volunteerWork.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();
router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router
  .route("/")
  .post(
    upload.fields([{ name: "workFile", maxCount: 1 }]),
    createVolunteerWork
  );
router.route("/admin/").get(getAllVolunteerWorks); // both volunteer and user
router.route("/admin/:volunteerWorkId").patch(approveVolunteerWork); // admin
router
  .route("/:volunteerWorkId")
  .patch(
    upload.fields([{ name: "workFile", maxCount: 1 }]),
    updateVolunteerWork
  )
  .delete(deleteVolunteerWork);

export default router;
