// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_authenticated_layout from "./routes/(authenticated)/_layout.tsx";
import * as $_authenticated_middleware from "./routes/(authenticated)/_middleware.ts";
import * as $_authenticated_home from "./routes/(authenticated)/home.tsx";
import * as $_authenticated_logout from "./routes/(authenticated)/logout.ts";
import * as $_authenticated_users from "./routes/(authenticated)/users.tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $ddns_ddnsConfigId_ from "./routes/ddns/[ddnsConfigId].ts";
import * as $ddns_playground from "./routes/ddns/playground.ts";
import * as $ddns_updateCloudflare from "./routes/ddns/updateCloudflare.ts";
import * as $index from "./routes/index.tsx";
import * as $login from "./routes/login.tsx";
import * as $utils_register_root_user from "./routes/utils/register-root-user.ts";
import * as $Counter from "./islands/Counter.tsx";
import * as $LogoutButton from "./islands/LogoutButton.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/(authenticated)/_layout.tsx": $_authenticated_layout,
    "./routes/(authenticated)/_middleware.ts": $_authenticated_middleware,
    "./routes/(authenticated)/home.tsx": $_authenticated_home,
    "./routes/(authenticated)/logout.ts": $_authenticated_logout,
    "./routes/(authenticated)/users.tsx": $_authenticated_users,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/ddns/[ddnsConfigId].ts": $ddns_ddnsConfigId_,
    "./routes/ddns/playground.ts": $ddns_playground,
    "./routes/ddns/updateCloudflare.ts": $ddns_updateCloudflare,
    "./routes/index.tsx": $index,
    "./routes/login.tsx": $login,
    "./routes/utils/register-root-user.ts": $utils_register_root_user,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
    "./islands/LogoutButton.tsx": $LogoutButton,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
