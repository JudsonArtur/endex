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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const post_entity_1 = require("./models/post.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const abastract_service_1 = require("../common/abastract.service");
let PostService = class PostService extends abastract_service_1.AbstractService {
    constructor(postRepository) {
        super(postRepository);
        this.postRepository = postRepository;
    }
    async paginateByRole(page = 1, relations = [], role_id) {
        const take = 15;
        const [data, total] = await this.postRepository.findAndCount({
            take, skip: (page - 1) * take,
            relations,
            where: {
                role: role_id
            }
        });
        return {
            data: data,
            meta: {
                total, page, last_page: Math.ceil(total / take)
            }
        };
    }
    async paginateByUser(page = 1, relations = [], user_id) {
        const take = 15;
        const [data, total] = await this.postRepository.findAndCount({
            take, skip: (page - 1) * take,
            relations,
            where: {
                user: user_id
            }
        });
        return {
            data: data,
            meta: {
                total, page, last_page: Math.ceil(total / take)
            }
        };
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Posts)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map