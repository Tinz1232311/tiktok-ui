import * as httpRequest from '~/utils/httpRequest';

// fetch api
export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return res;
    } catch (e) {
        throw e;
    }
};
