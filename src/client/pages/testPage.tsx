import { AuthProvider } from "@/context/AuthContext";

const testPage = () => {
  return (
    <AuthProvider>
      <div></div>
    </AuthProvider>
  );
};

export default testPage;
