import type { Metadata } from "next"
import { StaffLoginForm } from './staff-login-form'

export const metadata: Metadata = {
    title: "เข้าสู่ระบบสำหรับพนักงาน",
    description: "เข้าสู่ระบบ Pet House สำหรับพนักงานเพื่อจัดการบริการและข้อมูลต่าง ๆ",
}

export default function StaffLogInPage() {
    return <StaffLoginForm />
}