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
class Certification {
    constructor(norm) {
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
    deleteCertification(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let certificationCtrl = model.controller;
            let resp = yield certificationCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    updateCertification(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let certificationCtrl = model.controller;
            let resp = yield certificationCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    createCertification(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let certificationCtrl = model.controller;
            let resp = yield certificationCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getAllCertification(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*']
            };
            let certificationCtrl = model.controller;
            let resp = yield certificationCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getCertificationById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            };
            let certificationCtrl = model.controller;
            let resp = yield certificationCtrl.get(req, null, null);
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
exports.Certification = Certification;
