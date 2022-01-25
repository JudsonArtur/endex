import { Injectable } from '@nestjs/common';
import { Posts } from './models/post.entity';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractService } from 'src/common/abastract.service';
import { PaginatedResult } from 'src/common/paginated-result.interface';

@Injectable()
export class PostService extends AbstractService{
    constructor(
        @InjectRepository(Posts) private readonly postRepository: Repository<Posts>){
            super(postRepository);
    }

    async paginateByRole(page = 1, relations=[],role_id):Promise<PaginatedResult>{
        const take = 15;
        const [data,total] = await this.postRepository.findAndCount({
            take,skip:(page - 1 ) * take,
            relations,
            where:{
                role:role_id
            }
        });
        return {
            data:data,
            meta:{
                total, page,last_page:Math.ceil(total/take)
            }
        }
    }
    async paginateByUser(page = 1, relations=[],user_id):Promise<PaginatedResult>{
        const take = 15;
        const [data,total] = await this.postRepository.findAndCount({
            take,skip:(page - 1 ) * take,
            relations,
            where:{
                user:user_id
            }
        });
        return {
            data:data,
            meta:{
                total, page,last_page:Math.ceil(total/take)
            }
        }
    }
    
}
