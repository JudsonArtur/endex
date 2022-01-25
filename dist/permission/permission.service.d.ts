import { Repository } from "typeorm";
import { AbstractService } from 'src/common/abastract.service';
import { Permission } from './models/permission.entity';
export declare class PermissionService extends AbstractService {
    private readonly permissionRepository;
    constructor(permissionRepository: Repository<Permission>);
}
