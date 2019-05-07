"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Certtype {
    constructor(norm) {
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
    // delete a certification type by their id
    deleteCertype(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let certypeCtrl = model.controller;
            let resp = yield certypeCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    // update certifications type
    updateCertype(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let certypeCtrl = model.controller;
            let resp = yield certypeCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    // update the certifications types
    createCertype(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let certypeCtrl = model.controller;
            let resp = yield certypeCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    // get all certifications type
    getAllCertype(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*']
            };
            let certypeCtrl = model.controller;
            let resp = yield certypeCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    // get all certifications types bi id
    getCertypeById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            };
            let certypeCtrl = model.controller;
            let resp = yield certypeCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Certtype = Certtype;
