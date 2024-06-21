/* eslint-disable no-useless-catch */
import axios from "axios";

type UserDataType = {
  token: string;
  role: string;
  message: string;
};

interface FormDataType {
  name: string;
  cin: string;
  email: string;
  password: string;
  role: string;
  city: string;
}

// type OffreDataType = {
//   id: string;
//   date: string;
//   driverId: string;
//   placeDispo: string;
//   placeInitiale: string;
//   prix: string;
//   status: boolean;
//   villeDepartId: string;
//   villeArrivId: string;
//   heureArriv: string;
//   heureDepart: string;
// };

class UserService {
  static BASE_URL = "http://localhost:8081";

  static async login(email: string, password: string) {
    try {
      const response = await axios.post(`${UserService.BASE_URL}/auth/login`, {
        email,
        password,
      });
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async register(userData: FormDataType) {
    try {
      const response = await axios.post(
        `${UserService.BASE_URL}/auth/register`,
        userData,
        {
          // headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async getAllUsers(token: string) {
    try {
      const response = await axios.get(
        `${UserService.BASE_URL}/admin/get-all-users`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async getYourProfile(token: string) {
    try {
      const response = await axios.get(
        `${UserService.BASE_URL}/adminuser/get-profile`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async getUserById(userId: number, token: string) {
    try {
      const response = await axios.get(
        `${UserService.BASE_URL}/admin/get-users/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async deleteUser(userId: number, token: string) {
    try {
      const response = await axios.delete(
        `${UserService.BASE_URL}/admin/delete/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async devenirConducteur(driverId: number, token: string) {
    try {
      const response = await axios.get(
        `${UserService.BASE_URL}/user/request-driver/${driverId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async updateUser(
    userId: number,
    userData: UserDataType,
    token: string
  ) {
    try {
      const response = await axios.put(
        `${UserService.BASE_URL}/admin/update/${userId}`,
        userData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  /**AUTHENTICATION CHECKER */

  static async getCurrentUser() {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `${UserService.BASE_URL}/user/current-user`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }

  static isAuthenticated() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  static isAdmin() {
    const role = localStorage.getItem("role");
    return role === "ADMIN";
  }

  static isUser() {
    const role = localStorage.getItem("role");
    return role === "USER";
  }

  static adminOnly() {
    return this.isAuthenticated() && this.isAdmin();
  }

  // Offres service

  static async ajouterOffre(offreData: any, token: string) {
    try {
      console.log(offreData, token);
      const response = await axios.post(
        `${UserService.BASE_URL}/driver/offers/add`,
        offreData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  // admin only
  static async getAllOffres(token: string) {
    try {
      const response = await axios.get(`${UserService.BASE_URL}/user/offers`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async getAllTrajets(token: string) {
    try {
      const response = await axios.get(
        `${UserService.BASE_URL}/admin/get-all-trajets`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  // client only
  static async getAllOffresFiltered(
    {
      villeDep,
      villeArrv,
      date,
    }: { villeDep: string; villeArrv: string; date: string },
    token: string
  ) {
    try {
      const response = await axios.post(
        `${UserService.BASE_URL}/user/offersFiltre`,
        {
          villeDep: villeDep,
          villeArrv: villeArrv,
          date: date,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async recharcherCompte(soldeData: any, token: string) {
    try {
      console.log(soldeData, token);
      const response = await axios.post(
        `${UserService.BASE_URL}/user/add-solde`,
        soldeData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  // conducteur methods

  static async getAllOffresClient(userId: number, token: string) {
    try {
      const response = await axios.get(
        `${UserService.BASE_URL}/user/getAll-reservation-client/${userId}`,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async getAllOffresConducteur(userId: number, token: string) {
    try {
      const response = await axios.get(
        `${UserService.BASE_URL}/driver/get-offers/${userId}`,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  // delete reservation
  static async deleteReservation(
    idReservation: number,
    prix: number,
    token: string
  ) {
    try {
      const response = await axios.delete(
        `${this.BASE_URL}/user/delete-reservation/${idReservation}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          data: { prix: prix },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async fermerOffre(idOffre: number, token: string) {
    try {
      const response = await axios.get(
        `${this.BASE_URL}/driver/closeOffer/${idOffre}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async cloturerVoyage(idOffre: number, token: string) {
    try {
      const response = await axios.get(
        `${this.BASE_URL}/driver/closeVoyage/${idOffre}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(token);
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  // demandes
  static async getAllDemandes(token: string) {
    try {
      const response = await axios.get(
        `${UserService.BASE_URL}/admin/get-all-demande`,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async accepterDemande(demandeId: string, token: string) {
    try {
      const response = await axios.get(
        `${UserService.BASE_URL}/admin/becomeDriver/${demandeId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  // Forgot Password functionality

  static async requestPasswordReset(email: string) {
    try {
      const response = await axios.post(
        `${UserService.BASE_URL}/forgotPassword/verifyMail/${email}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async verifyOtp(email: string, otp: string) {
    try {
      const response = await axios.post(
        `${UserService.BASE_URL}/forgotPassword/verifyOtp/${otp}/${email}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async resetPassword(email: string, password: string, repeatPassword: string) {
    try {
      const response = await axios.post(
        `${UserService.BASE_URL}/forgotPassword/changePassword/${email}`,
        {
          password: password,
          repeatPassword: repeatPassword,
        }
      );
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export default UserService;
