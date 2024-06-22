import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "rush-owl-jwt";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1d" });

  // Mock validation
  if (email && password) {
    return NextResponse.json({
      success: true,
      user: {
        email: email,
      },
      message: "Login successful",
      token: token,
    });
  }

  return NextResponse.json(
    { success: false, message: "Invalid email or password" },
    { status: 401 }
  );
}
