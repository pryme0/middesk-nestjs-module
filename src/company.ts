import { HttpService } from '@nestjs/axios';
import {
  MiddeskCompanyInterface,
  RetrieveMiddeskCompanyInterface,
  UpdateMiddeskCompanyInterface,
} from './interface';
import { firstValueFrom } from 'rxjs';

export class CompanyManager {
  constructor(private readonly httpService: HttpService) {}

  async createCompany(
    payload: MiddeskCompanyInterface,
  ): Promise<MiddeskCompanyInterface> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(`/agent/companies`, payload),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async retrieveCompany(
    payload: RetrieveMiddeskCompanyInterface,
  ): Promise<MiddeskCompanyInterface> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`/agent/companies/${payload.id}`),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async updateCompany(
    payload: UpdateMiddeskCompanyInterface,
  ): Promise<MiddeskCompanyInterface> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(`/agent/companies/${payload.id}`, payload.data),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async listAllCompanies(): Promise<MiddeskCompanyInterface[]> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`/agent/companies/`),
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
