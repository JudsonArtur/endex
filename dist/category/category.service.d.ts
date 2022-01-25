import { Category } from './models/category.entity';
import { Repository } from 'typeorm';
import { AbstractService } from 'src/common/abastract.service';
export declare class CategoryService extends AbstractService {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
}
