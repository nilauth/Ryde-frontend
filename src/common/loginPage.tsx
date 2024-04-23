import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className='w-full h-screen lg:grid lg:grid-cols-2'>
      <div className='hidden bg-muted lg:block'>
        <img
          src='/public/login-image.jpg'
          alt='Image'
          width='1920'
          height='1080'
          className='h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale'
        />
      </div>
      <div className='flex items-center justify-center py-12'>
        <div className='mx-auto grid w-[350px] gap-6'>
          <div className='grid gap-2 text-center'>
            <h1 className='text-3xl font-bold'>Connexion</h1>
            <p className='text-balance text-muted-foreground'>
              Entrez votre e-mail ci-dessous pour vous connecter à votre compte
            </p>
          </div>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' placeholder='m@example.com' required />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Mot de passe</Label>
                <Link to='/forgot-password' className='ml-auto inline-block text-sm underline'>
                  Mot de passe oublié ?
                </Link>
              </div>
              <Input id='password' type='password' placeholder='••••••••' required />
            </div>
            <Button type='submit' className='w-full'>
              Connexion
            </Button>
          </div>
          <div className='mt-4 text-center text-sm'>
            Vous n'avez pas de compte ?{" "}
            <Link to='/register' className='underline'>
              Inscrivez-vous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
