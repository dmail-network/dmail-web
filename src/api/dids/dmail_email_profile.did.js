export const idlFactory = ({ IDL }) => {
  const Profile = IDL.Record({ 'desc' : IDL.Text, 'avatar' : IDL.Text });
  const ApiError = IDL.Variant({
    'Unauthorized' : IDL.Null,
    'Other' : IDL.Text,
  });
  return IDL.Service({
    'create_update_Profile' : IDL.Func(
        [IDL.Principal, Profile],
        [IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : ApiError })],
        [],
      ),
    'query_profile_by_pid' : IDL.Func(
        [IDL.Principal],
        [IDL.Variant({ 'Ok' : IDL.Opt(Profile), 'Err' : ApiError })],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
