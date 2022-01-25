import { Injectable, } from '@nestjs/common';
import { Role } from './models/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from "typeorm";
import { AbstractService } from 'src/common/abastract.service';

@Injectable()
export class RoleService extends AbstractService {

    constructor(
        @InjectRepository(Role) private readonly roleRepository: Repository<Role>){
            super(roleRepository)
    }
  
}
