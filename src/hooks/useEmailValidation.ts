import { useMemo } from "react";

const useEmailValidation = (email: string) => {
  const isValid = useMemo(() => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }, [email]);

  return { isValid };
};

export { useEmailValidation };
