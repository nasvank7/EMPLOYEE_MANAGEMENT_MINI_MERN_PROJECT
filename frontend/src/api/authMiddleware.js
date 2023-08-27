import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

export const AdminAuthMiddleware = () => {
  const adminStore = useSelector((state) => state?.admin);
  console.log(adminStore, "///////");
  if (adminStore.adminUsername) {
    const adminDetails = jwt_decode(adminStore?.adminUsername);
    console.log(adminDetails, "yyyyyyyyy");
    if (adminDetails === "nasvan") {
      return { admin: true, adminDetails };
    } else {
      return { admin: false };
    }
  } else {
    return { admin: false };
  }
};
