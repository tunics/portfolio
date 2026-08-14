import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
    if (!site) {
        return new Response('Site URL is not configured.', { status: 500 });
    }

    const homeUrl = new URL('/', site);
    const body = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        '    <url>',
        `        <loc>${homeUrl.href}</loc>`,
        '    </url>',
        '</urlset>',
        '',
    ].join('\n');

    return new Response(body, {
        headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    });
};
