import { ReactNode, useState } from "react";
import { createContext, useContext } from "use-context-selector";

interface ChildrenType {
  children: ReactNode;
}

interface AddressData {
  logradouro?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  numero?: string;
  complemento?: string;
}

interface AddressContextType {
  address: AddressData | null;
  setAddressData: (data: AddressData | null) => void;
  setNumber: (numero: string) => void;
  number: string;
}

export const AddressContext = createContext({} as AddressContextType);

export function useAddress() {
  return useContext(AddressContext);
}

export function AddressProvider({ children }: ChildrenType) {
  const [address, setAddress] = useState<AddressData | null>(null);
  const [number, setNumber] = useState<string>("");

  const setAddressData = (data: AddressData | null) => {
    setAddress(data);
  };

  return (
    <AddressContext.Provider
      value={{ setAddressData, address, setNumber, number }}
    >
      {children}
    </AddressContext.Provider>
  );
}
