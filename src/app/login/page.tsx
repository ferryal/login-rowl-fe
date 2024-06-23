"use client";

import React, { useState, useCallback, useMemo, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Button,
  Input,
  Card,
  PasswordChecklist,
  useToast,
} from "@/components/ui";
import useLogin from "@/hooks/mutations/useLogin/useLogin";
import { ILoginPayload } from "@/hooks/mutations/useLogin/types";
import { usePasswordValidation } from "@/hooks/usePasswordValidation";
import { useEmailValidation } from "@/hooks/useEmailValidation";

const LoginPage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { isValid: isEmailValid } = useEmailValidation(email);
  const { isValid: isPasswordValid } = usePasswordValidation(password);

  const { mutate, data, error, isError, isPending } = useLogin();

  useEffect(() => {
    if (data?.success) {
      localStorage?.setItem("jwt_token_rushowl", data?.token);
      toast({
        title: `${data?.user?.email} Login Successful`,
        className: "bg-green-400 text-white",
      });
      router.push("/calculate-minmax");
      console.log("Login successful:", data);
    }
  }, [data]);

  const handleEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    []
  );

  const handlePasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    []
  );

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const payload: ILoginPayload = { email, password };
      console.log("paylaod", payload);
      mutate(payload);
    },
    [data, email, password]
  );

  const isFormValid = useMemo(
    () => isEmailValid && isPasswordValid,
    [isEmailValid, isPasswordValid]
  );

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <Card className="p-8 w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {!isEmailValid && email && (
              <p className="text-xs text-red-600 mt-1">Invalid email address</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
            <PasswordChecklist password={password} />
          </div>
          {/* <Button className="w-full">Login</Button> */}
          <Button
            type="submit"
            className="w-full"
            disabled={isPending || !isFormValid}
          >
            {isPending ? "Logging in..." : "Login"}
          </Button>
          {isError && (
            <p className="mt-2 text-center text-red-600">
              Error: {error.message}
            </p>
          )}
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
