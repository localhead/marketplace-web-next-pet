import {
  ProductDetailPage,
  ProductDetailPageProps,
} from "@features/products/store/pages/ProductDetailPage";
import { getAppServerSideProps } from "@features/ssr/utils/getAppServerSideProps";

export const getServerSideProps = getAppServerSideProps(async (store, ctx) => {
  const initId = ctx.query.id;

  const idNumber = Number(initId);

  return {
    props: { idNumber } as ProductDetailPageProps,
  };
});

export default ProductDetailPage;
