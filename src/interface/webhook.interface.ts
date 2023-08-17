export interface CreateMiddeskWebhookInterface {
  url: string;

  secret?: string;

  oauth_client_id?: string;

  enabled_events?: string[];
}

export interface CreateMiddeskWebhookResponseInterface {
  object: string;

  id: string;

  url: string;

  secret: string;

  enabled_events: string[];

  created_at: string;

  updated_at: string;

  disabled_at: string;

  oauth_client_id: string;
}

export interface RetrieveMiddeskWebhookInterface {
  id: string;
}

export interface UpdateMiddeskWebhookInterface {
  id?: string;
  data: Partial<CreateMiddeskWebhookInterface>;
}

export interface ListMiddeskWebhookInterface {
  oauth_client_id?: string;
}
