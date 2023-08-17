import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

import {
  CreateMiddeskBusinessBatchInterface,
  CreateMiddeskBusinessInterface,
  CreateMiddeskBusinessResponseInterface,
  MiddeskWebsiteResponseInterface,
  RetrieveMiddeskBusinessInterface,
  UpdateMiddeskBusinessInterface,
  VerifyBusinessTinInterface,
  VerifyBusinessTinResponse,
  TerminateBusinessLienInterface,
  BusinessLienResponse,
  CreateBusinessLienInterface,
  CreateMiddeskOrderInterface,
  OrderResponseInterface,
  GetMiddeskOrderInterface,
  CreateKycOnlyBusinessInterface,
  RetrievePolicyResponse,
  TinAvailabilityResponse,
  UpdateIpAllowListInterface,
} from './interface';

export class BusinessManger {
  constructor(private readonly httpService: HttpService) {}

  async createBusiness(
    payload: CreateMiddeskBusinessInterface,
  ): Promise<CreateMiddeskBusinessResponseInterface> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(`/businesses`, payload),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async retrieveBusiness(
    payload: RetrieveMiddeskBusinessInterface,
  ): Promise<CreateMiddeskBusinessResponseInterface> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`/businesses/${payload.id}`),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async listBusinesses(): Promise<CreateMiddeskBusinessResponseInterface[]> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`/businesses`),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async updateBusiness(payload: UpdateMiddeskBusinessInterface) {
    try {
      const { data } = await firstValueFrom(
        this.httpService.patch(`/businesses/${payload.id}`, payload.data),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async listBusinessBatches(): Promise<
    CreateMiddeskBusinessResponseInterface[]
  > {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`/business_batches`),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async createBusinessBatches(
    payload: CreateMiddeskBusinessBatchInterface,
  ): Promise<CreateMiddeskBusinessResponseInterface[]> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(`/business_batches`, payload),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async retrieveBusinessBatch(
    payload: RetrieveMiddeskBusinessInterface,
  ): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(`/business_batches/${payload.id}/csv`, payload),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async verifyTin(
    payload: VerifyBusinessTinInterface,
  ): Promise<VerifyBusinessTinResponse> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(`/businesses?include=review`, payload),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async retrieveBusinessWebsite(
    payload: RetrieveMiddeskBusinessInterface,
  ): Promise<MiddeskWebsiteResponseInterface> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`/businesses/${payload.id}/website`),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async createBusinessLien(
    payload: CreateBusinessLienInterface,
  ): Promise<BusinessLienResponse> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(`/businesses/${payload.id}/liens`, payload.data),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async terminateLien(
    payload: TerminateBusinessLienInterface,
  ): Promise<BusinessLienResponse> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(`/liens/${payload.id}/termination`),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async createOrder(
    payload: CreateMiddeskOrderInterface,
  ): Promise<OrderResponseInterface> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(`/businesses/${payload.id}/orders`),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async retrieveOrder(
    payload: GetMiddeskOrderInterface,
  ): Promise<OrderResponseInterface> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          `/businesses/${payload.business_id}/orders/${payload.order_id}`,
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

  async retrieveBusinessPdf(
    payload: RetrieveMiddeskBusinessInterface,
  ): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`/businesses/${payload.id}/pdf`),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async retrieveReasonsCode(): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`/kyc/reason_codes`),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async createKycOnlyBusiness(
    payload: CreateKycOnlyBusinessInterface,
  ): Promise<CreateMiddeskBusinessResponseInterface> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(`/businesses?include=kyc`, payload),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async retrievePolicyResult(
    payload: RetrieveMiddeskBusinessInterface,
  ): Promise<RetrievePolicyResponse> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(`/business/${payload.id}/policy_results`),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async tinAvailability(): Promise<TinAvailabilityResponse> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(`/tin_match/availability`),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async updateIpAllowList(payload: UpdateIpAllowListInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.put(`/tin_match/availability`, payload),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async retrieveIpAllowList(): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`/ip_allow_list`),
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
