import * as RNRandomBytes from 'react-native-randombytes';

import { createHash, createHmac, getHashes, Hash, Hmac } from './index-browser';

export { Hash, Hmac, createHash, createHmac, getHashes };

export function randomBytes(size: number) {
    return RNRandomBytes.randomBytes(size);
}
