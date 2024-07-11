import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn path="/sign-up"/>
    </main>
  );
}
