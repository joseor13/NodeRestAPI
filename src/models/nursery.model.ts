import { Request, Response, NextFunction } from 'express';

export class Nursery {
    _model: any;
    constructor(norm: any) {
        this.model = [{
            id: { type: Number, key: 'primary' },
            plant: { type: String, maxlength: 500 },
            color: { type: String, maxlength: 200 },
            image_url: { type: String, maxlength: 1000 },
            description: { type: String, maxlength: 2000 },
            price: { type: Number },
            quantity: { type: Number },
        }, 'A table to store car info',
        [
            {
                route: '/get-all-plants',
                method: 'POST',
                callback: this.getAllPlants,
                requireToken: true,
            },
            {
                route: '/get-plant-by-id/:id',
                method: 'POST',
                callback: this.getPlantById,
                requireToken: true,
            },
            {
              route: '/create-Plant',
              method: 'POST',
              callback: this.createPlant,
              requireToken: true,
          }, 
          {
            route: '/update-plant-id/:id',
            method: 'PUT',
            callback: this.updatePlant,
            requireToken: true,
        },
        {
            route: '/delete-plant-id/:id',
            method: 'DELETE',
            callback: this.deletePlant,
            requireToken: true,
        },
        
          
        ]];
    }
    deletePlant(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            console.log('req.body===>', req.body)
            let plantCtrl = model.controller;
            let resp = await plantCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }
    updatePlant(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            console.log('req.body===>', req.body)
            let plantCtrl = model.controller;
            let resp = await plantCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }
    createPlant(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            console.log('req.body===>', req.body)
            let plantCtrl = model.controller;
            let resp = await plantCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    getAllPlants(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ['*']
            }
            let plantCtrl = model.controller;
            let resp = await plantCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    getPlantById(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            }
            let plantCtrl = model.controller;
            let resp = await plantCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    set model(model: any) {
        this._model = model;
    }

    get model() {
        return this._model;
    }

}