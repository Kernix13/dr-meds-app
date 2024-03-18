import { PageA, PageB, PageNotFound, Medications } from "pages";
import { FC } from "react";

export type RouteId = "/" | "pagea" | "pageb" | "medications" | "pagenotfound";

interface Route {
	path: string;
	component: FC;
	id: RouteId;
}

export const routes: Route[] = [
	{
		id: "/",
		path: "/",
		component: PageA,
	},
	{
		id: "pagea",
		path: "/pagea",
		component: PageA,
	},
	{
		id: "pageb",
		path: "/pageb",
		component: PageB,
	},
	{
		id: "medications",
		path: "/medications",
		component: Medications,
	},
	{
		id: "pagenotfound",
		path: "*",
		component: PageNotFound,
	},
];

export const routesById = routes.reduce((acc, route) => {
	acc[route.id] = route;
	return acc;
}, {} as Record<RouteId, Route>);
