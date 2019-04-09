import { Request, Response, NextFunction } from 'express';
export declare class Resources {
    _model: any;
    constructor(norm: any);
    deleteResource(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateResource(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createResource(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllResource(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getResourceById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
