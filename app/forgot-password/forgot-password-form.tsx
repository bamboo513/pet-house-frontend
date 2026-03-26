"use client"

import { Button } from "@/components/ui/button"
import {
    Field,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Image from "next/image"


export function ForgotPasswordForm() {
    return (
        <div className="flex items-center justify-center min-h-svh">
            <section className="flex flex-col items-center justify-center w-md rounded-lg">
                <Image className="mb-2 rounded-sm" src="/images/logo/1.png" alt="Logo Pet House" width={60} height={60} />
                <h2 className="text-2xl font-semibold mb-2">ลืมรหัสผ่าน</h2>
                <p className="text-sm mb-5 text-center text-gray-500">กรอกอีเมลของคุณเพื่อรับลิงก์รีเซ็ตรหัสผ่าน</p>

                <form className="flex flex-col items-center w-full">
                    <FieldGroup className="w-xs gap-3">
                        <Field>
                            <FieldLabel htmlFor="email" className="text-sm">อีเมล</FieldLabel>
                            <Input
                                className="py-5 text-sm"
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                autoComplete="email"
                                spellCheck={false}
                            />
                        </Field>
                    </FieldGroup>
                    <div className="flex items-center justify-center mt-5">
                        <Button className="py-5 w-xs text-sm" size="lg" type="submit">ส่งลิงก์ยืนยัน</Button>
                    </div>
                </form>
                <p className="mt-5 text-sm">กลับไปหน้าเข้าสู่ระบบ</p>
            </section>
        </div>
    )
}