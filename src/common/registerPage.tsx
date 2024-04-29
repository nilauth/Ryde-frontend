import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className='w-full h-screen lg:grid lg:grid-cols-2'>
      <div className='hidden bg-muted lg:block'>
        <img
          src='/login-image.jpg'
          alt='Image'
          width='1920'
          height='1080'
          className='h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale'
        />
      </div>
      <div className='flex items-center justify-center py-12'>
        <div className='mx-auto grid w-[350px] gap-6'>
          <div className='grid gap-2 text-center'>
            <h1 className='text-3xl font-bold'>Inscription</h1>
            <p className=' text-muted-foreground '>Entrez vos informations ci-dessous pour créer un compte</p>
          </div>
          <div className='grid gap-4'>
            <div className='flex gap-5'>
              <div className='grid gap-2 flex-1'>
                <Label htmlFor='prenom'>Prénom</Label>
                <Input id='prenom' type='text' placeholder='John' required />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='nom'>Nom</Label>
                <Input id='nom' type='text' placeholder='Doe' required />
              </div>
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>E-mail</Label>
              <Input id='email' type='email' placeholder='m@example.com' required />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Mot de passe</Label>
              </div>
              <Input id='password' type='password' placeholder='••••••••' required />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password-confirmation'>Confirmer le mot de passe</Label>
              </div>
              <Input id='password-confirmation' type='password' placeholder='••••••••' required />
            </div>
            <Button type='submit' className='w-full'>
              Créer un compte
            </Button>
          </div>
          <div className='mt-4 text-center text-sm'>
            Vous avez déjà un compte ?{" "}
            <Link to='/login' className='underline'>
              Connectez-vous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
