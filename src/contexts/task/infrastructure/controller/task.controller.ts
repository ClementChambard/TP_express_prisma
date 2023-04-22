import { Request, Response } from 'express'
import {
  AddTagUseCase,
  CreateTasksUseCase,
  DeleteTaskUseCase,
  GetOneTaskUseCase,
  GetTasksUseCase,
  UpdateTaskUseCase
} from '../../use-cases'
import { RemoveTagUseCase } from '../../use-cases/remove-tag/remove-tag.use-case'

export class TaskController {
  constructor(
    private readonly getTasksUseCase: GetTasksUseCase,
    private readonly getOneTaskUseCase: GetOneTaskUseCase,
    private readonly createTaskUseCase: CreateTasksUseCase,
    private readonly deleteTaskUseCase: DeleteTaskUseCase,
    private readonly updateTaskUseCase: UpdateTaskUseCase,
    private readonly addTagUseCase: AddTagUseCase,
    private readonly removeTagUseCase: RemoveTagUseCase
  ) { }

  async getTasks(req: Request, res: Response) {
    const tasks = await this.getTasksUseCase.execute(Number(req.query.page), Boolean(Number(req.query.sorted)))
    res.status(200).json(tasks)
  }

  async getOneTask(req: Request, res: Response) {
    try {
      const task = await this.getOneTaskUseCase.execute(req.params.id)
      res.status(200).json(task)
    } catch (e) {
      res.status(404)
    }
  }

  async createTask(req: Request, res: Response) {
    try {
      const tag = await this.createTaskUseCase.execute(req.body)
      res.status(201).json(tag)
    } catch (e) {
      res.status(400)
    }
  }

  async deleteTask(req: Request, res: Response) {
    try {
      await this.deleteTaskUseCase.execute(req.params.id)
      res.status(204)
    } catch (e) {
      res.status(404)
    }
  }

  async updateTask(req: Request, res: Response) {
    try {
      await this.updateTaskUseCase.execute(req.params.id, req.body)
      res.status(204)
    } catch (e) {
      res.status(404)
    }
  }

  async addTag(req: Request, res: Response) {
    try {
      await this.addTagUseCase.execute(req.params.id, req.body.tagId)
      res.status(204)
    } catch (e) {
      res.status(404)
    }
  }

  async removeTag(req: Request, res: Response) {
    try {
      await this.removeTagUseCase.execute(req.params.id, req.body.tagId)
      res.status(204)
    } catch (e) {
      res.status(404)
    }
  }
}
