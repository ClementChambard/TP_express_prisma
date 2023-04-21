import { Tag, TagCreate, TagUpdate } from '../domains/types'

export type TagRaw = Tag
export type TagCreateRaw = TagCreate
export type TagUpdateRaw = TagUpdate

export interface ITagRepository {
  getTags(): Promise<Tag[]>
  getOneTag(id: string): Promise<Tag>
  createTag(tag: TagCreate): Promise<void>
  updateTag(id: string, data: TagUpdate): Promise<void>
  deleteTag(id: string): Promise<void>
}
