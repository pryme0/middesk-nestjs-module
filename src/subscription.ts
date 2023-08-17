import { HttpService } from '@nestjs/axios';
import {
  CreateSubscriptionInterface,
  CreateSubscriptionResponse,
  RetrieveSubscriptionInterface,
  UpdateSubscriptionInterface,
} from './interface';
import { firstValueFrom } from 'rxjs';

export class SubscriptionManager {
  constructor(private readonly httpService: HttpService) {}

  async createSubscription(
    payload: CreateSubscriptionInterface,
  ): Promise<CreateSubscriptionResponse> {
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

  async retrieveSubscription(
    payload: RetrieveSubscriptionInterface,
  ): Promise<CreateSubscriptionResponse> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`/businesses/${payload.id}/subscription`),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async updateSubscription(
    payload: UpdateSubscriptionInterface,
  ): Promise<CreateSubscriptionResponse> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.patch(
          `/businesses/${payload.id}/subscription`,
          payload.data,
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

  async deleteSubscription(
    payload: RetrieveSubscriptionInterface,
  ): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.delete(`/businesses/${payload.id}/subscription`),
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
