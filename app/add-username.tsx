"use server"

import { redirect } from "next/navigation"

type AddUsername = {
    success: false;
    error: string;
} | {
    success: true;
    username: string;
};

export async function addUsername(
    formData: FormData
): Promise<AddUsername> {
    const { username } = Object.fromEntries(formData);
    redirect(username.toString())
}