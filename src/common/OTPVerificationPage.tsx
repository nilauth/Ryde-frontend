import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UserService from "@/services/userService";

export default function OTPVerificationPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { email } = location.state as { email: string };

  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await UserService.verifyOtp(email, otp);
      setMessage(response.data);
      setTimeout(() => {
        navigate("/reset-password", { state: { email } });
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
          <h1 className="text-3xl font-bold">Vérification de l'OTP</h1>
          <p className="text-muted-foreground">
            Entrez l'OTP envoyé à votre adresse email pour vérifier votre identité.
          </p>
        </div>
        <div className="grid gap-4">
          {/* <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div> */}
          <div className="grid gap-2">
            <Label htmlFor="otp">OTP</Label>
            <Input
              id="otp"
              type="text"
              placeholder="Entrez l'OTP"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            {/* Hidden input field to include email in the form submission */}
            <Input id="email" type="hidden" value={email} />
          </div>
          <Button type="submit" className="w-full">
            Vérification de l'OTP
          </Button>
          {message && <p className="text-xs text-green-500">{message}</p>}
          {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
      </form>
    </div>
  );
}
