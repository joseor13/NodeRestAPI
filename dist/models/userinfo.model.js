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
class Userinfo {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                first_name: { type: String, maxlength: 100 },
                last_name: { type: String, maxlength: 100 },
                email: { type: String, maxlength: 100 },
                password: { type: String, maxlength: 1000 },
                city: { type: String, maxlength: 100 },
                job: { type: String, maxlength: 100 },
                experience: { type: String, maxlength: 1000 },
                education: { type: String, maxlength: 1000 },
                industry: { type: String, maxlength: 1000 },
                interests: { type: String, maxlength: 1000 },
            }, 'A table to store users information model', [
                {
                    route: '/get-all-userinfo',
                    method: 'POST',
                    callback: this.getAllUserinfo,
                    requireToken: true,
                },
                {
                    route: '/get-userinfo-by-id/:id',
                    method: 'POST',
                    callback: this.getUserinfoById,
                    requireToken: true,
                },
                {
                    route: '/create-userinfo',
                    method: 'POST',
                    callback: this.createUserinfo,
                    requireToken: true,
                },
                {
                    route: '/update-userinfo-id/:id',
                    method: 'PUT',
                    callback: this.updateUserinfo,
                    requireToken: true,
                },
                {
                    route: '/delete-userinfo-id/:id',
                    method: 'DELETE',
                    callback: this.deleteUserinfo,
                    requireToken: true,
                },
            ]];
    }
    deleteUserinfo(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let userinfoCtrl = model.controller;
            let resp = yield userinfoCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    // update the user information
    updateUserinfo(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let userinfoCtrl = model.controller;
            let resp = yield userinfoCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    createUserinfo(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let userinfoCtrl = model.controller;
            let resp = yield userinfoCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    // get all users infomation
    getAllUserinfo(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*']
            };
            let userinfoCtrl = model.controller;
            let resp = yield userinfoCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    // get all users infomarion by their id
    getUserinfoById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            };
            let userinfoCtrl = model.controller;
            let resp = yield userinfoCtrl.get(req, null, null);
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
exports.Userinfo = Userinfo;
