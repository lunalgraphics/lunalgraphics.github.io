import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
    const url = "https://exchange.adobe.com/apps/cc/ee1af5e5/progen-flares-2";
    redirect(301, url);
};