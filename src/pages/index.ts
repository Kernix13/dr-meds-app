import { lazy } from "react";

const PageA = lazy(() => import("pages/PageA"));
const PageB = lazy(() => import("pages/PageB"));
const Medications = lazy(() => import("pages/Medications"));
const PageNotFound = lazy(() => import("pages/PageNotFound"));

export { PageA, PageB, PageNotFound, Medications }; 
