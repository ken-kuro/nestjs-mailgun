import FormData from 'form-data';
import { Injectable, Inject } from '@nestjs/common';
import Mailgun from 'mailgun.js';
import Client from 'mailgun.js/client';
import Options from 'mailgun.js/interfaces/Options';
import type { ValidationResult } from 'mailgun.js/interfaces/Validate';
import {
  CreateUpdateList,
  DestroyedList,
  MailingList,
} from 'mailgun.js/interfaces/lists';
import {
  MailgunMessageData,
  MessagesSendResult,
} from 'mailgun.js/interfaces/Messages';
import {
  CreateUpdateMailListMembers,
  DeletedMember,
  MailListMember,
  MailListMembersQuery,
  MailListMembersResult,
  MultipleMembersData,
  NewMultipleMembersResponse,
} from 'mailgun.js/interfaces/mailListMembers';
import type APIError from 'mailgun.js/error';
import { MAILGUN_CONFIGURATION } from './constants';
import {
  DomainTemplateData, DomainTemplatesQuery, ListDomainTemplatesResult,
  TemplateQuery,
  UpdateOrDeleteDomainTemplateResult
} from 'mailgun.js/interfaces/DomainTemplates';
import {DomainTemplateItem} from "mailgun.js/domainsTemplates";

export type MailgunError = APIError;

@Injectable()
export class MailgunService {
  private readonly mailgun: Client;

  constructor(
    @Inject(MAILGUN_CONFIGURATION) private readonly configuration: Options,
  ) {
    this.mailgun = new Mailgun(FormData).client(configuration);
  }

  public createEmail = async (
    domain: string,
    data: MailgunMessageData,
  ): Promise<MessagesSendResult> => this.mailgun.messages.create(domain, data);

  public validateEmail = async (email: string): Promise<ValidationResult> =>
    this.mailgun.validate.get(email);

  public createList = async (data: CreateUpdateList): Promise<MailingList> =>
    this.mailgun.lists.create(data);

  public destroyList = async (
    mailListAddress: string,
  ): Promise<DestroyedList> => this.mailgun.lists.destroy(mailListAddress);

  public getList = async (mailListAddress: string): Promise<MailingList> =>
    this.mailgun.lists.get(mailListAddress);

  public updateList = async (
    mailListAddress: string,
    data: CreateUpdateList,
  ): Promise<MailingList> => this.mailgun.lists.update(mailListAddress, data);

  public listAddMember = async (
    mailListAddress: string,
    data: CreateUpdateMailListMembers,
  ): Promise<MailListMember> =>
    this.mailgun.lists.members.createMember(mailListAddress, data);

  public listGetMembers = async (
    mailListAddress: string,
    query?: MailListMembersQuery,
  ): Promise<MailListMembersResult> =>
    this.mailgun.lists.members.listMembers(mailListAddress, query);

  public listCreateMembers = async (
    mailListAddress: string,
    data: MultipleMembersData,
  ): Promise<NewMultipleMembersResponse> =>
    this.mailgun.lists.members.createMembers(mailListAddress, data);

  public listUpdateMember = async (
    address: string,
    memberAddress: string,
    data: CreateUpdateMailListMembers,
  ): Promise<MailListMember> =>
    this.mailgun.lists.members.updateMember(address, memberAddress, data);

  public listDestroyMember = async (
    address: string,
    memberAddress: string,
  ): Promise<DeletedMember> =>
    this.mailgun.lists.members.destroyMember(address, memberAddress);

  public createTemplate = async (
      domain: string,
      data: DomainTemplateData,
  ): Promise<DomainTemplateItem> =>
      this.mailgun.domains.domainTemplates.create(domain, data);

  public getTemplate = async (
      domain: string,
      templateName: string,
      query?: TemplateQuery,
  ): Promise<DomainTemplateItem> =>
      this.mailgun.domains.domainTemplates.get(domain, templateName, query);

  public updateTemplate = async (
      domain: string,
      templateName: string,
      data: DomainTemplateData,
  ): Promise<UpdateOrDeleteDomainTemplateResult> =>
      this.mailgun.domains.domainTemplates.update(domain, templateName, data);

  public deleteTemplate = async (
      domain: string,
      templateName: string,
  ): Promise<UpdateOrDeleteDomainTemplateResult> =>
      this.mailgun.domains.domainTemplates.destroy(domain, templateName);

  public listTemplate = async (
      domain: string,
      query: DomainTemplatesQuery,
  ): Promise<ListDomainTemplatesResult> =>
      this.mailgun.domains.domainTemplates.list(domain, query);
}
