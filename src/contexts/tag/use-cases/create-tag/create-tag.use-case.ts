import { Tag, TagCreate } from '../../domains/types'
import { ITagRepository } from '../../infrastructure'

export class CreateTagUseCase {
  constructor(private TagRepository: ITagRepository) { }

  async execute(tag: Tag): Promise<Tag> {
    return await this.TagRepository.createTag(tag as TagCreate)
  }
}
