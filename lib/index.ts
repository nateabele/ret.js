import { types } from './types';
export * from './tokenizer';
import { tokenizer } from './tokenizer';
export * from './types';

export default tokenizer;
export { types };

module.exports = tokenizer;
module.exports.types = types;