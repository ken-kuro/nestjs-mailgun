export { MailgunModule } from './mailgun.module';
export { OptionsAsync } from './interfaces';
export { MailgunService, MailgunError } from './mailgun.service';
export { MailgunMessageData, MessagesSendResult } from 'mailgun.js';
export { default as APIResponse } from 'mailgun.js';
export { default as APIErrorOptions } from 'mailgun.js';
export {
  DomainTemplateData,
  DomainTemplatesQuery,
  ListDomainTemplatesResult,
  TemplateQuery,
  UpdateOrDeleteDomainTemplateResult,
} from 'mailgun.js';
export {
  CreateUpdateMailListMembers,
  DeletedMember,
  MailListMember,
  MailListMembersQuery,
  MailListMembersResult,
  MultipleMembersData,
  NewMultipleMembersResponse,
} from 'mailgun.js';
