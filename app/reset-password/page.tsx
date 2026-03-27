import type { Metadata } from "next"
import { ResetPassword } from "./reset-password"

export const metadata: Metadata = {
    title: "รีเซ็ตรหัสผ่าน",
    description: "ตั้งรหัสผ่านใหม่สำหรับบัญชี Pet House ของคุณ",
}

export default function ResetPasswordPage() {
    return <ResetPassword />
}