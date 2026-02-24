"use client";

import { BaseModal } from "./BaseModal";

export function ModalFullscreen(props: any) {
  return <BaseModal {...props} className="h-screen w-screen rounded-none" />;
}
