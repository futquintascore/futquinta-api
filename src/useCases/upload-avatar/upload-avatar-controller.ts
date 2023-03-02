import { Request, Response } from 'express';
import { UploadAvatarUseCase } from './upload-avatar-usecase';
export class UploadAvatarController {
  constructor(private UploadAvatar: UploadAvatarUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      if (!req.file) {
        return res
          .status(400)
          .json({ message: 'You must send an avatar image on format jpge or png' });
      }
      console.log(req.body);
      return;

      // const { name, picture } = await this.UploadAvatar.execute(+id, req.file.path);

      // res.status(201).json({
      //   message: `Avatar of player ${name} updated with success`,
      //   image_url: picture,
      // });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
