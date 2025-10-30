import createMiddleware from "next-intl/middleware";
import i18nConfig from "../next-intl.config.js"; // adjust path if needed

export default createMiddleware(i18nConfig);

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
  // matcher: ["/", "/(en|es)/:path*"],
};
// import createMiddleware from "next-intl/middleware";
// import config from "./next-intl.config.js";

// export default createMiddleware(config);

// export const configMiddleware = {
//   matcher: ["/((?!_next|.*\\..*).*)"],
// };
