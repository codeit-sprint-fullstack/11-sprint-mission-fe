import { MAX_DISPLAY_LIKES } from './constants';

export function formatCount(count, limit = MAX_DISPLAY_LIKES) {
  if (!count) return 0;
  return count > limit ? `${limit}+` : count;
}
