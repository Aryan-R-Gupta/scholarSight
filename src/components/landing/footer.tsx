import Link from "next/link";
import { SparklesIcon } from "../ui/icons";

export function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <SparklesIcon className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">ScholarSight</span>
        </div>
        <nav className="flex gap-4 sm:gap-6 text-sm">
          <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link>
          <Link href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</Link>
          <Link href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
        </nav>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ScholarSight. All rights reserved.</p>
      </div>
    </footer>
  );
}
