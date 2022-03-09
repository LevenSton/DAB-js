import { Principal } from '@dfinity/principal';
import DepartureLabs from '../standard_wrappers/nft_standards/departure_labs';
import DIP721 from '../standard_wrappers/nft_standards/dip_721';
import EXT from '../standard_wrappers/nft_standards/ext';
import CCC from '../standard_wrappers/nft_standards/ccc';
import ICPunks from '../standard_wrappers/nft_standards/ic_punks';


export type NFTStandards = typeof EXT | typeof ICPunks | typeof DepartureLabs | typeof DIP721 | typeof CCC;

export interface DABCollection {
  icon : string,
  name : string,
  description : string,
  principal_id : Principal,
  standard : string,
};

export interface NFTCollection {
  name: string;
  canisterId: string;
  standard: string;
  tokens: NFTDetails[];
  icon?: string;
  description?: string;
}

export interface NFTDetails {
  index: bigint;
  canister: string;
  id?: string;
  name?: string;
  url: string;
  metadata: any;
  standard: string;
  collection?: string;
}
