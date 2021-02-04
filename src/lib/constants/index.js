import error from './error';
import user  from './user';
import task  from './task';
import site  from './site';

export default {
    ...user,
    ...task,
    ...error,
    ...site,
};