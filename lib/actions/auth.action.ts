'use server';

import { db, auth } from "@/firebase/admin";
import { Auth } from "firebase-admin/auth";
import { cookies } from "next/headers";

const ONE_WEEK = 60 * 60 * 24 * 7;




export async function signup(params: SignUpParams) {
    const { uid, email, name } = params;
    try {
        const userRecord = await db.collection('users').doc(uid).get();
        if (userRecord.exists) {
            return {
                success: false,
                message: 'User already exists. Please sign in instead.'
            };
        }
        await db.collection('users').doc(uid).set({
            name,
            email,
        })
        return {
            success: true,
            message: 'Account created successfully.'
        };


    } catch (e: any) {
        console.error("Error creating user:", e);
        if (e.code === 'auth/email-already-exists') {
            return {
                success: false,
                message: 'Email already in use.'
            };
        }
        return {
            success: false,
            message: 'Failed to create an account.'
        };
    }

}

export async function signIn(params: SignInParams) {
    const { email, idToken } = params;
    try {
        const userRecord = await auth.getUserByEmail(email);
        if (!userRecord) {
            return {
                success: false,
                message: 'User does not exist. Please sign up first.'
            };
        }

        await setSessionCookie(idToken);

    } catch (e) {
        console.log(e);

        return {
            success: false,
            message: 'Failed to sign in.'
        };
    }

}
export async function setSessionCookie(idToken: string) {
    const cookieStore = await cookies();
    const sessionCookie = await auth.createSessionCookie(idToken, {
        expiresIn: ONE_WEEK * 1000,
    });

    cookieStore.set('session', sessionCookie, {
        maxAge: ONE_WEEK,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax',
    });

}