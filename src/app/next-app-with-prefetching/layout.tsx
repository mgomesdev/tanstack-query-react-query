import ReactQueryProvider from "./ReactQueryProvider";

export default function Layout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="pt-BR">
         <body>
            <ReactQueryProvider>{children}</ReactQueryProvider>
         </body>
      </html>
   );
}
