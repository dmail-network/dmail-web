import { Actor, HttpAgent } from '@dfinity/agent';
import { Principal } from "@dfinity/principal"
import { idlFactory } from "./dids/token.did";

export const mailHeaderId = 'evyc3-ziaaa-aaaak-aam5a-cai'
export const mailBodyId = 'ea7tw-yaaaa-aaaak-aam6q-cai'
export const nftId = '42fn2-wyaaa-aaaak-aafwq-cai'
export const bucketId = 'ej4yk-oiaaa-aaaak-aam7a-cai'
export const profileId = '4nczn-6aaaa-aaaak-aajza-cai'

export async function getBackendActor(id) {
    const agent = new HttpAgent({ host: `https://${id}.raw.ic0.app` });
    // for local development only, this must not be used for production
    if (process.env.NODE_ENV === 'development') {
      await agent.fetchRootKey();
    }
    console.log('canisterId',id);
    const backend = Actor.createActor(idlFactory, { agent, canisterId: id });
    return backend;
}

export const transformPrincipalId = (principalId) => {
  return Principal.fromText(principalId)
}

export async function http (id, apiName, params) {
    const actor = await getBackendActor(id);
    console.log(...params);
    const res = await actor[apiName](...params)
    return res;
}