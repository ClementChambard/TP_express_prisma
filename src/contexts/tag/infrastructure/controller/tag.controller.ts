import { Request, Response } from 'express'
import { CreateTagUseCase, DeleteTagUseCase, GetOneTagUseCase, GetTagsUseCase, UpdateTagUseCase } from '../../use-cases'

export class TagController {
  constructor(
    private readonly getTagsUseCase: GetTagsUseCase,
    private readonly getOneTagUseCase: GetOneTagUseCase,
    private readonly createTagUseCase: CreateTagUseCase,
    private readonly deleteTagUseCase: DeleteTagUseCase,
    private readonly updateTagUseCase: UpdateTagUseCase
  ) { }

  async getTags(_: Request, res: Response) {
    const tags = await this.getTagsUseCase.execute()
    res.status(200).json(tags)
  }

  async getOneTag(req: Request, res: Response) {
    try {
      const tag = await this.getOneTagUseCase.execute(req.params.id)
      res.status(200).json(tag)
    } catch (e) {
      res.status(404).json({ message: 'tag not found' })
    }
  }

  async createTag(req: Request, res: Response) {
    await this.createTagUseCase.execute(req.body)
    res.status(201).json({ message: 'ok' })
  }

  async deleteTag(req: Request, res: Response) {
    try {
      await this.deleteTagUseCase.execute(req.params.id)
      res.status(200).json({ message: 'ok' })
    } catch (e) {
      res.status(404).json({ message: 'tag not found' })
    }
  }

  async updateTag(req: Request, res: Response) {
    try {
      await this.updateTagUseCase.execute(req.params.id, req.body)
      res.status(200).json({ message: 'ok' })
    } catch (e) {
      res.status(404).json({ message: 'tag not found' })
    }
  }
}
