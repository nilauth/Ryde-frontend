import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "@/services/userService";

export default function PasswordResetPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setError("Passwords do not match!");
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    }

    try {
      const response = await UserService.resetPassword(
        email,
        password,
        repeatPassword
      );
      setMessage(response.data);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error: unknown) {
      console.error(error);
      setError((error as Error).message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form className="mx-auto grid w-[350px] gap-6" onSubmit={handleSubmit}>
        <div className="grid gap-2 text-center ">
          <h1 className="text-3xl font-bold">Reset Password</h1>
          <p className="text-muted-foreground">
            Enter your new password below to reset it.
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
            <Label htmlFor="password">New Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="repeatPassword">Repeat New Password</Label>
            <Input
              id="repeatPassword"
              type="password"
              placeholder="••••••••"
              required
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">
            Reset Password
          </Button>
          {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
      </form>
    </div>
  );
}
