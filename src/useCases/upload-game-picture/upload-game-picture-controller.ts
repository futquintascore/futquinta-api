import { UploadGamePictureUseCase } from './upload-avatar-usecase';
import { Request, Response } from 'express';

export class UploadGamePictureController {
  constructor(private UploadGamePicture: UploadGamePictureUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      if (!req.file) {
        return res
          .status(400)
          .json({ message: 'You must send an avatar image on format jpge or png' });
      }

      const { createdAt } = await this.UploadGamePicture.execute(+id, req.file.path);

      res.status(201).json({
        message: `Picture of game ${new Date(createdAt || '').toLocaleDateString()}`,
      });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
