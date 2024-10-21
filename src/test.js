
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory } from "./api/dids/token.did";

async function getBackendActor(id = 'evyc3-ziaaa-aaaak-aam5a-cai') {
    const agent = new HttpAgent({ host: `https://${id}.raw.ic0.app` });
    // for local development only, this must not be used for production
    if (process.env.NODE_ENV === 'development') {
      await agent.fetchRootKey();
    }
    console.log('canisterId',id);
    const backend = Actor.createActor(idlFactory, { agent, canisterId: id });
    return backend;
}

export async function fn () {
  const actor = await getBackendActor();
  const res = await actor.query_header_by_wrapper({
    offset: window['BigInt'](3),
    // 起点
    limit: window['BigInt'](1),
    keyword: 'test',
  })
  console.log(res);
  return res;
}

// fn();

