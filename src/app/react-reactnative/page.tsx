"use client";

import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
  Button,
} from "@/components/ui";
import { useRouter } from "next/navigation";

export default function ReactExplain() {
  const router = useRouter();

  const redirectLogin = () => {
    localStorage.removeItem("jwt_token_rushowl");
    router.push("/login");
  };

  return (
    <>
      <div className="flex h-screen justify-center items-center bg-gray-100">
        <Card className="p-8 w-full max-w-3xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">Question 3</CardTitle>
            <CardDescription className="text-center">
              Explain the main difference of React and React Native during
              runtime.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              ReactJS is a JavaScript library, supporting both front-end web and
              being run on a server, for building user interfaces and web
              applications. It follows the concept of reusable components.
            </p>
            <br />
            <p>
              React Native is a mobile framework that makes use of the
              JavaScript engine available on the host, allowing you to build
              mobile applications for different platforms (iOS, Android, and
              Windows Mobile) in JavaScript that allows you to use ReactJS to
              build reusable components and communicate with native components
              further explanation
            </p>
            <br />
            <p>
              Both follow the JSX syntax extension of JavaScript. Which compiles
              to React.createElement calls under the hood. JSX in-depth
            </p>
            <br />
            <p>Both are open-sourced by Facebook.</p>
          </CardContent>
          <CardFooter>
            <div className="flex justify-between w-full">
              <Button onClick={() => router.push("/calculate-minmax")}>
                Question 2
              </Button>
              <Button onClick={redirectLogin}>Question 1 (Logout)</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
