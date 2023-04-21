import { Router } from 'express'
import { TaskRepository, RelationalDatabase } from '../../../infrastructure/database'
import { taskRoutes } from './task.routes'
import { TaskController } from './controller'
import {
  AddTagUseCase,
  CreateTasksUseCase,
  DeleteTaskUseCase,
  GetOneTaskUseCase,
  GetTasksUseCase,
  RemoveTagUseCase,
  UpdateTaskUseCase
} from '../use-cases'

export type TaskExternalDependencies = {
  database: RelationalDatabase
}

export const taskInjector = (externalDependencies: TaskExternalDependencies): Router => {
  const taskRepository = new TaskRepository(externalDependencies.database)

  const getTasksUseCase = new GetTasksUseCase(taskRepository)
  const getOneTaskUseCase = new GetOneTaskUseCase(taskRepository)
  const createTaskUseCase = new CreateTasksUseCase(taskRepository)
  const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository)
  const updateTaskUseCase = new UpdateTaskUseCase(taskRepository)
  const addTagUseCase = new AddTagUseCase(taskRepository)
  const removeTagUseCase = new RemoveTagUseCase(taskRepository)

  const taskController = new TaskController(
    getTasksUseCase,
    getOneTaskUseCase,
    createTaskUseCase,
    deleteTaskUseCase,
    updateTaskUseCase,
    addTagUseCase,
    removeTagUseCase
  )

  return taskRoutes(taskController)
}
