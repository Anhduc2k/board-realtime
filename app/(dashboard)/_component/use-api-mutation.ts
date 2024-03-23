import { useMutation } from "convex/react";
import { useState } from "react";

export const useApiMutation = (mutationFunc: any) => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunc);

  const mutate = (payload: any) => {
    setPending(true);
    return apiMutation(payload)
      .finally(() => setPending(false))
      .then((result) => {
        return result;
      })
      .catch((err) => {
        throw err;
      });
  };

  return { mutate, pending }
};
