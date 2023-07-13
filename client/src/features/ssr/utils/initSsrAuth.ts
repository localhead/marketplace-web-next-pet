import { AppStore } from "@features/store/store";
import { ACCESS_TOKEN_COOKIE_KEY } from "./../../user/utils/constants";

import { IncomingMessage } from "http";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

type Request = IncomingMessage & {
  cookies: NextApiRequestCookies;
};

export const initSsrAuth = (store: AppStore, req: Request) => {
  const token = req.cookies[ACCESS_TOKEN_COOKIE_KEY];
  if (token) {
    store.dispatch(
      setAuthData({
        token,
      })
    );
  }
};
function setAuthData(arg0: { token: string }): any {
  throw new Error("Function not implemented.");
}
