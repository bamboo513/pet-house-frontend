"use client"

import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SignInForm() {
    return (
        <div className="flex items-center justify-center min-h-svh">
            <section className="flex flex-col items-center justify-center w-md rounded-lg">
                <Image className="mb-2 rounded-sm" src="/images/logo/1.png" alt="Logo Pet House" width={70} height={70} />
                <h1 className="text-2xl font-bold mb-2">Pet House</h1>
                <h2 className="text-lg font-semibold mb-5">เข้าสู่ระบบ</h2>
                <form className="flex flex-col items-center w-full">
                    <FieldGroup className="w-sm gap-3">
                        <Field>
                            <FieldLabel htmlFor="email" className="text-sm">อีเมล</FieldLabel>
                            <Input
                                className="py-4 text-sm"
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
                                className="py-4 text-sm"
                                type="password"
                                id="password"
                                placeholder="รหัสผ่าน"
                                autoComplete="current-password"
                            />
                            <Link href="/forgot-password" className="text-right text-sm text-muted-foreground">ลืมรหัสผ่าน?</Link>
                        </Field>
                    </FieldGroup>
                    <div className="flex items-center justify-center pt-3">
                        <Button className="py-5 w-sm text-sm" size="lg" type="submit">เข้าสู่ระบบ</Button>
                    </div>
                </form>
                <div className="w-sm pt-5">
                    <FieldSeparator>หรือ</FieldSeparator>
                </div>
                <Button className="py-5 text-sm mt-5 w-sm" size="lg" variant="outline">
                    <Image src="/images/logo/google-icon.png" alt="Google" width={20} height={20} data-icon="inline-start" />
                    เข้าสู่ระบบด้วย Google
                </Button>
                <Button className="py-5 text-sm mt-5 w-sm" size="lg" variant="outline">
                    <Image src="/images/logo/line-icon.png" alt="Line" width={20} height={20} data-icon="inline-start" />
                    เข้าสู่ระบบด้วย Line
                </Button>
                <p className="mt-5 text-sm">ยังไม่มีบัญชี? <Link href="/sign-up" className="text-primary underline underline-offset-4">สมัครสมาชิก</Link></p>
            </section>
        </div>
    )
}
