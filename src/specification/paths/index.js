import { blog } from './blog/index.js';
import { comment } from './comment/index.js';
import { general } from './general/index.js';
import { userData } from './user-data/index.js';
import { user } from './user/index.js';

export const paths = {
  ...general,
  ...user,
  ...blog,
  ...comment,
  ...userData

};
