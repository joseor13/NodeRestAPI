import { Request, Response, NextFunction } from 'express';

export class Resources {
    _model: any;
    constructor(norm: any) {
      this.model = [{
        id: { type: Number, key: 'primary' },
        resource_name: { type: String, maxlength: 100 },
        resource_link: { type: String, maxlength: 500 },
        
      }, 'A table to store sources model', [
        {
          route: '/get-all-resource',
          method: 'POST',
          callback: this.getAllResource,
          requireToken: true,
      },
      {
          route: '/get-resource-by-id/:id',
          method: 'POST',
          callback: this.getResourceById,
          requireToken: true,
      },
      {
          route: '/create-resource',
          method: 'POST',
          callback: this.createResource,
          requireToken: true,
      },
      {
          route: '/update-resource-id/:id',
          method: 'PUT',
          callback: this.updateResource,
          requireToken: true,
      },
      {
          route: '/delete-resource-id/:id',
          method: 'DELETE',
          callback: this.deleteResource,
          requireToken: true,
      },
  ]];
}
deleteResource(model: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
      let resourceCtrl = model.controller;
      let resp = await resourceCtrl.remove(req, null, null);
      res.json({ message: 'Success', resp });
  }
}
updateResource(model: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
      let resourceCtrl = model.controller;
      let resp = await resourceCtrl.update(req, null, null);
      res.json({ message: 'Success', resp });
  }
}
createResource(model: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
      let resourceCtrl = model.controller;
      let resp = await resourceCtrl.insert(req, null, null);
      res.json({ message: 'Success', resp });
  }
}

getAllResource(model: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
          get: ['*']
      }
      let resourceCtrl = model.controller;
      let resp = await resourceCtrl.get(req, null, null);
      res.json({ message: 'Success', resp });
  }
}

getResourceById(model: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
          get: ['*'],
          where: {
              id: req.params.id
          }
      }
      let resourceCtrl = model.controller;
      let resp = await resourceCtrl.get(req, null, null);
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