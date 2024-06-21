import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import UserService from "@/services/userService";

type UserDataType = {
  token: string;
  role: string;
  message: string;
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userData: UserDataType = await UserService.login(email, password);
      console.log(userData);
      if (userData.token) {
        localStorage.setItem("token", userData.token);
        localStorage.setItem("role", userData.role);
        //depending on the role navigate to the appropriate dashboard
        if (userData.role === "USER") navigate("/client");
        else if (userData.role === "CONDUCTEUR") navigate("/conducteur");
        else navigate("/admin/dashboard");
      } else {
        setError(userData.message);
      }
    } catch (error: unknown) {
      console.log(error);
      setError((error as Error).message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <div className="w-full h-screen lg:grid lg:grid-cols-2">
      <div className="hidden bg-muted lg:block">
        <img
          src="/login-image.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex items-center justify-center py-12">
        <form className="mx-auto grid w-[350px] gap-6" onSubmit={handleSubmit}>
          <div className="grid gap-2 text-center ">
            <h1 className="text-3xl font-bold">Connexion</h1>
            <p className="text-balance text-muted-foreground">
              Entrez votre e-mail ci-dessous pour vous connecter à votre compte
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Mot de passe</Label>
                <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Mot de passe oublié ?
                </Link>
              </div>
              <Input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Connexion
            </Button>
            {error && <p className="text-xs text-red-500">{error}</p>}
          </div>
          <div className="mt-4 text-center text-sm">
            Vous n'avez pas de compte ?{" "}
            <Link to="/register" className="underline">
              Inscrivez-vous
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
