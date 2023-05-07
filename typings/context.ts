// https://github.com/vercel/next.js/blob/173381a57239e25291116f12b522ccdc64e42624/packages/next/src/server/future/route-modules/app-route/module.ts#L52
export type AppRouteHandlerFnContext = {
  params?: Record<string, string | string[]>;
};
