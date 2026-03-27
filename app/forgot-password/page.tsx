import type { Metadata } from "next"
import { ForgotPasswordForm } from "./forgot-password-form"

export const metadata: Metadata = {
    title: "ลืมรหัสผ่าน",
    description: "กรอกอีเมลเพื่อรับลิงก์รีเซ็ตรหัสผ่านสำหรับบัญชี Pet House ของคุณ",
}

export default function ForgotPasswordPage() {
    return <ForgotPasswordForm />
}
