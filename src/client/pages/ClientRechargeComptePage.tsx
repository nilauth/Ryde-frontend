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
import { useEffect, useState } from "react";
import UserService from "@/services/userService";

const ClientRechargeComptePage = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const [formData, setFormData] = useState({
    id: "",
    nom: "",
    prenom: "",
    nomClient: "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    cvv: "",
    clientId: "",
    solde: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UserService.recharcherCompte(
        {
          ...formData,
          nomClient: formData.nom + " " + formData.prenom,
          dateExpiration: `${formData.expirationMonth}/${formData.expirationYear}`,
        },
        localStorage.getItem("token") || ""
      );

      console.log(await myFunction());
    } catch (error) {
      console.error("Error recharging account:", error);
    }
  };

  const myFunction = async () => {
    try {
      const user = await UserService.getCurrentUser();
      console.log(user);
      return user;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await UserService.getCurrentUser();
        setCurrentUser(user);
        setFormData((prevFormData) => ({
          ...prevFormData,
          clientId: user.id,
          nom: user.nom,
          prenom: user.prenom,
        }));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center h-[calc(100vh-74px)] bg-muted">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Recharge de solde</CardTitle>
          <CardDescription>
            Entrez les données de votre carte de crédit
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nom">Nom</Label>
              <Input
                id="nom"
                name="nom"
                placeholder="Nom"
                type="text"
                value={formData.nom}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prenom">Prénom</Label>
              <Input
                id="prenom"
                name="prenom"
                placeholder="Prénom"
                type="text"
                value={formData.prenom}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Numéro de carte</Label>
            <Input
              id="cardNumber"
              name="cardNumber"
              placeholder="0000 0000 0000 0000"
              type="text"
              value={formData.cardNumber}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expirationMonth">Date d'expiration</Label>
              <div className="flex gap-2">
                <Select
                  onValueChange={(value) =>
                    handleSelectChange("expirationMonth", value)
                  }
                >
                  <SelectTrigger id="expirationMonth">
                    <SelectValue placeholder="MM" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => (
                      <SelectItem
                        key={i + 1}
                        value={String(i + 1).padStart(2, "0")}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  onValueChange={(value) =>
                    handleSelectChange("expirationYear", value)
                  }
                >
                  <SelectTrigger id="expirationYear">
                    <SelectValue placeholder="AAAA" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => (
                      <SelectItem key={2024 + i} value={2024 + i}>
                        {2024 + i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                name="cvv"
                placeholder="123"
                type="text"
                value={formData.cvv}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="solde">Solde</Label>
            <Input
              id="solde"
              name="solde"
              placeholder="Entrez le solde"
              type="number"
              value={formData.solde}
              onChange={handleChange}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleSubmit}>
            Recharger Compte
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ClientRechargeComptePage;
