import { HttpService } from '@nestjs/axios';
import { MiddeskCompanyInterface, RetrieveMiddeskCompanyInterface, UpdateMiddeskCompanyInterface } from './interface';
export declare class CompanyManager {
    private readonly httpService;
    constructor(httpService: HttpService);
    createCompany(payload: MiddeskCompanyInterface): Promise<MiddeskCompanyInterface>;
    retrieveCompany(payload: RetrieveMiddeskCompanyInterface): Promise<MiddeskCompanyInterface>;
    updateCompany(payload: UpdateMiddeskCompanyInterface): Promise<MiddeskCompanyInterface>;
    listAllCompanies(): Promise<MiddeskCompanyInterface[]>;
}
