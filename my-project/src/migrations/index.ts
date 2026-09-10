import * as migration_20260815_154347_initial from './20260815_154347_initial';
import * as migration_20260816_074719_add_media_prefix from './20260816_074719_add_media_prefix';
import * as migration_20260910_154810_add_post_sort_order from './20260910_154810_add_post_sort_order';

export const migrations = [
  {
    up: migration_20260815_154347_initial.up,
    down: migration_20260815_154347_initial.down,
    name: '20260815_154347_initial',
  },
  {
    up: migration_20260816_074719_add_media_prefix.up,
    down: migration_20260816_074719_add_media_prefix.down,
    name: '20260816_074719_add_media_prefix',
  },
  {
    up: migration_20260910_154810_add_post_sort_order.up,
    down: migration_20260910_154810_add_post_sort_order.down,
    name: '20260910_154810_add_post_sort_order'
  },
];
