import { FormBaptisProvider } from "@/app/context/FormBaptis";

const LoyoutRegister = ({ children }) => {
  return <FormBaptisProvider>{children}</FormBaptisProvider>;
};

export default LoyoutRegister;
