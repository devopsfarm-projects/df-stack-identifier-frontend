import { Router } from "express";
import { authorizationUser, reposListData, userInfoData , reposContentData } from "../controllers/user.controller.js";


const router = Router();

router.route("/authorization").get(authorizationUser);
router.route("/userInformation").get(userInfoData);
router.route("/reposList").get(reposListData);
router.route("/reposContent").get(reposContentData);

// http://localhost:8000/api/v1/users/reposContent


export default router