import { Task, TaskCreate } from '../../domains/types'
import { ITaskRepository } from '../../infrastructure'

export class CreateTasksUseCase {
  constructor(private TaskRepository: ITaskRepository) { }

  async execute(task: Task): Promise<Task> {
    const newtask = await this.TaskRepository.createTask(task as TaskCreate)
    return newtask
  }
}
