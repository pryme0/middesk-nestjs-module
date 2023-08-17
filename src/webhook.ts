import { HttpService } from '@nestjs/axios';
import {
  CreateMiddeskWebhookInterface,
  CreateMiddeskWebhookResponseInterface,
  ListMiddeskWebhookInterface,
  RetrieveMiddeskWebhookInterface,
  UpdateMiddeskWebhookInterface,
} from './interface';
import { firstValueFrom } from 'rxjs';

export class WebhooksManager {
  constructor(private readonly httpService: HttpService) {}

  async createWebhook(
    payload: CreateMiddeskWebhookInterface,
  ): Promise<CreateMiddeskWebhookResponseInterface> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(`/webhooks`, payload),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async retrieveWebhook(
    payload: RetrieveMiddeskWebhookInterface,
  ): Promise<CreateMiddeskWebhookResponseInterface> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`/webhooks/${payload.id}`),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }
  async updateWebhook(
    payload: UpdateMiddeskWebhookInterface,
  ): Promise<CreateMiddeskWebhookResponseInterface> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.patch(`/webhooks/${payload.id}`, payload.data),
      );
      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }
  async listWebhook(
    payload: ListMiddeskWebhookInterface,
  ): Promise<CreateMiddeskWebhookResponseInterface[]> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          `/webhooks?oauth_client_id=${payload.oauth_client_id}`,
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
  async deleteWebhook(
    payload: RetrieveMiddeskWebhookInterface,
  ): Promise<CreateMiddeskWebhookResponseInterface> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.delete(`/webhooks/${payload.id}`),
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
