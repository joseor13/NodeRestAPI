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
                image_url: { type: String, maxlength: 10000 },
                first_name: { type: String, maxlength: 100 },
                last_name: { type: String, maxlength: 100 },
                email: { type: String, maxlength: 100 },
                password: { type: String, maxlength: 1000 },
                city: { type: String, maxlength: 100 },
                job: { type: String, maxlength: 100 },
                experience: { type: String, maxlength: 1000 },
                certifications: { type: String, maxlength: 1000 },
                education: { type: String, maxlength: 1000 },
                industry: { type: String, maxlength: 1000 },
                interests: { type: String, maxlength: 1000 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store users information model',
            [
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
    // delete a user information by their id
    deleteUserinfo(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let userinfoCtrl = model.controller;
            let resp = yield userinfoCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    // update the users information
    updateUserinfo(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let userinfoCtrl = model.controller;
            let resp = yield userinfoCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    // create a new user
    createUserinfo(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let userinfoCtrl = model.controller;
            let resp = yield userinfoCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    // get all user information
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
    // get a user information by id
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
