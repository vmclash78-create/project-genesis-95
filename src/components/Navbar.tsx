import { Link } from "@tanstack/react-router";
import { Car, Menu, Search, User, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 font-bold text-2xl text-primary">
              <Car className="h-8 w-8" />
              <span>AutoVendas</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Início
            </Link>
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Catálogo
            </Link>
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Vender
            </Link>
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Sobre
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="gap-2">
              <User className="h-4 w-4" />
              Entrar
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Anunciar Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 space-y-4 animate-in slide-in-from-top-2">
          <Link to="/" className="block text-base font-medium py-2" onClick={() => setIsMenuOpen(false)}>
            Início
          </Link>
          <Link to="/" className="block text-base font-medium py-2" onClick={() => setIsMenuOpen(false)}>
            Catálogo
          </Link>
          <Link to="/" className="block text-base font-medium py-2" onClick={() => setIsMenuOpen(false)}>
            Vender
          </Link>
          <div className="pt-4 border-t space-y-2">
            <Button variant="outline" className="w-full gap-2 justify-start">
              <User className="h-4 w-4" />
              Entrar
            </Button>
            <Button className="w-full bg-primary hover:bg-primary/90 justify-start">
              Anunciar Grátis
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
