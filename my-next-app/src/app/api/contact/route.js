import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/Contact";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();
  try {
    const { name, email, message } = await req.json();
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    return NextResponse.json({ success: true, message: "Message saved successfully!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error saving message!" }, { status: 500 });
  }
}
