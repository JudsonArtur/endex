import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './models/category.entity';
import { Repository } from 'typeorm';
import { AbstractService } from 'src/common/abastract.service';

@Injectable()
export class CategoryService extends AbstractService {

    constructor(@InjectRepository(Category) private readonly categoryRepository: Repository<Category>){
                super(categoryRepository);
    }
}
