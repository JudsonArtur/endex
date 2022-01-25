import { Posts } from './models/post.entity';
import { Repository } from 'typeorm';
import { AbstractService } from 'src/common/abastract.service';
import { PaginatedResult } from 'src/common/paginated-result.interface';
export declare class PostService extends AbstractService {
    private readonly postRepository;
    constructor(postRepository: Repository<Posts>);
    paginateByRole(page: number, relations: any[], role_id: any): Promise<PaginatedResult>;
    paginateByUser(page: number, relations: any[], user_id: any): Promise<PaginatedResult>;
}
