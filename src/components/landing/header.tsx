import Link from "next/link";
import { Button } from "../ui/button";
import { SparklesIcon } from "../ui/icons";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center">
          <SparklesIcon className="h-6 w-6 mr-2 text-primary" />
          <span className="font-bold text-lg">ScholarSight</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#features" className="text-muted-foreground transition-colors hover:text-foreground">Features</Link>
          <Link href="#how-it-works" className="text-muted-foreground transition-colors hover:text-foreground">How It Works</Link>
          <Link href="#testimonials" className="text-muted-foreground transition-colors hover:text-foreground">Testimonials</Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/dashboard">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
