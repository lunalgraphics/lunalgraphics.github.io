import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
    const url = "https://exchange.adobe.com/apps/cc/f4801cfb/superbloom-for-photoshop";
    redirect(301, url);
};