import { redirect } from "next/navigation";

import { LoginForm } from "@/components/auth/LoginForm";
import { createInsforgeServer } from "@/lib/insforge-server";

export default async function LoginPage() {
  const insforge = await createInsforgeServer();
  const {
    data: { user },
  } = await insforge.auth.getCurrentUser();

  if (user) {
    redirect("/dashboard");
  }

  return <LoginForm />;
}
