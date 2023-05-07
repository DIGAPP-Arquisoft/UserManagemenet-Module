import { Router } from 'express'
import * as authCtrl from '../controllers/auth.controller.js'
import { verifyUserExist } from '../middlewares/verifySignup.js'

const router = Router()

router.post('/signin', authCtrl.signin)

router.post('/signup', verifyUserExist, authCtrl.signup)

router.post('/verifyToken', authCtrl.verifyToken)

export default router