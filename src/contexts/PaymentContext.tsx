import { ReactNode, useState } from "react";
import { createContext, useContext } from "use-context-selector";

interface ChildrenType {
  children: ReactNode;
}

interface PaymentContextType {
  selectedPayment: string | null;
  handlePaymentClick: (paymentType: string) => void;
  setSelectedPayment: React.Dispatch<React.SetStateAction<string | null>>;
}

export const PaymentContext = createContext({} as PaymentContextType);

export function usePayment() {
  return useContext(PaymentContext);
}

export function PaymentProvider({ children }: ChildrenType) {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  function handlePaymentClick(paymentType: string) {
    setSelectedPayment(paymentType === selectedPayment ? null : paymentType);
  }

  return (
    <PaymentContext.Provider
      value={{ handlePaymentClick, setSelectedPayment, selectedPayment }}
    >
      {children}
    </PaymentContext.Provider>
  );
}
