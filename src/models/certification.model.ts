import { Request, Response, NextFunction } from 'express';

export class Certification {
    _model: any;
    constructor(norm: any) {
        this.model = [{
            id: { type: Number, key: 'primary' },
            cert_name: { type: String, maxlength: 500 },
            description: { type: String, maxlength: 1000 },
            validity: { type: String, maxlength: 24 },
            resources_id: {
                type: Number,
                key: 'foreign',
                references: { table: 'Resources', foreignKey: 'id' },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            },
            certtype_id: {
                type: Number,
                key: 'foreign',
                references: { table: 'Certtype', foreignKey: 'id' },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            },
        }, 'A table to store certification model',
        [
            {
                route: '/get-all-certification',
                method: 'POST',
                callback: this.getAllCertification,
                requireToken: true,
            },
            {
                route: '/get-certification-by-id/:id',
                method: 'POST',
                callback: this.getCertificationById,
                requireToken: true,
            },
            {
                route: '/create-certification',
                method: 'POST',
                callback: this.createCertification,
                requireToken: true,
            },
            {
                route: '/update-certification-id/:id',
                method: 'PUT',
                callback: this.updateCertification,
                requireToken: true,
            },
            {
                route: '/delete-certification-id/:id',
                method: 'DELETE',
                callback: this.deleteCertification,
                requireToken: true,
            },
        ]];
    }
    // delete a certification by id
    deleteCertification(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let certificationCtrl = model.controller;
            let resp = await certificationCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }
    // update the certifications
    updateCertification(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let certificationCtrl = model.controller;
            let resp = await certificationCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }
    createCertification(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let certificationCtrl = model.controller;
            let resp = await certificationCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }
    
      //get all the certifications
 
    getAllCertification(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ['*']
            }
            let certificationCtrl = model.controller;
            let resp = await certificationCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }
   // get all certifications by Id

    getCertificationById(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            }
            let certificationCtrl = model.controller;
            let resp = await certificationCtrl.get(req, null, null);
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