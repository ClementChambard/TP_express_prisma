import { ITagRepository } from '../../infrastructure'

export class DeleteTagUseCase {
  constructor(private TagRepository: ITagRepository) { }

  async execute(id: string): Promise<void> {
    return await this.TagRepository.deleteTag(id)
  }
}
