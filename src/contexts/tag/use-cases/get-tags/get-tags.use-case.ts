import { Tag } from '../../domains/types'
import { ITagRepository } from '../../infrastructure'

export class GetTagsUseCase {
  constructor(private TagRepository: ITagRepository) { }

  async execute(): Promise<Tag[]> {
    return await this.TagRepository.getTags()
  }
}
