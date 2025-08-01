import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest){

    const data=await req.json();
    console.log(data)

    return NextResponse.json({
        msg:"Yoiu have been signed in"
    })

}
export function GET(){
    return NextResponse.json({
       msg: "I am digup page"
    })
}