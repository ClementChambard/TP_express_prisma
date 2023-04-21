import { ITaskRepository } from '../../infrastructure'

export class AddTagUseCase {
  constructor(private TaskRepository: ITaskRepository) { }

  async execute(taskId: string, tagId: string): Promise<void> {
    await this.TaskRepository.addTag(taskId, tagId)
  }
}
