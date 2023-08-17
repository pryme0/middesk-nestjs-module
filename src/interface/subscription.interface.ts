export interface CreateSubscriptionInterface {
  event_types: string[];
}

export interface EventTypeResponse {
  type: string;
  status: string;
}

export interface CreateSubscriptionResponse {
  object: string;
  id: string;
  created_at: string;
  event_types: EventTypeResponse[];
}

export interface RetrieveSubscriptionInterface {
  id: string;
}

export interface UpdateSubscriptionInterface {
  id: string;
  data: CreateSubscriptionInterface;
}
