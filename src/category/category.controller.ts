import { Controller, Body,Param ,Get,Post,Put,Delete, UseGuards} from '@nestjs/common';
import { AuthGuard } from './../auth/auth.guard';
import { CategoryService } from './category.service';

@Controller('categories')
@UseGuards(AuthGuard)
export class CategoryController {

    constructor(private categoryService: CategoryService){ }

 @Get()
    async all(){
        return this.categoryService.paginate(1)
    }
    @Post()
    async create (@Body('name') name : string){
        return this.categoryService.create({name});
    }
     
  @Get(':id')
  async get(@Param('id') id : number){
      return this.categoryService.findOne(id);
  }
  @Put(':id')
  async update(@Param('id') id : number, @Body() body){    
      return this.categoryService.update(id,body);
  }
  @Delete(':id')
  async delete(@Param('id') id :number ){
      return this.categoryService.delete(id);
  }
  
}
