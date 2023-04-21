import { Router } from 'express'
import { TaskController } from './controller'

export function taskRoutes(controller: TaskController): Router {
  const router = Router()

  router.get('/', controller.getTasks.bind(controller))
  router.post('/', controller.createTask.bind(controller))
  router.post('/tags/:id', controller.addTag.bind(controller))
  router.delete('/tags/:id', controller.removeTag.bind(controller))
  router.get('/:id', controller.getOneTask.bind(controller))
  router.delete('/:id', controller.deleteTask.bind(controller))
  router.patch('/:id', controller.updateTask.bind(controller))

  return router
}
