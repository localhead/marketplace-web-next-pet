import {
  SearchPage,
  SearchPageProps,
} from "@features/products/store/pages/SearchPage";
import { getAppServerSideProps } from "@features/ssr/utils/getAppServerSideProps";

export const getServerSideProps = getAppServerSideProps(async (store, ctx) => {
  const { searchText } = ctx.query;

  return {
    props: { searchText } as SearchPageProps,
  };
});

export default SearchPage;
