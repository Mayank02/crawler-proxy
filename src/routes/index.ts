import * as express from 'express';
import { fetchPLAIN, fetchRENDER } from '../fetch/fetch';
const router = express.Router();

const getUrlFrom = (identifier, url) => {
    const index = url.indexOf(identifier) + identifier.length;
    return url.substr(index);
};

router.get('/crawl-plain/:url*', async (req: express.Request, res: express.Response) => {
    const url = getUrlFrom('/crawl-plain/', req.url);
    const html = await fetchPLAIN(url);
    res.send(html);
});

router.get('/crawl-render/:url*', async (req: express.Request, res: express.Response) => {
    const url = getUrlFrom('/crawl-render/', req.url);
    const html = await fetchRENDER(url);
    res.send(html);
});

export default router;
