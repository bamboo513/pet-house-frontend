import type { Metadata } from "next"
import { SignUpForm } from "./sign-up-form"

export const metadata: Metadata = {
    title: "สมัครสมาชิก",
    description: "สมัครสมาชิก Pet House เพื่อเข้าถึงบริการดูแลสัตว์เลี้ยงครบวงจร",
}

export default function SignUpPage() {
    return <SignUpForm />
}