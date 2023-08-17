import {
  MiddeskCompanyIndividualInterface,
  MiddeskCompanyAddressInterface,
} from './company.interface';

export type TaxRegistrationType =
  | 'state_unemployment_insurance'
  | 'state_tax_withholdings';

export interface DynamicObject {
  [key: string]: any;
}

export interface MiddeskQuestionInterface {
  key?: string;
  value?: DynamicObject | string;
}

export interface CreateMiddeskTaxRegistrationInterface {
  email: string;
  state: string;
  tax_registration_types: TaxRegistrationType[];
  company_id?: string;
  company_name?: string;
  external_id?: string;
  questions?: MiddeskQuestionInterface;
}

export interface MiddeskTaxRegistrationItemsInterface {
  agency: string;
  label?: string;
  state?: string;
  value?: string;
  updated_at?: string;
}

export interface MiddeskTaxRegistrationResponse {
  id?: string;
  state?: string;
  company_id?: string;
  invite_link?: string;
  created_at?: string;
  submitted_at?: string;
  tax_registration_types?: TaxRegistrationType[];
  status?: string;
  items?: MiddeskTaxRegistrationItemsInterface[];
}

export interface RetrieveMiddeskTaxRegistrationInterface {
  id: string;
}

export interface RetrieveTaxRegistrationInterface {
  id: string;
}

export interface RetrieveTaxRegistrationsInterface {
  company_id: string;
}

export interface MiddeskTaxInterface {
  object: string;
  agency: string;
  id: string;
  label: string;
  value: string;
  key: string;
  status: string;
  link: string;
}

export interface MiddeskTaxAccount {
  object?: string;
  id?: string;
  agency?: string;
  agency_link?: string;
  email?: string;
  password?: string;
  state?: string;
  username?: string;
  pin?: string;
  security_questions: string[];
}

export interface MiddeskTaxData {
  object?: string;
  id?: string;
  company_id?: string;
  state?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
  legal_name?: string;
  dba_name?: string;
  contact_email?: string;
  contact_name?: string;
  contact_phone_number?: string;
  ein?: string;
  entity_type?: string;
  formation_state?: string;
  formation_date?: string;
  industry?: string;
  purpose?: string;
  naics_code?: number;
  acquired?: boolean;
  acquisition_date?: string;
  fiscal_year_end?: string;
  legal_entity_changed?: boolean;
  previous_legal_name?: string;
  employee_count?: number;
  inactive_employee_count?: string;
  completed_at?: string;
  submitted_at?: string;
  addresses?: MiddeskCompanyAddressInterface[];
  individuals?: MiddeskCompanyIndividualInterface[];
  items?: MiddeskTaxInterface[];
  tax_accounts?: MiddeskTaxAccount[];
}

export interface MiddeskTaxRegistrationResponseInterface {
  object: string;
  data: MiddeskTaxData[];
  has_more?: boolean;
  total_count?: number;
  url?: string;
}
