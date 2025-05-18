import { Navbar } from "@/components/navbar";
import { LoginForm } from "@/components/auth/login-form";
import { getDictionary } from "@/lib/dictionaries";

export default async function LoginPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang);

  return (
    <div className="min-h-screen bg-background">
      <Navbar navigation={dict.navigation} auth={dict.auth} />
      
      <main className="flex min-h-[calc(100vh-73px)] flex-col items-center justify-center px-4">
        <div className="w-full max-w-[400px] mx-auto">
          <div className="flex flex-col space-y-2 text-center mb-6">
            <h1 className="text-2xl font-semibold tracking-tight">
              {dict.auth.login}
            </h1>
            <p className="text-sm text-muted-foreground">
              {dict.auth.loginDescription}
            </p>
          </div>
          <LoginForm dict={dict.auth} />
        </div>
      </main>
    </div>
  );
} 