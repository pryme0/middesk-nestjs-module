import { HttpService } from '@nestjs/axios';
import { CreateMiddeskTaxRegistrationInterface, MiddeskTaxRegistrationResponse, MiddeskTaxRegistrationResponseInterface, RetrieveMiddeskTaxRegistrationInterface, RetrieveTaxRegistrationsInterface } from './interface';
export declare class TaxManager {
    private readonly httpService;
    constructor(httpService: HttpService);
    createRegistration(payload: CreateMiddeskTaxRegistrationInterface): Promise<MiddeskTaxRegistrationResponse>;
    retrieveRegistrationRequest(payload: RetrieveMiddeskTaxRegistrationInterface): Promise<MiddeskTaxRegistrationResponse>;
    retrieveTaxRegistration(payload: RetrieveMiddeskTaxRegistrationInterface): Promise<MiddeskTaxRegistrationResponseInterface>;
    retrieveTaxRegistrations(payload: RetrieveTaxRegistrationsInterface): Promise<MiddeskTaxRegistrationResponseInterface[]>;
}
