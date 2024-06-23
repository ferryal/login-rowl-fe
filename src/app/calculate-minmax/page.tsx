'use client';

import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
  SyntaxHighlight,
	Button
} from "@/components/ui";
import { useRouter } from "next/navigation";

export default function CalculateMinMax() {
	const router = useRouter();
  const codeSnippetAnswer = `
	const values: number[][] = [
		[1, 2, 3, 4, 5],
		[3, 4, 5, 6, 7],
		[6, 7, 8, 9, 10]
	];
	
	const calculateMinMax = (arr: number[][]): number => {
		// Use flatMap to get an array of maximum values from each sub-array
		const maxValues = arr.flatMap(subArray => Math.max(...subArray));
	
		// Use Math.min to find the minimum value among maxValues
		return Math.min(...maxValues);
	};
	
	const answer: number = calculateMinMax(values);
	console.log(answer); // Output: 5
	
`;

	const redirectLogin = () => {
		localStorage.removeItem('jwt_token_rushowl');
		router.push('/login');
	}

  return (
    <>
      <div className="flex h-screen justify-center items-center bg-gray-100">
        <Card className="p-8 w-full max-w-3xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">Question 2</CardTitle>
            <CardDescription className="text-center">
              Write a Typescript snippet to find out the minimum value of the
              maximum value of each nested array given the following structure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <SyntaxHighlight code={codeSnippetAnswer} language="typescript" />
            </div>
          </CardContent>
          <CardFooter>
						<div className="flex justify-between w-full">
							<Button onClick={redirectLogin}>Question 1 (Logout)</Button>
							<Button onClick={() => router.push('/react-reactnative')}>Question 3</Button>
						</div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
