import { Button } from "@/components/ui/button";
import UserService from "@/services/userService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

export default function Component() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    driverId: null, // Initialize driverId with null
    villeDepart: "",
    villeArriv: "",
    heureDepart: "",
    date: "",
    heureArriv: "",
    prix: 50.0,
    placeDispo: "",
    placeInitiale: "",
    statusOffres: true,
    statusVoyages: true,
  });

  const cities = [
    "Casablanca",
    "Rabat",
    "Fes",
    "Marrakech",
    "Tangier",
    "Agadir",
    "Meknes",
    "Oujda",
    "Kenitra",
    "Tetouan",
  ];

  function convertTimeToISO(timeString) {
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    return date.toISOString();
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await UserService.getCurrentUser();
        setCurrentUser(user);
        setFormData((prevFormData) => ({
          ...prevFormData,
          driverId: user?.id || null, // Update driverId based on currentUser
        }));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UserService.ajouterOffre(
        {
          ...formData,
          placeInitiale: formData.placeDispo,
          id: uuidv4(),
        },
        localStorage.getItem("token") || ""
      );

      console.log(await myFunction());
    } catch (error) {
      console.error("Error adding ride:", error);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-2xl border">
        <h1 className="text-4xl  mb-4 dark:text-gray-100 uppercase tracking-wide font-extrabold text-center pb-5">
          Créer une nouvelle offre
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="villeDepart"
            >
              Ville de départ
            </label>
            <select
              className="w-full p-2 border border-slate-500 rounded-md bg-white"
              id="villeDepart"
              name="villeDepart"
              value={formData.villeDepart}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionnez une ville</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="villeArriv"
            >
              Ville d'arrivée
            </label>
            <select
              className="w-full p-2 border border-slate-500 rounded-md bg-white"
              id="villeArriv"
              name="villeArriv"
              value={formData.villeArriv}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionnez une ville</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="date"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full p-2 border border-slate-500 rounded-md"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="heureDepart"
            >
              Heure de départ
            </label>
            <input
              name="heureDepart"
              id="heureDepart"
              type="time"
              className="w-full p-2 border border-slate-500 rounded-md"
              value={formData.heureDepart}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="heureArriv"
            >
              Heure d'arrivée
            </label>
            <input
              name="heureArriv"
              id="heureArriv"
              type="time"
              className="w-full p-2 border border-slate-500 rounded-md"
              value={formData.heureArriv}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-x-16">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="prix"
              >
                Prix (DHS)
              </label>
              <div className="flex items-center space-x-2">
                <input
                  name="prix"
                  id="prix"
                  type="number"
                  className="p-2 border border-slate-500 rounded-md"
                  value={formData.prix}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="placeDispo"
              >
                Nombre de places
              </label>
              <input
                name="placeDispo"
                id="placeDispo"
                type="number"
                className="p-2 border border-slate-500 rounded-md"
                value={formData.placeDispo}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <Button
            className="w-full text-2xl font-bold py-6"
            type="submit"
            onClick={() =>
              toast("Offre créée avec succès!", {
                description:
                  "Vous pouvez maintenant visualiser vos offres créées.",
                position: "top-right",
                action: {
                  label: "Mes offres",
                  onClick: () => navigate("/conducteur/mes-offres"),
                },
              })
            }
          >
            Ajouter offre
          </Button>
        </form>
      </div>
    </div>
  );
}
