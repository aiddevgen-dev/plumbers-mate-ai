"use client";

import { createContext, useContext, useState } from "react";
import ConsultationModal from "./ConsultationModal";

const ConsultationContext = createContext<() => void>(() => {});

export function useConsultation() {
  return useContext(ConsultationContext);
}

export default function ConsultationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ConsultationContext value={() => setIsOpen(true)}>
      {children}
      <ConsultationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ConsultationContext>
  );
}
