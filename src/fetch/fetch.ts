import * as requestPromise from 'request-promise';
import fetchHTMLWithPuppeteer from './fetchHTMLWithPuppeteer';

export const fetchPLAIN = (url: string): Promise<string> => requestPromise(url) as any;
export const fetchRENDER = (url: string): Promise<string> => fetchHTMLWithPuppeteer(url);
