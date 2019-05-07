import { Request, Response, NextFunction } from 'express';

export class Bookmark {
    _model: any;
    constructor(norm: any) {
      this.model = [{
        id: { type: Number, key: 'primary' },
        bookmark_name: { type: String, maxlength: 2000 },
        bookmark_date: { type: Date},
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
      }, 'A table to store bookmark model', [
        {
            route: '/get-all-bookmark',
            method: 'POST',
            callback: this.getAllBookmark,
            requireToken: true,
        },
        {
            route: '/get-bookmark-by-id/:id',
            method: 'POST',
            callback: this.getBookmarkById,
            requireToken: true,
        },
        {
            route: '/create-bookmark',
            method: 'POST',
            callback: this.createBookmark,
            requireToken: true,
        },
        {
            route: '/update-bookmark-id/:id',
            method: 'PUT',
            callback: this.updateBookmark,
            requireToken: true,
        },
        {
            route: '/delete-bookmark-id/:id',
            method: 'DELETE',
            callback: this.deleteBookmark,
            requireToken: true,
        },
    ]];
}
deleteBookmark(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        let bookmarkCtrl = model.controller;
        let resp = await bookmarkCtrl.remove(req, null, null);
        res.json({ message: 'Success', resp });
    }
}
updateBookmark(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        let bookmarkCtrl = model.controller;
        let resp = await bookmarkCtrl.update(req, null, null);
        res.json({ message: 'Success', resp });
    }
}
createBookmark(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        let bookmarkCtrl = model.controller;
        let resp = await bookmarkCtrl.insert(req, null, null);
        res.json({ message: 'Success', resp });
    }
}

getAllBookmark(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        req.body = {
            get: ['*']
        }
        let bookmarkCtrl = model.controller;
        let resp = await bookmarkCtrl.get(req, null, null);
        res.json({ message: 'Success', resp });
    }
}

getBookmarkById(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        req.body = {
            get: ['*'],
            where: {
                id: req.params.id
            }
        }
        let bookmarkCtrl = model.controller;
        let resp = await bookmarkCtrl.get(req, null, null);
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