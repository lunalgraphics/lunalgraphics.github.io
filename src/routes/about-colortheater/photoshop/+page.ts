import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
    const url = "https://exchange.adobe.com/apps/cc/10322b39/color-theater";
    redirect(301, url);
};