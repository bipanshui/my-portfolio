import type { Metadata } from "next";
import { Contact } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact | Bipanshu Kumar",
  description: "Reach out through Gmail, GitHub, LinkedIn, or the contact form.",
};

export default function ContactPage() {
  return (
    <section className="pt-24 pb-16">
      <Contact />
    </section>
  );
}
