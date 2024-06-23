import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UserService from "@/services/userService";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    cin: "",
    email: "",
    password: "",
    role: "USER",
    city: "",
    solde: 0,
  });

  const cities = [
    "Azrou",
    "Casablanca",
    "Rabat",
    "Fes",
    "Marrakech",
    "Tanger",
    "Agadir",
    "Meknes",
    "Oujda",
    "Kenitra",
    "Tetouan",
  ];

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | { target: { value: string; name: string } }
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    try {
      // Call the register method from UserService

      // const token = localStorage.getItem("token");
      await UserService.register(formData);

      const userData = await UserService.login(
        formData.email,
        formData.password
      );
      console.log(userData);
      if (userData.token) {
        localStorage.setItem("token", userData.token);
        localStorage.setItem("role", userData.role);
        // Navigate to the user's profile page
      } else {
        console.log(userData.message);
      }

      // Clear the form fields after successful registration
      setFormData({
        name: "",
        cin: "",
        email: "",
        password: "",
        role: "",
        city: "",
        solde: 0,
      });
      alert("L'utilisateur a été enregistré avec succès.");
      navigate("/client");
    } catch (error) {
      console.error("Erreur lors de l'inscription de l'utilisateur :", error);
      alert("Une erreur s'est produite lors de l'inscription de l'utilisateur");
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
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Inscription</h1>
            <p className=" text-muted-foreground ">
              Entrez vos informations ci-dessous pour créer un compte
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex gap-5">
              <div className="grid gap-2 w-full">
                <Label htmlFor="nom">Nom complet</Label>
                {/* ehy nom doesnt work and name works */}
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="grid gap-2 w-full">
                <Label htmlFor="cin">CIN: </Label>
                {/* ehy nom doesnt work and name works */}
                <Input
                  id="cin"
                  name="cin"
                  type="text"
                  placeholder="John Doe"
                  value={formData.cin}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="ville">Choisissez votre ville</Label>
              <Select
                onValueChange={(ville) =>
                  handleInputChange({
                    target: { value: ville, name: "city" },
                  })
                }
                value={formData.city}
                name="city"
              >
                <SelectTrigger className="">
                  <SelectValue placeholder="Sélectionner votre ville" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem value={city}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                id="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Mot de passe</Label>
              </div>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                id="password"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password-confirmation">
                  Confirmer le mot de passe
                </Label>
              </div>
              <Input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                required
              />
            </div>
            {/* choix de role - update: nouveau compte aura USER par defaut */}
            {/* <input type="hidden" name="role" value={formData.role} /> */}
            {/* <div className="grid gap-2">
              <Label htmlFor="role">Choisissez votre rôle</Label>
              <Select
                onValueChange={(role) =>
                  handleInputChange({ target: { value: role, name: "role" } })
                }
                value={formData.role}
                name="role"
              >
                <SelectTrigger className="">
                  <SelectValue placeholder="Rôle" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USER">Client</SelectItem>
                  <SelectItem value="CONDUCTEUR">Conducteur</SelectItem>
                  <SelectItem value="ADMIN">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div> */}

            <Button type="submit" className="w-full">
              Créer un compte
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Vous avez déjà un compte ?{" "}
            <Link to="/login" className="underline">
              Connectez-vous
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
