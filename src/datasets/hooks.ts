import { useCallback, useState } from "react";

type OpenModal = () => void;
type CloseModal = () => void;

export const useModalState = (): [Boolean, OpenModal, CloseModal] => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return [isOpen, open, close];
};
