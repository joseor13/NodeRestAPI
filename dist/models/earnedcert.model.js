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
class Earnedcert {
    constructor(norm) {
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
    deleteEarnedcert(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let earnedcertCtrl = model.controller;
            let resp = yield earnedcertCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    updateEarnedcert(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let earnedcertCtrl = model.controller;
            let resp = yield earnedcertCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    createEarnedcert(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let earnedcertCtrl = model.controller;
            let resp = yield earnedcertCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getAllEarnedcert(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*']
            };
            let earnedcertCtrl = model.controller;
            let resp = yield earnedcertCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getEarnedcertById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            };
            let earnedcertCtrl = model.controller;
            let resp = yield earnedcertCtrl.get(req, null, null);
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
exports.Earnedcert = Earnedcert;
