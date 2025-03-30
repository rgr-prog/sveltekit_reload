import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url, depends }) => {
	depends('app:layout_root');
	console.log('Load called');
	const params = url.searchParams;
	const ids = url.searchParams.get('ids');
	const seed = url.searchParams.get('seed');
	const queryObjs = Object.fromEntries(params.entries());
	console.log('URL seen by +layout.ts root: ', url.href, ids, seed);
	return {
		query_params: queryObjs,
		now_root: Date.now()
	};
};
