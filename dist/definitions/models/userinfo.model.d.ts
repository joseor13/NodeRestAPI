import { Request, Response, NextFunction } from 'express';
export declare class Userinfo {
    _model: any;
    constructor(norm: any);
    deleteUserinfo(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateUserinfo(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createUserinfo(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllUserinfo(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getUserinfoById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
