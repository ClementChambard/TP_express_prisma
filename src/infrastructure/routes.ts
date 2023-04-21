import { Router } from 'express'
import { TaskExternalDependencies, taskInjector } from '../contexts/task/infrastructure/task.injector'
import { TagExternalDependencies, tagInjector } from '../contexts/tag'

export type ExternalDependencies = TaskExternalDependencies | TagExternalDependencies

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getRoutes: GetRoutes = (externalDependencies: ExternalDependencies): Router[] => {
  // Main routes
  return [
    Router().use('/task', taskInjector(externalDependencies)),
    Router().use('/tag', tagInjector(externalDependencies))
  ]
}

export type GetRoutes = (externalDependencies: ExternalDependencies) => Router[]
