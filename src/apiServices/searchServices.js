import * as request from '~/utils/requets';

// fecth api
export const search = async (q, type = 'less') => {
    try {
        const res = await request.get(`users/search`, {
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
