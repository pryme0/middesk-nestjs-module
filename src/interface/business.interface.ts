import { CreateSubscriptionResponse } from './subscription.interface';

export interface MiddeskTinInterface {
  tin: string;
}

export interface MiddeskWebsiteInterface {
  url: string;
}

export interface MiddeskAddressInterface {
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  postal_code: string;
  full_address?: string;
}

export interface MiddeskPeopleInterface {
  name?: string;

  first_name?: string;

  middle_name?: string;

  last_name?: string;

  dob?: string;

  ssn?: string;

  address_line1?: string;

  address_line2?: string;

  city?: string;

  state?: string;

  postal_code?: string;

  phone_number?: string;

  email: string;

  device_session_id?: string;

  document_uuid?: string;
}

export interface MiddeskPhoneNumberInterface {
  phone_number: string;
}

export type OrderProductType =
  | 'bankruptcies'
  | 'business_verification_qualify'
  | 'business_verification_verify   '
  | 'documents'
  | 'kyc'
  | 'kyc_doc_v'
  | 'tin'
  | 'litigations'
  | 'people_bankruptcies'
  | 'ucc_liens'
  | 'website'
  | 'tax_liens';

export type SubProductType =
  | 'Articles of Incorporation'
  | 'Certificate of Good Standing'
  | 'ucc_documents'
  | 'liens';

export interface MiddeskOrdersInterface {
  product: OrderProductType;
}
export type EntityType =
  | 'CORPORATION'
  | 'LLC'
  | 'PARTNERSHIP'
  | 'NON-PROFIT'
  | 'TRUST'
  | 'SOLE PROPRIETORSHIP';

export interface MiddeskFormationInterface {
  formation_state: string;
  entity_type: EntityType;
}

export interface MiddeskBusinessNamesInterface {
  name: string;
  name_type?: EntityType;
}

export interface CreateMiddeskBusinessInterface {
  name: string;
  tin?: MiddeskTinInterface;
  addresses: MiddeskAddressInterface[];
  people?: MiddeskPeopleInterface[];
  phone_numbers?: MiddeskPhoneNumberInterface[];
  external_id?: string;
  orders?: MiddeskOrdersInterface[];
  tags?: string[];
  names?: MiddeskBusinessNamesInterface[];
  unique_external_id?: string;
}

export interface AddressSourceMetadata {
  file_number?: string;
  state?: string;
  status?: string;
}

export interface AddressSourceInterface {
  id?: string;
  type?: string;
  metadata?: AddressSourceMetadata;
}

export interface MiddeskAddressResponseInterface
  extends MiddeskAddressInterface {
  created_at: string;
  updated_at: string;
  latitude?: number;
  longitude?: number;
  property_type?: string;
  cmra?: boolean;
  deliverable?: boolean;
  sources?: AddressSourceInterface[];
}

export interface PeopleTitleResponse {
  object: string;
  title: string;
}

export interface MiddeskPeopleResponse extends MiddeskPeopleInterface {
  submitted?: boolean;
  object?: string;
  name?: string;
  titles?: PeopleTitleResponse[];
  people_bankruptcies?: string[];
}

export interface MiddeskPhoneNumberResponse {
  object: string;
  phone_number: string;
}

export interface MiddeskTaskResponse {
  category?: string;
  key?: string;
  label?: string;
  message?: string;
  name?: string;
  status?: string;
  sub_label?: string;
}

export interface MiddeskReviewResponse {
  object: string;
  id: string;
  created_at: string;
  updated_at: string;
  completed_at: string;
  tasks?: MiddeskTaskResponse[];
}

export interface MiddeskNamesResponse {
  object: string;
  id: string;
  name: string;
  submitted: boolean;
  type: string;
  business_id: string;
}

export interface RequesterInterface {
  name: string;
  id?: string;
  type?: string;
  requested_at?: string;
}

export interface MiddeskOrdersResponse {
  object: string;
  id: string;
  completed_at: string;
  created_at: string;
  product: string;
  package: string;
  requester: RequesterInterface;
  status: string;
  subproducts: string[];
  updated_at: string;
}

