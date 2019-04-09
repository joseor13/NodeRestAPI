import { Request, Response, NextFunction } from 'express';

export class Certtype {
    _model: any;
    constructor(norm: any) {
      this.model = [{
        id: { type: Number, key: 'primary' },
        type_field: { type: String, maxlength: 100 },
      }, 'A table to store certifications types model', 
      [
        {
          route: '/get-all-certype',
          method: 'POST',
          callback: this.getAllCertype,
          requireToken: true,
      },
      {
          route: '/get-certype-by-id/:id',
          method: 'POST',
          callback: this.getCertypeById,
          requireToken: true,
      },
      {
          route: '/create-certype',
          method: 'POST',
          callback: this.createCertype,
          requireToken: true,
      },
      {
          route: '/update-certype-id/:id',
          method: 'PUT',
          callback: this.updateCertype,
          requireToken: true,
      },
      {
          route: '/delete-certype-id/:id',
          method: 'DELETE',
          callback: this.deleteCertype,
          requireToken: true,
      },
  ]];
}
deleteCertype(model: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
      let certypeCtrl = model.controller;
      let resp = await certypeCtrl.remove(req, null, null);
      res.json({ message: 'Success', resp });
  }
}
updateCertype(model: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
      let certypeCtrl = model.controller;
      let resp = await certypeCtrl.update(req, null, null);
      res.json({ message: 'Success', resp });
  }
}
createCertype(model: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
      let certypeCtrl = model.controller;
      let resp = await certypeCtrl.insert(req, null, null);
      res.json({ message: 'Success', resp });
  }
}
// get all certifications types
getAllCertype(model: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
          get: ['*']
      }
      let certypeCtrl = model.controller;
      let resp = await certypeCtrl.get(req, null, null);
      res.json({ message: 'Success', resp });
  }
}
// get all certifications types bi id
getCertypeById(model: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
          get: ['*'],
          where: {
              id: req.params.id
          }
      }
      let certypeCtrl = model.controller;
      let resp = await certypeCtrl.get(req, null, null);
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