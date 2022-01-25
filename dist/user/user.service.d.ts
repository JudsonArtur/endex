import { User } from './models/user.entity';
import { Repository } from "typeorm";
import { AbstractService } from 'src/common/abastract.service';
import { PaginatedResult } from 'src/common/paginated-result.interface';
export declare class UserService extends AbstractService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    paginate(page?: number, relations?: any[]): Promise<PaginatedResult>;
}
