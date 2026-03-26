"use client"

import {
    Field,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function StaffLoginForm() {
    return (
        <div className="flex items-center justify-center min-h-svh">
            <section className="flex flex-col items-center justify-center w-md rounded-lg">
                <Image className="mb-2 rounded-sm" src="/images/logo/1.png" alt="Logo Pet House" width={70} height={70} />
                <h2 className="text-2xl font-bold mb-5">เข้าสู่ระบบ</h2>
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
                        <Field>
                            <FieldLabel htmlFor="password" className="text-sm">รหัสผ่าน</FieldLabel>
                            <Input
                                className="py-5 text-sm"
                                type="password"
                                id="password"
                                placeholder="รหัสผ่าน"
                                autoComplete="current-password"
                            />
                            <Link href="/forgot-password" className="text-right text-sm text-muted-foreground">ลืมรหัสผ่าน?</Link>
                        </Field>
                    </FieldGroup>
                    <div className="flex items-center justify-center pt-3">
                        <Button className="py-5 w-xs text-sm" size="lg" type="submit">เข้าสู่ระบบ</Button>
                    </div>
                </form>
            </section>
        </div>
    )
}