import { TagRaw } from '../../../../contexts/tag'
import { Tag } from '../../../../contexts/tag/domains/types'
import { TaskRaw } from '../../../../contexts/task'
import { Task } from '../../../../contexts/task/domains/types'

export function toTaskRaw(task) {
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    status: task.status,
    priority: task.priority,
    tags: task.tags.map((tag: Tag) => {
      const t: TagRaw = {
        id: tag.id,
        title: tag.title,
        tasks: []
      }
      return t
    })
  }
}
