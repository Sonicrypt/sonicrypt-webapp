import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { DefaultGlyphButton } from "@/components/glyph-button";
import WalletButton from "@/components/wallet-button";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-screen flex-col">
      <header className="flex justify-between items-center w-full border-b bg-background px-20 z-[5000] overflow-hidden">
        <div className="flex items-center">
          <DefaultGlyphButton
            text="Sonicrypt"
            className="text-center flex items-center lowercase pl-0 font-link text-xl"
          />
          <Link href="/about" className={buttonVariants({ variant: "link" })}>
            About
          </Link>
          <Link href="/docs" className={buttonVariants({ variant: "link" })}>
            User Guide
          </Link>
          <Link href="/docs" className={buttonVariants({ variant: "link" })}>
            Docs
          </Link>
        </div>
        <div className="flex items-center">
          <WalletButton />
        </div>
      </header>
      <main className="w-full">{children}</main>
    </section>
  );
}
