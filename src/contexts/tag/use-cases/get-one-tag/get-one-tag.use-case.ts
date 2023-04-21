import { Tag } from '../../domains/types'
import { ITagRepository } from '../../infrastructure'

export class GetOneTagUseCase {
  constructor(private TagRepository: ITagRepository) { }

  async execute(id: string): Promise<Tag> {
    return await this.TagRepository.getOneTag(id)
  }
}
