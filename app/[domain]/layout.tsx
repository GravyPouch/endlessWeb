export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" max-w-screen-lg mx-auto m-5 p-10 border-2 border-dotted">
      {children}
    </div>
  );
}
