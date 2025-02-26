import { LoginForm } from "@/features/auth/components/login-form";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Image src="/navLogo.svg" alt="Logo" width={100} height={100} />
          POS Alat Berat
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Dibuat oleh opal, sasa, kakhai, glenn.&rdquo;
            </p>
            <footer className="text-sm">JS</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center sm:w-[400px]">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
