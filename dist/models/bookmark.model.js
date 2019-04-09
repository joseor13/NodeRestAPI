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
class Bookmark {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                bookmark_name: { type: String, maxlenght: 1000 },
                bookmark_date: { type: Date },
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
    deleteBookmark(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let bookmarkCtrl = model.controller;
            let resp = yield bookmarkCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    updateBookmark(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let bookmarkCtrl = model.controller;
            let resp = yield bookmarkCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    createBookmark(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let bookmarkCtrl = model.controller;
            let resp = yield bookmarkCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getAllBookmark(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*']
            };
            let bookmarkCtrl = model.controller;
            let resp = yield bookmarkCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getBookmarkById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            };
            let bookmarkCtrl = model.controller;
            let resp = yield bookmarkCtrl.get(req, null, null);
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
exports.Bookmark = Bookmark;
