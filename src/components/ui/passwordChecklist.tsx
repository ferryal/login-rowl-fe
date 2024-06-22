import React, { useMemo, useCallback } from "react";
import { CircleCheck, CircleX } from "lucide-react";
import { usePasswordValidation } from "@/hooks/usePasswordValidation";

interface PasswordChecklistProps {
  password: string;
}

const PasswordChecklist: React.FC<PasswordChecklistProps> = ({ password }) => {
  const { hasUpperCase, hasNumber, hasSymbol, hasLowerCase, isValidLength } =
    usePasswordValidation(password);

  const getClass = useCallback(
    (isValid: boolean) => {
      if (password === "") return "text-gray-600";
      return isValid ? "text-green-600" : "text-red-600";
    },
    [password]
  );

  return (
    <div className="mt-2">
      <ul className="list-none">
        <li className={`text-xs flex items-center ${getClass(hasUpperCase)}`}>
          {hasUpperCase ? <CircleCheck size={14} /> : <CircleX size={14} />}
          <span className="ml-1">Contains uppercase letter</span>
        </li>
        <li className={`text-xs flex items-center ${getClass(hasLowerCase)}`}>
          {hasLowerCase ? <CircleCheck size={14} /> : <CircleX size={14} />}
          <span className="ml-1">Contains lowercase letter</span>
        </li>
        <li className={`text-xs flex items-center ${getClass(hasNumber)}`}>
          {hasNumber ? <CircleCheck size={14} /> : <CircleX size={14} />}
          <span className="ml-1">Contains number</span>
        </li>
        <li className={`text-xs flex items-center ${getClass(hasSymbol)}`}>
          {hasSymbol ? <CircleCheck size={14} /> : <CircleX size={14} />}
          <span className="ml-1">Contains symbol</span>
        </li>
        <li className={`text-xs flex items-center ${getClass(isValidLength)}`}>
          {isValidLength ? <CircleCheck size={14} /> : <CircleX size={14} />}
          <span className="ml-1">Is at least 8 characters long</span>
        </li>
      </ul>
    </div>
  );
};

export { PasswordChecklist };
