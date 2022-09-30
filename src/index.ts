export {MailgunModule} from './mailgun.module';
export {OptionsAsync} from './interfaces';
export {MailgunService, MailgunError} from './mailgun.service';
export {
    MailgunMessageData,
    MessagesSendResult,
} from 'mailgun.js/interfaces/Messages';
export {
    DomainTemplateData, DomainTemplatesQuery, ListDomainTemplatesResult,
    TemplateQuery,
    UpdateOrDeleteDomainTemplateResult
} from 'mailgun.js/interfaces/DomainTemplates';
export enum YesNo {
    YES = 'yes',
    NO = 'no',
}
export {
    CreateUpdateMailListMembers,
    DeletedMember,
    MailListMember,
    MailListMembersQuery,
    MailListMembersResult,
    MultipleMembersData,
    NewMultipleMembersResponse,
} from 'mailgun.js/interfaces/mailListMembers';
export {default as APIResponse} from 'mailgun.js/interfaces/ApiResponse';
export {default as APIErrorOptions} from 'mailgun.js/interfaces/APIErrorOptions';
