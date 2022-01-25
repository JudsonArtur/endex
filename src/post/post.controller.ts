import { Controller,Query,Get,Post,Body, Param,Put,Delete } from '@nestjs/common';
import { PostCreateDto } from './models/post-create.dto';
import { UpdatePostDto } from './models/post-update.dto';
import { Posts } from './models/post.entity';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {    

    constructor(private postService:PostService){}
    @Get()
    async all(@Query('page') page = 1, relations : []){
        return this.postService.paginate(page,['role']);
    }
    @Get('role/:role_id')
    async allByRole(@Query('page') page = 1, relations : [],@Param('role_id') roleId : number){
        return this.postService.paginateByRole(page,['role','category','user'],roleId);
    }

    @Get('user/:user_id')
      async allByUser(@Query('page') page = 1, relations : [],@Param('user_id') user_id: number){
        return this.postService.paginateByUser(page,['role','category','user'],user_id);
    }
    @Post()
      async create(@Body() body: PostCreateDto):Promise<Posts>{
          const {role_id,category,author,...data} = body;
          return this.postService.create(
            {...data,role:{id:body.role_id},category:{id:body.category},user:{id:body.author}}
          );
    }
    @Get(':id')
      async get(@Param('id') id : number){
        return this.postService.findOne({id},['role','category','user']);
    }
    @Put(':id')
      async update(@Param('id') id : number, @Body() body : UpdatePostDto){
          const {role_id,category,author,...data} = body;
          await this.postService.update(id,{...data,
              role:{id:role_id},user:{id:author},category:{id:category}
          });
      return this.postService.findOne({id});
    }
    @Delete(':id')
      async delete(@Param('id') id :number ){
        return this.postService.delete(id);
    }
}