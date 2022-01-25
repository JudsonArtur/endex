import { Controller, Body,Param ,Get,Post,Put,Delete, UseGuards} from '@nestjs/common';
import { RoleService } from './role.service';
import { AuthGuard } from './../auth/auth.guard';


@Controller('roles')
@UseGuards(AuthGuard)
export class RoleController {
     constructor(private roleService : RoleService){ }

    @Get()
    async all(){
        return this.roleService.paginate(1)
    }
    @Post()
    async create (@Body('name') name : string){
        return this.roleService.create({name});
    }
     
  @Get(':id')
  async get(@Param('id') id : number){
      return this.roleService.findOne(id);
  }
  @Put(':id')
  async update(@Param('id') id : number, @Body() body){    
    return this.roleService.update(id,body);
       
  }
  @Delete(':id')
  async delete(@Param('id') id :number ){
      return this.roleService.delete(id);
  }
  
}
