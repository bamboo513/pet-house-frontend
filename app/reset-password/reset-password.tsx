"use client"

import { Button } from "@/components/ui/button"
import {
    Field,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export function ResetPassword() {
    return (
        <div className="flex items-center justify-center min-h-svh">
            <section className="flex flex-col items-center justify-center w-md rounded-lg">
                <Image className="mb-2 rounded-sm" src="/images/logo/1.png" alt="Logo Pet House" width={60} height={60} />
                <h2 className="text-lg font-semibold mb-2">รีเซ็ตรหัสผ่าน</h2>
                <p className="text-sm mb-5 text-center text-gray-500">กรุณาตั้งรหัสผ่านใหม่สำหรับบัญชีของคุณ</p>
                <form className="flex flex-col items-center w-full">
                    <FieldGroup className="w-xs gap-3">
                        <Field>
                            <FieldLabel htmlFor="password" className="text-sm">รหัสผ่านใหม่</FieldLabel>
                            <Input
                                className="py-5 text-sm"
                                id="password"
                                type="password"
                                placeholder="รหัสผ่านใหม่"
                                autoComplete="new-password"
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="confirm-password" className="text-sm">ยืนยันรหัสผ่าน</FieldLabel>
                            <Input
                                className="py-5 text-sm"
                                id="confirm-password"
                                type="password"
                                placeholder="ยืนยันรหัสผ่าน"
                                autoComplete="new-password"
                            />
                        </Field>
                    </FieldGroup>
                    <div className="flex items-center justify-center mt-5">
                        <Button className="py-5 w-xs text-sm" size="lg" type="submit">รีเซ็ตรหัสผ่าน</Button>
                    </div>
                </form>
                <p className="mt-5 text-sm">กลับไปหน้าเข้าสู่ระบบ</p>
            </section>
        </div>
    )
}