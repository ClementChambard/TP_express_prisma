import { Task } from '../../domains/types'
import { ITaskRepository } from '../../infrastructure'

export class GetTasksUseCase {
  constructor(private TaskRepository: ITaskRepository) { }

  async execute(page: number, sorted: boolean): Promise<Task[]> {
    return await this.TaskRepository.getTasks(page, sorted)
  }
}
