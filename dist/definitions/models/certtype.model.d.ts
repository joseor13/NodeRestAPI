import { Request, Response, NextFunction } from 'express';
export declare class Certtype {
    _model: any;
    constructor(norm: any);
    deleteCertype(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateCertype(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createCertype(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllCertype(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getCertypeById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
