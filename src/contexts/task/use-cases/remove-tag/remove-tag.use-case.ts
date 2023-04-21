import { ITaskRepository } from '../../infrastructure'

export class RemoveTagUseCase {
  constructor(private TaskRepository: ITaskRepository) { }

  async execute(taskId: string, tagId: string): Promise<void> {
    await this.TaskRepository.removeTag(taskId, tagId)
  }
}
