import { ITagRepository, TagCreateRaw, TagRaw, TagUpdateRaw } from '../../../../contexts/tag'
import { RelationalDatabase } from '../../database'
import { toTagRaw } from './tag.mapper'

export class TagRepository implements ITagRepository {
  constructor(private readonly database: RelationalDatabase) { }

  async getTags(): Promise<TagRaw[]> {
    const tags = await this.database.client.tag.findMany({
      include: {
        tasks: true
      }
    })
    return tags.map(toTagRaw)
  }

  async createTag(tag: TagCreateRaw): Promise<void> {
    await this.database.client.tag.create({
      data: tag
    })
  }

  async getOneTag(id: string): Promise<TagRaw> {
    const tag = await this.database.client.tag.findUnique({
      where: {
        id: id
      },
      include: {
        tasks: true
      }
    })
    return toTagRaw(tag)
  }

  async updateTag(id: string, data: TagUpdateRaw): Promise<void> {
    await this.database.client.tag.update({
      where: {
        id: id
      },
      data: data
    })
  }

  async deleteTag(id: string): Promise<void> {
    await this.database.client.tag.delete({
      where: {
        id: id
      }
    })
  }
}
