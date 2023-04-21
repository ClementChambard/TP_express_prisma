import { Task } from '../../domains/types'
import { ITaskRepository } from '../../infrastructure'

export class GetOneTaskUseCase {
  constructor(private TaskRepository: ITaskRepository) { }

  async execute(id: string): Promise<Task> {
    return await this.TaskRepository.getOneTask(id)
  }
}
