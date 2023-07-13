import { MainPage } from "@features/main/pages/MainPage";

// export const getServerSideProps: GetServerSideProps = getAppServerSideProps(
//   async (store) => {
//     const promises = [
//       await store.dispatch(
//         faqApi.endpoints.getFaq.initiate({
//           category: "test",
//         })
//       ),
//     ];

//     return {
//       props: { promises },
//     };
//   }
// );

export default MainPage;
