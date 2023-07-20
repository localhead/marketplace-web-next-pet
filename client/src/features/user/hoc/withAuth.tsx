import { useAppDispatch, useAppSelector } from "@features/store";
import { IsLoadingPage } from "../pages/IsLoadingPage";
import { UnauthorizedPage } from "../pages/UnauthorizedPage";
import { userApi } from "../store";

export function withAuth<P extends {}>(
  WrappedComponent: React.ComponentType<P>
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithAuth = (props: P) => {
    const isAuth = useAppSelector((state) => state.auth.isAuth);

    const { data, isLoading, isSuccess } = userApi.useLoginCheckQuery();

    const dispatch = useAppDispatch();

    const authInStore = useAppSelector((state) => state.auth);

    if (isLoading) {
      return <IsLoadingPage />;
    }

    if (!isAuth) {
      return <UnauthorizedPage />;
    }

    if (isSuccess) {
      return <WrappedComponent {...props} />;
    }
  };

  ComponentWithAuth.displayName = `withAuth(${displayName})`;

  return ComponentWithAuth;
}
