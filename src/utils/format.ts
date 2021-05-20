/**
 * used when sending requests to the API
 * @param obj
 * @param useQ
 */
export const objectToParams = (obj: any, useQ = true) => {
    let params = '';

    if (obj !== undefined && obj !== null) {
        Object.keys(obj).forEach(key => {
            if (obj[key] !== null) {
                if (typeof obj[key] === 'string' && obj[key].length < 1) {
                    return;
                }

                if (params.length > 0) {
                    params = `${params}&${key}=${obj[key]}`;
                } else {
                    params = `${key}=${obj[key]}`;
                }
            }
        });
    }

    if (useQ) {
        if (params && params.length > 0) {
            params = `?${params}`;
        }
    }

    return params;
};