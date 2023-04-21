import { Router } from 'express'
import { TagRepository, RelationalDatabase } from '../../../infrastructure/database'
import { tagRoutes } from './tag.routes'
import { TagController } from './controller'
import { CreateTagUseCase, DeleteTagUseCase, GetOneTagUseCase, GetTagsUseCase, UpdateTagUseCase } from '../use-cases'

export type TagExternalDependencies = {
  database: RelationalDatabase
}

export const tagInjector = (externalDependencies: TagExternalDependencies): Router => {
  const tagRepository = new TagRepository(externalDependencies.database)

  const getTagsUseCase = new GetTagsUseCase(tagRepository)
  const getOneTagUseCase = new GetOneTagUseCase(tagRepository)
  const createTagUseCase = new CreateTagUseCase(tagRepository)
  const deleteTagUseCase = new DeleteTagUseCase(tagRepository)
  const updateTagUseCase = new UpdateTagUseCase(tagRepository)

  const tagController = new TagController(
    getTagsUseCase,
    getOneTagUseCase,
    createTagUseCase,
    deleteTagUseCase,
    updateTagUseCase
  )

  return tagRoutes(tagController)
}
