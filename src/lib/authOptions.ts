// src/lib/authOptions.ts:

import CredentialsProvider from "next-auth/providers/credentials"
import type { NextAuthOptions } from "next-auth"
import { loginUser } from "@/app/actions/auth/loginUser"
interface LoginUserInput {
  email: string;
  password: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
            console.log(credentials);
             const { email, password } = credentials as LoginUserInput;
          const user = await loginUser({email, password})

          if (user) {
            return {
              id: user.email,
              email: user.email
            }
          }

          return null
        } catch (error) {
          console.error("Authorize error:", error)
          return null
        }
      }
    })
  ],
  pages: {
    signIn: "/login"
  },
  session: {
    strategy: "jwt"
  }
}
