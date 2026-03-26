"use client"

import { Button } from "@/components/ui/button"
import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export function SignUpForm() {
    return (
        <div className="flex items-center justify-center min-h-svh">
            <section className="flex flex-col items-center justify-center w-md rounded-lg">
                <Image className="mb-2 rounded-sm" src="/images/logo/1.png" alt="Logo Pet House" width={70} height={70} />
                <h1 className="text-2xl font-bold mb-2">Pet House</h1>
                <h2 className="text-lg font-semibold mb-5">สมัครสมาชิก</h2>
                <form className="flex flex-col items-center w-full">
                    <FieldGroup className="w-sm gap-3">
                        <Field>
                            <FieldLabel htmlFor="name" className="text-sm">ชื่อ-นามสกุล</FieldLabel>
                            <Input
                                className="py-4 text-sm"
                                id="name"
                                placeholder="ชื่อ-นามสกุล"
                                autoComplete="name"
                            />
                        </Field>
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
                            <FieldLabel htmlFor="phone" className="text-sm">เบอร์โทรศัพท์</FieldLabel>
                            <Input
                                className="py-4 text-sm"
                                id="phone"
                                type="tel"
                                placeholder="xxx-xxx-xxxx"
                                autoComplete="tel"
                            />
                        </Field>
                        <div className="flex flex-row gap-2">
                            <Field>
                                <FieldLabel htmlFor="password" className="text-sm">รหัสผ่าน</FieldLabel>
                                <Input
                                    className="py-4 text-sm"
                                    type="password"
                                    id="password"
                                    placeholder="รหัสผ่าน"
                                    autoComplete="new-password"
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="confirm-password" className="text-sm">ยืนยันรหัสผ่าน</FieldLabel>
                                <Input
                                    className="py-4 text-sm"
                                    type="password"
                                    id="confirm-password"
                                    placeholder="ยืนยันรหัสผ่าน"
                                    autoComplete="new-password"
                                />
                            </Field>
                        </div>
                    </FieldGroup>
                    <div className="flex items-center justify-center pt-5">
                        <Button className="py-5 w-sm text-sm" size="lg" type="submit">สมัครสมาชิก</Button>
                    </div>
                </form>
                <div className="w-sm pt-5">
                    <FieldSeparator>หรือ</FieldSeparator>
                </div>
                <Button className="py-5 mt-5 w-sm text-sm" size="lg" variant="outline">
                    <Image src="/images/logo/google-icon.png" alt="Google" width={20} height={20} data-icon="inline-start" />
                    สมัครสมาชิกด้วย Google
                </Button>
                <Button className="py-5 mt-5 w-sm text-sm" size="lg" variant="outline">
                    <Image src="/images/logo/line-icon.png" alt="Line" width={20} height={20} data-icon="inline-start" />
                    สมัครสมาชิกด้วย Line
                </Button>
                <p className="mt-5 text-sm">มีบัญชีอยู่แล้ว? <Link href="/sign-in" className="text-primary underline underline-offset-4">เข้าสู่ระบบ</Link></p>
            </section>
        </div>
    )
}
