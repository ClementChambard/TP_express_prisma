import { ITaskRepository, TaskCreateRaw, TaskRaw, TaskUpdateRaw } from '../../../../contexts/task'
import { RelationalDatabase } from '../../database'
import { toTaskRaw } from './task.mapper'

export class TaskRepository implements ITaskRepository {
  constructor(private readonly database: RelationalDatabase) { }

  async addTag(taskId: string, tagId: string): Promise<void> {
    await this.database.client.task.update({
      where: {
        id: taskId
      },
      data: {
        tags: {
          connect: {
            id: tagId
          }
        }
      }
    })
  }

  async removeTag(taskId: string, tagId: string): Promise<void> {
    await this.database.client.task.update({
      where: {
        id: taskId
      },
      data: {
        tags: {
          disconnect: {
            id: tagId
          }
        }
      }
    })
  }

  async getTasks(page: number, sorted: boolean): Promise<TaskRaw[]> {
    type getTaskParams = { take?: number; skip?: number; orderBy?: any; include: any }
    let param: getTaskParams = { include: { tags: true } }
    if (sorted) param.orderBy = { priority: 'asc' }
    if (page > 0) {
      param.take = 10
      param.skip = (page - 1) * 10
    }
    const tasks = await this.database.client.task.findMany(param)
    return tasks.map(toTaskRaw)
  }

  async createTask(task: TaskCreateRaw): Promise<TaskRaw> {
    const newtask = await this.database.client.task.create({
      data: task,
      include: {
        tags: true
      }
    })
    return toTaskRaw(newtask)
  }

  async getOneTask(id: string): Promise<TaskRaw> {
    const task = await this.database.client.task.findUnique({
      where: {
        id: id
      }
    })
    return toTaskRaw(task)
  }

  async updateTask(id: string, data: TaskUpdateRaw): Promise<void> {
    await this.database.client.task.update({
      where: {
        id: id
      },
      data: data
    })
  }

  async deleteTask(id: string): Promise<void> {
    await this.database.client.task.delete({
      where: {
        id: id
      }
    })
  }
}
