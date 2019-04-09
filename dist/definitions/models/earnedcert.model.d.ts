import { Request, Response, NextFunction } from 'express';
export declare class Earnedcert {
    _model: any;
    constructor(norm: any);
    deleteEarnedcert(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateEarnedcert(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createEarnedcert(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllEarnedcert(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getEarnedcertById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
