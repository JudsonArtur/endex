import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from "typeorm";
import { AbstractService } from 'src/common/abastract.service';
import { Permission } from './models/permission.entity';

@Injectable()
export class PermissionService extends AbstractService {

    constructor(@InjectRepository(Permission) private readonly permissionRepository : Repository<Permission> ){
         super(permissionRepository);
    }
}
