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
class Nursery {
    constructor(norm) {
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
    deletePlant(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body===>', req.body);
            let plantCtrl = model.controller;
            let resp = yield plantCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    updatePlant(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body===>', req.body);
            let plantCtrl = model.controller;
            let resp = yield plantCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    createPlant(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body===>', req.body);
            let plantCtrl = model.controller;
            let resp = yield plantCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getAllPlants(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*']
            };
            let plantCtrl = model.controller;
            let resp = yield plantCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getPlantById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            };
            let plantCtrl = model.controller;
            let resp = yield plantCtrl.get(req, null, null);
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
exports.Nursery = Nursery;
