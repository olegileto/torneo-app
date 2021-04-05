import { KEY } from './secret';
import { DEFAULT_PAGE, DEFAULT_PER_PAGE, URL } from './utils';

const basicAPI = `${URL}?client_id=${KEY}`;

const Api = {
    fetchPhotos: async (page, perPage) => {
        const defaultPage = !page ? DEFAULT_PAGE : page;
        const defaultPerPage = !perPage ? DEFAULT_PER_PAGE : perPage;

        const response = await fetch(`${basicAPI}&per_page=${defaultPerPage}&page=${defaultPage}`);
        const data = await response.json();

        if (response.status >= 400) {
            throw new Error(data.errors);
        }

        return data;
    }
}

export default Api;