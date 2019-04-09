import { Request, Response, NextFunction } from 'express';

export class Earnedcert {
    _model: any;
    constructor(norm: any) {
        this.model = [{
            id: { type: Number, key: 'primary' },
            certification_id: {
                type: Number,
                key: 'foreign',
                references: { table: 'Certification', foreignKey: 'id' },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            },
            userinfo_id: {
                type: Number,
                key: 'foreign',
                references: { table: 'Userinfo', foreignKey: 'id' },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            },
        }, 'A table to store earned certifications model',
        [
            {
                route: '/get-all-earnedcert',
                method: 'POST',
                callback: this.getAllEarnedcert,
                requireToken: true,
            },
            {
                route: '/get-earnedcert-by-id/:id',
                method: 'POST',
                callback: this.getEarnedcertById,
                requireToken: true,
            },
            {
                route: '/create-earnedcert',
                method: 'POST',
                callback: this.createEarnedcert,
                requireToken: true,
            },
            {
                route: '/update-earnedcert-id/:id',
                method: 'PUT',
                callback: this.updateEarnedcert,
                requireToken: true,
            },
            {
                route: '/delete-earnedcert-id/:id',
                method: 'DELETE',
                callback: this.deleteEarnedcert,
                requireToken: true,
            },
        ]];
    }
    deleteEarnedcert(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let earnedcertCtrl = model.controller;
            let resp = await earnedcertCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }
    updateEarnedcert(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let earnedcertCtrl = model.controller;
            let resp = await earnedcertCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }
    createEarnedcert(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let earnedcertCtrl = model.controller;
            let resp = await earnedcertCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    getAllEarnedcert(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ['*']
            }
            let earnedcertCtrl = model.controller;
            let resp = await earnedcertCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    getEarnedcertById(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            }
            let earnedcertCtrl = model.controller;
            let resp = await earnedcertCtrl.get(req, null, null);
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
