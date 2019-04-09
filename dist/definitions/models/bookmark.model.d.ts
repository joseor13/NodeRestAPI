import { Request, Response, NextFunction } from 'express';
export declare class Bookmark {
    _model: any;
    constructor(norm: any);
    deleteBookmark(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateBookmark(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createBookmark(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllBookmark(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getBookmarkById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
