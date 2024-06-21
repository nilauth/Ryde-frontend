import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "@/services/userService";

export default function ForgotPasswordRequestPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await UserService.requestPasswordReset(email);
      setMessage(response.data);
      setTimeout(() => {
        navigate("/verify-otp", {state: {email}});
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
    <div className='w-full h-screen flex items-center justify-center'>
      <form className='mx-auto grid w-[350px] gap-6' onSubmit={handleSubmit}>
        <div className='grid gap-2 text-center '>
          <h1 className='text-3xl font-bold'>Forgot Password</h1>
          <p className='text-muted-foreground'>
            Enter your email below to receive a password reset link.
          </p>
        </div>
        <div className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='m@example.com'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button type='submit' className='w-full'>
            Send Verification Email
          </Button>
          {message && <p className='text-xs text-green-500'>{message}</p>}
          {error && <p className='text-xs text-red-500'>{error}</p>}
        </div>
      </form>
    </div>
  );
}
