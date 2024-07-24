import express, { Router } from 'express'
import projectOperations from './project.route'

const router: Router = express.Router()

/** Product Routes */
router.use(projectOperations)

export default router
