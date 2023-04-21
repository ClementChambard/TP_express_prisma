import { Task, TaskCreate } from '../../domains/types'
import { ITaskRepository } from '../../infrastructure'

export class CreateTasksUseCase {
  constructor(private TaskRepository: ITaskRepository) { }

  async execute(task: Task): Promise<void> {
    await this.TaskRepository.createTask(task as TaskCreate)
  }
}
