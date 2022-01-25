import { RoleService } from './role.service';
export declare class RoleController {
    private roleService;
    constructor(roleService: RoleService);
    all(): Promise<import("../common/paginated-result.interface").PaginatedResult>;
    create(name: string): Promise<any>;
    get(id: number): Promise<any>;
    update(id: number, body: any): Promise<any>;
    delete(id: number): Promise<any>;
}
