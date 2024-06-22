import { useMemo } from "react";

const usePasswordValidation = (password: string) => {
  const hasUpperCase = useMemo(() => /[A-Z]/.test(password), [password]);
  const hasLowerCase = useMemo(() => /[a-z]/.test(password), [password]);
  const hasNumber = useMemo(() => /\d/.test(password), [password]);
  const hasSymbol = useMemo(
    () => /[!@#$%^&*(),.?":{}|<>]/.test(password),
    [password]
  );
  const isValidLength = useMemo(() => password.length >= 8, [password]);

  return {
    hasUpperCase,
    hasLowerCase,
    hasNumber,
    hasSymbol,
    isValidLength,
    isValid:
      hasUpperCase && hasLowerCase && hasNumber && hasSymbol && isValidLength,
  };
};

export { usePasswordValidation };
