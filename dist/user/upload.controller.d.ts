import { Response } from 'express';
export declare class UploadController {
    UploadFile(file: any): {
        url: string;
    };
    getImage(path: any, res: Response): Promise<void>;
}
