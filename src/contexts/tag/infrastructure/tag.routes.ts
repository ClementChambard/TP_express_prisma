import { Router } from 'express'
import { TagController } from './controller'

export function tagRoutes(controller: TagController): Router {
  const router = Router()

  router.get('/', controller.getTags.bind(controller))
  router.post('/', controller.createTag.bind(controller))
  router.get('/:id', controller.getOneTag.bind(controller))
  router.delete('/:id', controller.deleteTag.bind(controller))
  router.patch('/:id', controller.updateTag.bind(controller))

  return router
}
