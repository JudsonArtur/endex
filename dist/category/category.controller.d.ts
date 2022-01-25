import { CategoryService } from './category.service';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    all(): Promise<import("../common/paginated-result.interface").PaginatedResult>;
    create(name: string): Promise<any>;
    get(id: number): Promise<any>;
    update(id: number, body: any): Promise<any>;
    delete(id: number): Promise<any>;
}
