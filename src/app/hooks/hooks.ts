import { useRouter } from "next/navigation";

export const useHooks = () => {
  const router = useRouter();

  return { router };
};
