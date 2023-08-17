import { HttpService } from '@nestjs/axios';
import {
  CreateMiddeskTaxRegistrationInterface,
  MiddeskTaxRegistrationResponse,
  MiddeskTaxRegistrationResponseInterface,
  RetrieveMiddeskTaxRegistrationInterface,
  RetrieveTaxRegistrationsInterface,
} from './interface';
import { firstValueFrom } from 'rxjs';

export class TaxManager {
  constructor(private readonly httpService: HttpService) {}

  async createRegistration(
    payload: CreateMiddeskTaxRegistrationInterface,
  ): Promise<MiddeskTaxRegistrationResponse> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(`/partner/registration_requests`, payload),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async retrieveRegistrationRequest(
    payload: RetrieveMiddeskTaxRegistrationInterface,
  ): Promise<MiddeskTaxRegistrationResponse> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`/partner/registration_requests/${payload.id}`),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async retrieveTaxRegistration(
    payload: RetrieveMiddeskTaxRegistrationInterface,
  ): Promise<MiddeskTaxRegistrationResponseInterface> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`/agent/tax_registration/${payload.id}`),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async retrieveTaxRegistrations(
    payload: RetrieveTaxRegistrationsInterface,
  ): Promise<MiddeskTaxRegistrationResponseInterface[]> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          `/agent/tax_registration?company_id=${payload?.company_id}`,
        ),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }
}