export interface SubmittedOrder {
  package: string;
  product: string;
}

export interface IndustryClassificationCategory {
  name?: string;
  sector?: string;
  category?: string;
  score?: number;
  high_risk?: boolean;
  naics_codes?: string[];
  sic_codes?: string[];
}

export interface WebsiteResponseInterface {
  url: string;
}

export interface MiddeskDomainRegisterInterface {
  organization: string;
  name: string;
  url: string;
}

export interface MiddeskDomainResponseInterface {
  domain?: string;
  domain_id?: string;
  creation_date?: string;
  expiration_date?: string;
  registrar?: MiddeskDomainRegisterInterface;
}

export interface MiddeskWebsitePageResponse {
  url: string;
  category?: string;
  screenshot_url?: string;
}

export interface MiddeskWebsiteResponseInterface {
  object?: string;
  id: string;
  url: string;
  status?: string;
  title?: string;
  description?: string;
  domain?: MiddeskDomainResponseInterface;
  pages?: MiddeskWebsitePageResponse[];
  created_at?: string;
  updated_at?: string;
  parked?: boolean;
  error?: string;
  business_id?: string;
  business_name_match?: boolean;
  phone_numbers?: string[];
  addresses?: MiddeskAddressResponseInterface[];
}

export interface MiddeskIndustryClassificationInterface {
  object: string;
  id: string;
  status: string;
  categories: IndustryClassificationCategory[];
  created_at: string;
  completed_at: string;
  website?: MiddeskWebsiteResponseInterface;
}

export interface MiddeskSubmittedResponse {
  object?: string;
  name?: string;
  entity_type?: EntityType;
  addresses?: MiddeskAddressResponseInterface[];
  orders?: SubmittedOrder[];
  people?: MiddeskPeopleResponse[];
  phone_numbers?: string;
  tags?: MiddeskTaskResponse;
  external_id?: string;
  tin?: MiddeskTinInterface;
  website?: MiddeskWebsiteInterface;
  assignee_id?: string;
  formation?: string;
  names?: string;
}

export interface MiddeskWatchlistResult {
  id: string;
  object: string;
  listed_at: string;
  entity_name: string;
  entity_aliases: string[];
  agency_list_url: string;
  agency_information_url: string;
}

export interface MiddeskWatchlistInterface {
  abbr?: string;
  title?: string;
  agency?: string;
  results: MiddeskWatchlistResult[];
  agency_abbr?: string;
  organization?: string;
}

export interface MiddeskBusinessDocumentResponse {
  object?: string;
  id?: string;
  document_type?: string;
  filename?: string;
  content_type?: string;
  size: number;
  download_url?: string;
  created_at?: string;
  source: AddressSourceInterface;
  filing_date?: string;
}

export interface SecuredPartiesInterface {
  name?: string;
  addresses?: MiddeskAddressResponseInterface[];
}

export interface MiddeskDebtorsInterface {
  name?: string;
}

export interface BusinessLienResponse {
  object?: string;
  id?: string;
  business_id?: string;
  type?: string;
  state?: string;
  status?: string;
  debtors: MiddeskDebtorsInterface[];
  lapse_date?: string;
  file_number?: string;
  filing_date?: string;
  updated_date?: string;
  secured_parties: SecuredPartiesInterface[];
  negative_pledge: boolean;
  source?: string;
  liability_cents: string;
  documents?: MiddeskBusinessDocumentResponse[];
  collateral?: string;
  collateral_type?: string;
}

