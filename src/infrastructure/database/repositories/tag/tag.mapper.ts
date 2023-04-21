import { TagRaw } from '../../../../contexts/tag'

export function toTagRaw(tag: TagRaw): any {
  return {
    id: tag.id,
    title: tag.title,
    tasks: tag.tasks.map(task => {
      return {
        id: task.id,
        title: task.title,
        description: task.description,
        status: task.status,
        priority: task.priority
      }
    })
  }
}
