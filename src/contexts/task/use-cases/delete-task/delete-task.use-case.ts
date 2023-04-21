import { ITaskRepository } from '../../infrastructure'

export class DeleteTaskUseCase {
  constructor(private TaskRepository: ITaskRepository) { }

  async execute(id: string): Promise<void> {
    return await this.TaskRepository.deleteTask(id)
  }
}
