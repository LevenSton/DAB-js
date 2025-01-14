export default ({ IDL }) => {
  const InitArgs = IDL.Record({
    'logo' : IDL.Opt(IDL.Text),
    'name' : IDL.Opt(IDL.Text),
    'custodians' : IDL.Opt(IDL.Vec(IDL.Principal)),
    'symbol' : IDL.Opt(IDL.Text),
  });
  const NftError = IDL.Variant({
    'SelfTransfer' : IDL.Null,
    'TokenNotFound' : IDL.Null,
    'TxNotFound' : IDL.Null,
    'BurnedNFT' : IDL.Null,
    'SelfApprove' : IDL.Null,
    'OperatorNotFound' : IDL.Null,
    'Unauthorized' : IDL.Null,
    'ExistedNFT' : IDL.Null,
    'OwnerNotFound' : IDL.Null,
    'Other' : IDL.Text,
  });
  const Result = IDL.Variant({ 'Ok' : IDL.Nat, 'Err' : NftError });
  const Result_1 = IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : NftError });
  const Metadata = IDL.Record({
    'logo' : IDL.Opt(IDL.Text),
    'name' : IDL.Opt(IDL.Text),
    'created_at' : IDL.Nat64,
    'upgraded_at' : IDL.Nat64,
    'custodians' : IDL.Vec(IDL.Principal),
    'symbol' : IDL.Opt(IDL.Text),
  });
  const GenericValue = IDL.Variant({
    'Nat64Content' : IDL.Nat64,
    'Nat32Content' : IDL.Nat32,
    'BoolContent' : IDL.Bool,
    'Nat8Content' : IDL.Nat8,
    'Int64Content' : IDL.Int64,
    'IntContent' : IDL.Int,
    'NatContent' : IDL.Nat,
    'Nat16Content' : IDL.Nat16,
    'Int32Content' : IDL.Int32,
    'Int8Content' : IDL.Int8,
    'Int16Content' : IDL.Int16,
    'BlobContent' : IDL.Vec(IDL.Nat8),
    'Principal' : IDL.Principal,
    'TextContent' : IDL.Text,
  });
  const Result_2 = IDL.Variant({
    'Ok' : IDL.Opt(IDL.Principal),
    'Err' : NftError,
  });
  const Result_3 = IDL.Variant({ 'Ok' : IDL.Vec(IDL.Nat), 'Err' : NftError });
  const TokenMetadata = IDL.Record({
    'transferred_at' : IDL.Opt(IDL.Nat64),
    'transferred_by' : IDL.Opt(IDL.Principal),
    'owner' : IDL.Opt(IDL.Principal),
    'operator' : IDL.Opt(IDL.Principal),
    'properties' : IDL.Vec(IDL.Tuple(IDL.Text, GenericValue)),
    'is_burned' : IDL.Bool,
    'token_identifier' : IDL.Nat,
    'burned_at' : IDL.Opt(IDL.Nat64),
    'burned_by' : IDL.Opt(IDL.Principal),
    'minted_at' : IDL.Nat64,
    'minted_by' : IDL.Principal,
  });
  const Result_4 = IDL.Variant({
    'Ok' : IDL.Vec(TokenMetadata),
    'Err' : NftError,
  });
  const Result_5 = IDL.Variant({ 'Ok' : IDL.Principal, 'Err' : NftError });
  const SupportedInterface = IDL.Variant({
    'Burn' : IDL.Null,
    'Mint' : IDL.Null,
    'Approval' : IDL.Null,
    'TransactionHistory' : IDL.Null,
  });
  const Result_6 = IDL.Variant({ 'Ok' : TokenMetadata, 'Err' : NftError });
  const TxEvent = IDL.Record({
    'time' : IDL.Nat64,
    'operation' : IDL.Text,
    'details' : IDL.Vec(IDL.Tuple(IDL.Text, GenericValue)),
    'caller' : IDL.Principal,
  });
  const Result_7 = IDL.Variant({ 'Ok' : TxEvent, 'Err' : NftError });
  return IDL.Service({
    'approve' : IDL.Func([IDL.Principal, IDL.Nat], [Result], []),
    'balanceOf' : IDL.Func([IDL.Principal], [Result], ['query']),
    'burn' : IDL.Func([IDL.Nat], [Result], []),
    'custodians' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'isApprovedForAll' : IDL.Func(
        [IDL.Principal, IDL.Principal],
        [Result_1],
        ['query'],
      ),
    'logo' : IDL.Func([], [IDL.Opt(IDL.Text)], ['query']),
    'metadata' : IDL.Func([], [Metadata], ['query']),
    'mint' : IDL.Func(
        [IDL.Principal, IDL.Nat, IDL.Vec(IDL.Tuple(IDL.Text, GenericValue))],
        [Result],
        [],
      ),
    'name' : IDL.Func([], [IDL.Opt(IDL.Text)], ['query']),
    'operatorOf' : IDL.Func([IDL.Nat], [Result_2], ['query']),
    'operatorTokenIds' : IDL.Func([IDL.Principal], [Result_3], ['query']),
    'operatorTokenMetadata' : IDL.Func([IDL.Principal], [Result_4], ['query']),
    'ownerOf' : IDL.Func([IDL.Nat], [Result_5], ['query']),
    'ownerTokenIds' : IDL.Func([IDL.Principal], [Result_3], ['query']),
    'ownerTokenMetadata' : IDL.Func([IDL.Principal], [Result_4], ['query']),
    'setApprovalForAll' : IDL.Func([IDL.Principal, IDL.Bool], [Result], []),
    'setCustodians' : IDL.Func([IDL.Vec(IDL.Principal)], [], []),
    'setLogo' : IDL.Func([IDL.Text], [], []),
    'setName' : IDL.Func([IDL.Text], [], []),
    'setSymbol' : IDL.Func([IDL.Text], [], []),
    'supportedInterfaces' : IDL.Func(
        [],
        [IDL.Vec(SupportedInterface)],
        ['query'],
      ),
    'symbol' : IDL.Func([], [IDL.Opt(IDL.Text)], ['query']),
    'tokenMetadata' : IDL.Func([IDL.Nat], [Result_6], ['query']),
    'totalSupply' : IDL.Func([], [IDL.Nat], ['query']),
    'totalTransactions' : IDL.Func([], [IDL.Nat], ['query']),
    'transaction' : IDL.Func([IDL.Nat], [Result_7], ['query']),
    'transfer' : IDL.Func([IDL.Principal, IDL.Nat], [Result], []),
    'transferFrom' : IDL.Func(
        [IDL.Principal, IDL.Principal, IDL.Nat],
        [Result],
        [],
      ),
  });
};
export const init = ({ IDL }) => {
  const InitArgs = IDL.Record({
    'logo' : IDL.Opt(IDL.Text),
    'name' : IDL.Opt(IDL.Text),
    'custodians' : IDL.Opt(IDL.Vec(IDL.Principal)),
    'symbol' : IDL.Opt(IDL.Text),
  });
  return [IDL.Opt(InitArgs)];
};
