import { Metadata } from "next";
import ProviderPersist from "./core/ProviderPersist";

export const metadata: Metadata = {
   title: "React Basic",
   description: "React Example: Basic",
};

interface LayoutReactBasicProps {
   children: React.ReactNode;
}

function LayoutReactBasic({ children }: LayoutReactBasicProps) {
   return <ProviderPersist>{children}</ProviderPersist>;
}

export default LayoutReactBasic;
