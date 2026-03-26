import type { Metadata } from "next"
import { SignInForm } from "./sign-in-form"

export const metadata: Metadata = {
    title: "เข้าสู่ระบบ",
    description: "เข้าสู่ระบบ Pet House เพื่อจัดการสัตว์เลี้ยงและบริการต่าง ๆ",
}

export default function SignInPage() {
    return <SignInForm />
}
