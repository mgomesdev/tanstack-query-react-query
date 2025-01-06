import { Metadata } from "next";

export const metadata: Metadata = { title: "React Simple", description: "React Example: Simple" };

interface LayoutProps {
   children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
   return { children };
}

export default Layout;
