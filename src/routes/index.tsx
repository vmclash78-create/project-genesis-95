import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { CarCard } from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  // Mock data for featured cars
  const featuredCars = [
    {
      id: "1",
      make: "Toyota",
      model: "Corolla Altis",
      year: 2024,
      price: 189900,
      mileage: 0,
      fuel_type: "Híbrido",
      transmission: "Automático",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "2",
      make: "Volkswagen",
      model: "Polo Highline",
      year: 2023,
      price: 115900,
      mileage: 12500,
      fuel_type: "Flex",
      transmission: "Automático",
      image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "3",
      make: "Chevrolet",
      model: "Onix Premier",
      year: 2024,
      price: 112900,
      mileage: 0,
      fuel_type: "Flex",
      transmission: "Automático",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "4",
      make: "Honda",
      model: "Civic RS",
      year: 2024,
      price: 259900,
      mileage: 0,
      fuel_type: "Híbrido",
      transmission: "Automático",
      image: "https://images.unsplash.com/photo-1606148384992-665e3153c393?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* Featured Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Veículos em Destaque</h2>
              <p className="text-muted-foreground mt-2">Confira as melhores ofertas selecionadas para você.</p>
            </div>
            <Button variant="ghost" className="hidden sm:flex items-center gap-1 group">
              Ver Catálogo Completo
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Button variant="outline" className="w-full">
              Ver Catálogo Completo
            </Button>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Por que escolher a AutoVendas?</h2>
              <p className="text-muted-foreground">Oferecemos a melhor experiência para quem quer comprar ou vender um veículo.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Procedência Garantida", description: "Todos os veículos passam por uma rigorosa inspeção técnica antes de serem anunciados." },
                { title: "Melhores Taxas", description: "Parcerias com os principais bancos para oferecer as menores taxas de financiamento do mercado." },
                { title: "Negociação Segura", description: "Processo 100% transparente com suporte jurídico para garantir a segurança da sua transação." },
              ].map((item, i) => (
                <div key={i} className="bg-background p-8 rounded-xl border hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                    <Car className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Simple Car wrapper just to avoid Car not found error in Index component
function Car(props: any) {
  return <CarIcon {...props} />;
}
import { Car as CarIcon } from "lucide-react";
