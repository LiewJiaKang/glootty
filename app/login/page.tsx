import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "@/components/auth/login-form"

const dict = {
  email: "Email",
  password: "Password",
  loginWithEmail: "Login with Email",
  continueWithGoogle: "Continue with Google",
  continueWithApple: "Continue with Apple",
  noAccount: "Don't have an account?",
  signup: "Sign up",
  forgotPassword: "Forgot password?",
  or: "or",
  emailPlaceholder: "name@example.com",
  termsNotice: "By continuing, you agree to our",
  termsLink: "Terms of Service",
  and: "and",
  privacyLink: "Privacy Policy"
};

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Acme Inc.
        </a>
        <LoginForm dict={dict} />
      </div>
    </div>
  )
}
