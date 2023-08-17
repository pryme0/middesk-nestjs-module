import { HttpService } from '@nestjs/axios';
import { CreateMiddeskBusinessBatchInterface, CreateMiddeskBusinessInterface, CreateMiddeskBusinessResponseInterface, MiddeskWebsiteResponseInterface, RetrieveMiddeskBusinessInterface, UpdateMiddeskBusinessInterface, VerifyBusinessTinInterface, VerifyBusinessTinResponse, TerminateBusinessLienInterface, BusinessLienResponse, CreateBusinessLienInterface, CreateMiddeskOrderInterface, OrderResponseInterface, GetMiddeskOrderInterface, CreateKycOnlyBusinessInterface, RetrievePolicyResponse, TinAvailabilityResponse, UpdateIpAllowListInterface } from './interface';
export declare class BusinessManger {
    private readonly httpService;
    constructor(httpService: HttpService);
    createBusiness(payload: CreateMiddeskBusinessInterface): Promise<CreateMiddeskBusinessResponseInterface>;
    retrieveBusiness(payload: RetrieveMiddeskBusinessInterface): Promise<CreateMiddeskBusinessResponseInterface>;
    listBusinesses(): Promise<CreateMiddeskBusinessResponseInterface[]>;
    updateBusiness(payload: UpdateMiddeskBusinessInterface): Promise<any>;
    listBusinessBatches(): Promise<CreateMiddeskBusinessResponseInterface[]>;
    createBusinessBatches(payload: CreateMiddeskBusinessBatchInterface): Promise<CreateMiddeskBusinessResponseInterface[]>;
    retrieveBusinessBatch(payload: RetrieveMiddeskBusinessInterface): Promise<any>;
    verifyTin(payload: VerifyBusinessTinInterface): Promise<VerifyBusinessTinResponse>;
    retrieveBusinessWebsite(payload: RetrieveMiddeskBusinessInterface): Promise<MiddeskWebsiteResponseInterface>;
    createBusinessLien(payload: CreateBusinessLienInterface): Promise<BusinessLienResponse>;
    terminateLien(payload: TerminateBusinessLienInterface): Promise<BusinessLienResponse>;
    createOrder(payload: CreateMiddeskOrderInterface): Promise<OrderResponseInterface>;
    retrieveOrder(payload: GetMiddeskOrderInterface): Promise<OrderResponseInterface>;
    retrieveBusinessPdf(payload: RetrieveMiddeskBusinessInterface): Promise<any>;
    retrieveReasonsCode(): Promise<any>;
    createKycOnlyBusiness(payload: CreateKycOnlyBusinessInterface): Promise<CreateMiddeskBusinessResponseInterface>;
    retrievePolicyResult(payload: RetrieveMiddeskBusinessInterface): Promise<RetrievePolicyResponse>;
    tinAvailability(): Promise<TinAvailabilityResponse>;
    updateIpAllowList(payload: UpdateIpAllowListInterface): Promise<any>;
    retrieveIpAllowList(): Promise<any>;
}
