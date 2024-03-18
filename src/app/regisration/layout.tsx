import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
export default function RegistrationLayout({ children }: LayoutProps) {
  return <div>{children}</div>;
}
