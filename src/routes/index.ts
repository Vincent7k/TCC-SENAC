import { Router, Request, Response } from 'express';

import * as HomeController from '../controllers/homeController'
import * as InfoController from '../controllers/infoController'

const router = Router()

router.get('/',HomeController.home)
router.get('/course',InfoController.course)
router.get('/about',InfoController.about)
router.get('/contact',InfoController.contact)
router.get('/security',InfoController.security)
router.get('/support',InfoController.support)
router.get('/programming',InfoController.programming)
router.get('/quality',InfoController.quality)
router.get('/management',InfoController.management)
router.get('/mobile',InfoController.mobile)
router.get('/engineering',InfoController.engineering)
router.get('/web',InfoController.web)
router.get('/cloud',InfoController.cloud)

export default router