import { createFileRoute } from '@tanstack/react-router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CarCard } from '@/components/CarCard';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';

export const Route = createFileRoute('/catalog')({
  component: Catalog,
  head: () => ({
    title: 'Catálogo de Veículos | AutoVendas',
    meta: [
      { name: 'description', content: 'Explore nosso catálogo completo de veículos novos e seminovos.' },
      { property: 'og:title', content: 'Catálogo de Veículos | AutoVendas' },
      { property: 'og:type', content: 'website' },
    ],
  }),
});

function Catalog() {
  const [priceRange, setPriceRange] = useState([0, 300000]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Mock data for catalog
  const allCars = [
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
    {
      id: "5",
      make: "Hyundai",
      model: "HB20 Platinum",
      year: 2023,
      price: 95900,
      mileage: 8500,
      fuel_type: "Flex",
      transmission: "Manual",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "6",
      make: "Fiat",
      model: "Pulse Audace",
      year: 2024,
      price: 129900,
      mileage: 0,
      fuel_type: "Flex",
      transmission: "Automático",
      image: "https://images.unsplash.com/photo-1632245889027-ef2e66b2a0e7?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar - Desktop */}
            <aside className="hidden md:block w-64 shrink-0 space-y-6">
              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filtros
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Marca</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Todas" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="toyota">Toyota</SelectItem>
                        <SelectItem value="volkswagen">Volkswagen</SelectItem>
                        <SelectItem value="chevrolet">Chevrolet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block">Ano Mínimo</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Qualquer" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-semibold">Preço Máximo</label>
                    <span className="text-xs text-primary font-bold">R$ {priceRange[1]?.toLocaleString() ?? '0'}</span>
                  </div>
                  <Slider 
                    defaultValue={[300000]} 
                    max={500000} 
                    step={5000} 
                    onValueChange={(val) => {
                      if (val[0] !== undefined) {
                        setPriceRange([0, val[0]]);
                      }
                    }}
                  />
                  </div>

                  <Button className="w-full">Aplicar Filtros</Button>
                  <Button variant="ghost" className="w-full text-xs">Limpar Tudo</Button>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 space-y-6">
              {/* Search and Sort */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl border shadow-sm">
                <div className="relative w-full sm:max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar por modelo, marca..." className="pl-10" />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Button 
                    variant="outline" 
                    className="md:hidden flex-1 gap-2"
                    onClick={() => setIsFilterOpen(true)}
                  >
                    <Filter className="h-4 w-4" />
                    Filtros
                  </Button>
                  <Select>
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Mais recentes</SelectItem>
                      <SelectItem value="price-asc">Menor preço</SelectItem>
                      <SelectItem value="price-desc">Maior preço</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {allCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Filter Sheet (Overlay) */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 md:hidden">
          <div className="absolute right-0 top-0 h-full w-[80%] bg-white p-6 animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-xl">Filtros</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsFilterOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            {/* Reuse filter content here */}
            <div className="space-y-6">
               <div>
                  <label className="text-sm font-semibold mb-2 block">Marca</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Todas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="toyota">Toyota</SelectItem>
                      <SelectItem value="volkswagen">Volkswagen</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full mt-8" onClick={() => setIsFilterOpen(false)}>Ver Resultados</Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
