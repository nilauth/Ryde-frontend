/**
 * v0 by Vercel.
 * @see https://v0.dev/t/eEBHUZtGQRA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function ClientProfile() {
  return (
    <div className="bg-muted py-12 md:py-24 flex justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Modifier le profil</CardTitle>
          <CardDescription>
            Mettez à jour vos informations de profil.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstname">Prénom</Label>
              <Input id="firstname" placeholder="Entrez votre prénom" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastname">Nom</Label>
              <Input id="lastname" placeholder="Entrez votre nom" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">Ville</Label>
              <Select id="city">
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez une ville" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fes">Fès</SelectItem>
                  <SelectItem value="casablanca">Casablanca</SelectItem>
                  <SelectItem value="tanger">Tanger</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cin">CIN</Label>
              <Input id="cin" placeholder="Entrez votre CIN" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Entrez votre email" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="old-password">Ancien mot de passe</Label>
              <Input
                id="old-password"
                type="password"
                placeholder="Entrez votre ancien mot de passe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">Nouveau mot de passe</Label>
              <Input
                id="new-password"
                type="password"
                placeholder="Entrez votre nouveau mot de passe"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Enregistrer</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
