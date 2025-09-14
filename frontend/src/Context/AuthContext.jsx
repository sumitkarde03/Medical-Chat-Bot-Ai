// import { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [role, setRole] = useState(null); // "patient" | "doctor" | "admin"
//   const [user, setUser] = useState(null); // store email/info if needed

//   useEffect(() => {
//     // Restore from localStorage on refresh
//     const storedRole = localStorage.getItem("role");
//     const storedUser = localStorage.getItem("user");
//     if (storedRole) setRole(storedRole);
//     if (storedUser) setUser(JSON.parse(storedUser));
//   }, []);

//   const login = (userData, role) => {
//     setUser(userData);
//     setRole(role);
//     localStorage.setItem("role", role);
//     localStorage.setItem("user", JSON.stringify(userData));
//   };

//   const logout = () => {
//     setUser(null);
//     setRole(null);
//     localStorage.removeItem("role");
//     localStorage.removeItem("user");
//   };

//   return (
//     <AuthContext.Provider value={{ role, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
