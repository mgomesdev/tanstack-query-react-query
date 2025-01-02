import { NextResponse } from "next/server";

export async function GET(request: Request) {
   const { searchParams } = new URL(request.url);
   const params = Array.from(searchParams.entries());
   const waitKey = params.find(([key]) => !isNaN(Number(key)));

   await new Promise((resolve) => setTimeout(resolve, Number(waitKey![0])));

   return NextResponse.json({ message: `waited ${waitKey![0]}ms` });
}
