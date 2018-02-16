import * as _ from 'lodash';
import { any } from 'codelyzer/util/function';

export const parseErrors = (errors: any) => {
    const error: { [k: string]: any } = {};
    _.forEach(errors, (value: any, key: string) => {
        error[key] = value.message;
    });
    return error;
};
