import { PostCreateDto } from './models/post-create.dto';
import { UpdatePostDto } from './models/post-update.dto';
import { Posts } from './models/post.entity';
import { PostService } from './post.service';
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    all(page: number, relations: []): Promise<import("../common/paginated-result.interface").PaginatedResult>;
    allByRole(page: number, relations: [], roleId: number): Promise<import("../common/paginated-result.interface").PaginatedResult>;
    allByUser(page: number, relations: [], user_id: number): Promise<import("../common/paginated-result.interface").PaginatedResult>;
    create(body: PostCreateDto): Promise<Posts>;
    get(id: number): Promise<any>;
    update(id: number, body: UpdatePostDto): Promise<any>;
    delete(id: number): Promise<any>;
}
