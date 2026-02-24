"use client";

import { BaseModal } from "./BaseModal";

export function ModalScrollable({ children, ...props }: any) {
  return (
    <BaseModal {...props} className="max-w-2xl max-h-[80vh] overflow-hidden">
      <div className="max-h-[60vh] overflow-y-auto pr-2">{children}</div>
    </BaseModal>
  );
}
