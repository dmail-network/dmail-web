export const idlFactory = ({ IDL }) => {
  const EmailSessionId = IDL.Nat64;
  const BucketFile = IDL.Record({
    'canister_id' : IDL.Principal,
    'file_id' : IDL.Nat64,
  });
  const EmailBody = IDL.Record({
    'text_content' : IDL.Text,
    'attach' : IDL.Opt(IDL.Vec(BucketFile)),
  });
  const EmailHeader = IDL.Record({
    'recipient_alias' : IDL.Text,
    'subject' : IDL.Text,
    'send_time' : IDL.Nat64,
    'recipient' : IDL.Principal,
    'sender' : IDL.Principal,
    'sender_alias' : IDL.Text,
  });
  const Email = IDL.Record({
    'email_header_canister_id' : IDL.Principal,
    'level' : IDL.Nat8,
    'parent_id' : IDL.Nat64,
    'email_body' : EmailBody,
    'email_header' : EmailHeader,
    'email_id' : IDL.Nat64,
    'email_body_canister_id' : IDL.Principal,
  });
  const ApiError = IDL.Variant({
    'NotBindingEmailAlias' : IDL.Null,
    'Unauthorized' : IDL.Null,
    'Other' : IDL.Text,
  });
  const QueryWrapper = IDL.Record({
    'offset' : IDL.Nat32,
    'limit' : IDL.Nat32,
  });
  const EmailSessionInfo = IDL.Record({
    'current_canister_id' : IDL.Principal,
    'session_id' : EmailSessionId,
    'email_list' : IDL.Vec(Email),
    'canister_hash_named' : IDL.Text,
  });
  const R = IDL.Record({
    'total' : IDL.Nat64,
    'data' : IDL.Vec(EmailSessionInfo),
    'offset' : IDL.Nat32,
    'limit' : IDL.Nat32,
  });
  return IDL.Service({
    'create_update_an_email_session' : IDL.Func(
        [IDL.Opt(EmailSessionId), Email],
        [IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : ApiError })],
        [],
      ),
    'query_receive_session_by_pid' : IDL.Func(
        [IDL.Principal, QueryWrapper],
        [IDL.Variant({ 'Ok' : R, 'Err' : ApiError })],
        [],
      ),
    'query_send_session_by_pid' : IDL.Func(
        [IDL.Principal, QueryWrapper],
        [IDL.Variant({ 'Ok' : R, 'Err' : ApiError })],
        [],
      ),
    'query_session_by_id' : IDL.Func(
        [IDL.Nat64],
        [IDL.Variant({ 'Ok' : IDL.Opt(EmailSessionInfo), 'Err' : ApiError })],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
