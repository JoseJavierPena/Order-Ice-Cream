import { Router } from 'express';
import { findUser, createUser, signIn } from "../controllers/user.controller";

const router = Router();

router.route('/find')
    .get(findUser)
    .post(findUser);

router.route('/createUser')
    .post(createUser);

router.route('/signIn')
    .post(signIn);

export default router;