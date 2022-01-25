"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const post_create_dto_1 = require("./models/post-create.dto");
const post_update_dto_1 = require("./models/post-update.dto");
const post_service_1 = require("./post.service");
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    async all(page = 1, relations) {
        return this.postService.paginate(page, ['role']);
    }
    async allByRole(page = 1, relations, roleId) {
        return this.postService.paginateByRole(page, ['role', 'category', 'user'], roleId);
    }
    async allByUser(page = 1, relations, user_id) {
        return this.postService.paginateByUser(page, ['role', 'category', 'user'], user_id);
    }
    async create(body) {
        const { role_id, category, author } = body, data = __rest(body, ["role_id", "category", "author"]);
        return this.postService.create(Object.assign(Object.assign({}, data), { role: { id: body.role_id }, category: { id: body.category }, user: { id: body.author } }));
    }
    async get(id) {
        return this.postService.findOne({ id }, ['role', 'category', 'user']);
    }
    async update(id, body) {
        const { role_id, category, author } = body, data = __rest(body, ["role_id", "category", "author"]);
        await this.postService.update(id, Object.assign(Object.assign({}, data), { role: { id: role_id }, user: { id: author }, category: { id: category } }));
        return this.postService.findOne({ id });
    }
    async delete(id) {
        return this.postService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "all", null);
__decorate([
    (0, common_1.Get)('role/:role_id'),
    __param(0, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Param)('role_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array, Number]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "allByRole", null);
__decorate([
    (0, common_1.Get)('user/:user_id'),
    __param(0, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Param)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array, Number]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "allByUser", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_create_dto_1.PostCreateDto]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "get", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, post_update_dto_1.UpdatePostDto]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "delete", null);
PostController = __decorate([
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map