export interface CreateMiddeskBusinessResponseInterface {
  object: string;
  id: string;
  name: string;
  external_id: string;
  unique_external_id: string;
  created_at: string;
  updated_at: string;
  status: string;
  tags: string[];
  addresses: MiddeskAddressResponseInterface[];
  people: MiddeskPeopleResponse[];
  phone_numbers: MiddeskPhoneNumberResponse[];
  website: MiddeskWebsiteResponseInterface;
  tin: MiddeskTinInterface;
  subscription: string;
  review?: MiddeskReviewResponse;
  business_batch_id?: string;
  names?: MiddeskNamesResponse[];
  order?: MiddeskOrdersResponse[];
  submitted?: MiddeskSubmittedResponse;
  industry_classification?: MiddeskIndustryClassificationInterface;
  requester?: RequesterInterface;
  watchlist?: MiddeskWatchlistInterface[];
  document?: MiddeskBusinessDocumentResponse[];
  lien?: BusinessLienResponse;
}

export interface RetrieveMiddeskBusinessInterface {
  id: string;
}

export interface UpdateMiddeskBusinessData {
  name?: string;
  tin?: MiddeskTinInterface;
  addresses?: MiddeskAddressInterface[];
  people?: MiddeskPeopleInterface[];
  phone_numbers?: MiddeskPhoneNumberInterface[];
  external_id?: string;
  status?: string;
  website?: MiddeskWebsiteInterface;
  unique_external_id?: string;
  assignee_id?: string;
}

export interface UpdateMiddeskBusinessInterface {
  id: string;
  data: UpdateMiddeskBusinessData;
}

export interface CreateMiddeskBusinessBatchInterface {
  filename: string;
  name: string;
  csv: string;
}

export interface VerifyBusinessTinInterface {
  name: string;
  tin: MiddeskTinInterface;
}

export interface VerifyBusinessTinResponse {
  object: string;
  id: string;
  name: string;
  external_id: string;
  created_at: string;
  updated_at: string;
  status: string;
  tags: string[];
  addresses: MiddeskAddressResponseInterface[];
  people: MiddeskPeopleResponse[];
  phone_numbers: MiddeskPhoneNumberInterface[];
  website: MiddeskWebsiteResponseInterface;
  tin: MiddeskTinInterface;
  subscription: CreateSubscriptionResponse;
}

export interface CreateDebtorInterface {
  addresses?: MiddeskAddressInterface[];
  organization_name?: string;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  suffix?: string;
}

export interface CreateBusinessLienData {
  state: string;
  collateral?: string;
  loan_principal_amount_cents: number;
  packet_number?: string;
  debtors?: CreateDebtorInterface[];
}

export interface CreateBusinessLienInterface {
  id: string;
  data: CreateBusinessLienData;
}

export interface TerminateBusinessLienInterface {
  id: string;
}

export interface OrderResponseInterface {
  object?: string;
  id: string;
  created_at: string;
  updated_at: string;
  completed_at?: string;
  status?: string;
  product?: string;
  package?: string;
  subproducts?: string[];
  requester?: RequesterInterface;
}

export interface CreateOrderData {
  product: OrderProductType;
  subproducts: SubProductType[];
}

export interface CreateMiddeskOrderInterface {
  id: string;
  data: CreateOrderData;
}

export interface GetMiddeskOrderInterface {
  business_id: string;
  order_id: CreateOrderData;
}

export interface CreateKycOnlyBusinessInterface {
  name: string;
  people: MiddeskPeopleInterface;
  orders: MiddeskOrdersInterface;
}

export interface PolicyDataVerificationInterface {
  match: boolean;
  status: string;
}

export interface PolicyInsightStateInterface {
  address_verification?: PolicyDataVerificationInterface;
  name?: PolicyDataVerificationInterface;
}

export interface BusinessPolicyDetails {
  insight_state?: PolicyInsightStateInterface;
  mismatched_rules: string[];
}

export interface BusinessPolicyResponse {
  object?: string;
  business_id?: string;
  details?: BusinessPolicyDetails;
  name?: string;
  matched?: string;
  policy_enabled: boolean;
  type_of?: string;
  created_at: string;
}

export interface RetrievePolicyResponse {
  object: string;
  data: BusinessPolicyResponse[];
  url?: string;
}

export interface TinAvailabilityResponse {
  available?: boolean;
}

export interface UpdateIpAllowListInterface {
  ips: string[];
}
