import { Controller,Get,Post,Body,Param,Put,Delete} from '@nestjs/common';
import { PermissionService } from './permission.service';

@Controller('permissions')
export class PermissionController {
     constructor(private readonly premissionService : PermissionService){}

    @Get()
    async all(){
        return this.premissionService.all()
    }
    @Post()
    async create (@Body('name') name : string){
        return this.premissionService.create({name});
    }
     
  @Get(':id')
  async get(@Param('id') id : number){
      return this.premissionService.findOne({id});
  }
  @Put(':id')
  async update(@Param('id') id : number, @Body() body){    
      return this.premissionService.update(id,body);
  }
  @Delete(':id')
  async delete(@Param('id') id :number ){
      return this.premissionService.delete(id);
  }
  
}
