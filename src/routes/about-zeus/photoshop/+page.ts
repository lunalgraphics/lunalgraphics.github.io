import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
    const url = "https://exchange.adobe.com/apps/cc/9f28395e/zeus";
    redirect(301, url);
};