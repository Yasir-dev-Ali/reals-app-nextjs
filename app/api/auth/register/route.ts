import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";


export async function POST(request: NextRequest) {
    try {
        const { name, email, password } = await request.json();
        
        if (!name || !email || !password) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        await connectDB();
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "User Email already exists" }, { status: 400 });
        }

        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        
        await User.create({ name, email, password: hashedPassword });

        return NextResponse.json({ message: "User registered successfully" }, { status: 201 });

    } catch (error) {
        console.error("Error during user registration:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
