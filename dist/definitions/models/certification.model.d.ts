import { Request, Response, NextFunction } from 'express';
export declare class Certification {
    _model: any;
    constructor(norm: any);
    deleteCertification(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateCertification(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createCertification(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllCertification(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getCertificationById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
