import { TaskUpdate } from '../../domains/types'
import { ITaskRepository } from '../../infrastructure'

export class UpdateTaskUseCase {
  constructor(private TaskRepository: ITaskRepository) { }

  async execute(id: string, data: object): Promise<void> {
    return await this.TaskRepository.updateTask(id, data as TaskUpdate)
  }
}
