import { Router } from 'express'
import { celebrate } from 'celebrate'
import { projectControllers } from '../controllers'
import { projectValidations } from '../validations'
import { wrapController } from '../middlewares'

const router = Router()

router.get('/projects', wrapController(projectControllers.getAllProjects))
router.get(
  '/projects/:id',
  celebrate(projectValidations.getProjectByIdSchema),
  wrapController(projectControllers.getProjectById)
)
router.post(
  '/projects',
  celebrate(projectValidations.createProjectSchema),
  wrapController(projectControllers.createProject)
)
router.put(
  '/projects/:id',
  celebrate(projectValidations.updateProjectSchema),
  wrapController(projectControllers.updateProject)
)
router.delete(
  '/projects/:id',
  celebrate(projectValidations.getProjectByIdSchema),
  wrapController(projectControllers.deleteProject)
)
router.post(
  '/projects/add-product',
  celebrate(projectValidations.addProductToProjectSchema),
  wrapController(projectControllers.addProductToProject)
)
router.delete(
  '/projects/remove-product/:productId/:projectId',
  celebrate(projectValidations.removeProductFromProjectSchema),
  wrapController(projectControllers.removeProductFromProject)
)

export default router
