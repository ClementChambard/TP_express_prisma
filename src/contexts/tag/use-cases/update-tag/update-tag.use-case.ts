import { TagUpdate } from '../../domains/types'
import { ITagRepository } from '../../infrastructure'

export class UpdateTagUseCase {
  constructor(private TagRepository: ITagRepository) { }

  async execute(id: string, data: object): Promise<void> {
    return await this.TagRepository.updateTag(id, data as TagUpdate)
  }
}
