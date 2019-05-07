import { Request, Response, NextFunction } from 'express';
export declare class Nursery {
    _model: any;
    constructor(norm: any);
    deletePlant(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updatePlant(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createPlant(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllPlants(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getPlantById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
