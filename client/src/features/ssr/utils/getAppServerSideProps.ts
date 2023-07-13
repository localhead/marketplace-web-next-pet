import { AppStore, storeWrapper } from "@features/store/store";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";

export type GetAppServerSidePropsCallback<
  P extends {} = {},
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData
> = (
  store: AppStore,
  context: GetServerSidePropsContext<Q, D>
) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>;

export const getAppServerSideProps = <
  P extends {} = {},
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData
>(
  callback: GetAppServerSidePropsCallback<P, Q, D>
): GetServerSideProps<P, Q, D> => {
  return storeWrapper.getServerSideProps((store) => {
    return async (ctx) => {
      //initSsrAuth(store, ctx.req);

      return callback(store, ctx as GetServerSidePropsContext<Q, D>);
    };
  });
};
