import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

// The User Guide (how the app works) and Learn Comic Scripting (craft
// articles) serve different readers, so each docs page shows only its own
// sidebar group, and prev/next links never cross into the other one.
export const onRequest = defineRouteMiddleware((context) => {
	const route = context.locals.starlightRoute;
	const section = route.sidebar.find(
		(entry) =>
			entry.type === 'group' &&
			entry.entries.some((item) => item.type === 'link' && item.isCurrent),
	);
	if (!section || section.type !== 'group') return;

	route.sidebar = [section];

	const hrefs = new Set(
		section.entries.flatMap((item) => (item.type === 'link' ? [item.href] : [])),
	);
	const { prev, next } = route.pagination;
	if (prev && !hrefs.has(prev.href)) route.pagination.prev = undefined;
	if (next && !hrefs.has(next.href)) route.pagination.next = undefined;
});
