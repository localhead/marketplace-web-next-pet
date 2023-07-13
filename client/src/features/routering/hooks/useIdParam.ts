import { useRouter } from "next/router";

export const useIdParam = () => {
  const router = useRouter();

  if (!router.query.id && !(typeof router.query.id === "string")) {
    throw new Error("can`t find id param");
  }

  const id = Number.parseInt(router.query.id as string);

  if (Number.isNaN(id)) {
    throw new Error("id param is not valid");
  }

  return id;
};
