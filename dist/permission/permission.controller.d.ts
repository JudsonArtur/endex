import { PermissionService } from './permission.service';
export declare class PermissionController {
    private readonly premissionService;
    constructor(premissionService: PermissionService);
    all(): Promise<any[]>;
    create(name: string): Promise<any>;
    get(id: number): Promise<any>;
    update(id: number, body: any): Promise<any>;
    delete(id: number): Promise<any>;
}
