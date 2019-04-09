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
class Resources {
    constructor(norm) {
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
    deleteResource(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let resourceCtrl = model.controller;
            let resp = yield resourceCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    updateResource(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let resourceCtrl = model.controller;
            let resp = yield resourceCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    createResource(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let resourceCtrl = model.controller;
            let resp = yield resourceCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getAllResource(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*']
            };
            let resourceCtrl = model.controller;
            let resp = yield resourceCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getResourceById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            };
            let resourceCtrl = model.controller;
            let resp = yield resourceCtrl.get(req, null, null);
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
exports.Resources = Resources;
