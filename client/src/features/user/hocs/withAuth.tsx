import { useIsAuth } from "../hooks/useIsAuth";

export function withAuth<P extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<P>
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithAuth = (props: P) => {
    const isAuth = useIsAuth();

    /*     if (!isAuth) {
      return (
        <>
          <UnauthorizedPage />
        </>
      );
    } */

    return <WrappedComponent {...props} />;
  };

  ComponentWithAuth.displayName = `withAuth(${displayName})`;

  return ComponentWithAuth;
}
