import { createFileRoute, Link } from '@tanstack/react-router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Gauge, 
  Settings2, 
  Fuel, 
  ChevronLeft, 
  Share2, 
  Heart,
  MessageCircle,
  ShieldCheck
} from 'lucide-react';

export const Route = createFileRoute('/car/$carId')({
  component: CarDetail,
});

function CarDetail() {
  const { carId } = Route.useParams();

  // Mock data for detail
  const car = {
    id: carId,
    make: "Toyota",
    model: "Corolla Altis",
    version: "2.0 Dynamic Force Flex",
    year: 2024,
    price: 189900,
    mileage: 0,
    fuel_type: "Híbrido",
    transmission: "Automático",
    color: "Prata Metálico",
    description: "Veículo 0km com garantia de fábrica. O Corolla Altis combina elegância, tecnologia e a eficiência do sistema híbrido da Toyota. Completo com teto solar, bancos em couro, Toyota Safety Sense e central multimídia de última geração.",
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1581540222194-0def2dac9f2b?auto=format&fit=crop&q=80&w=1200"
    ],
    features: ["Ar Condicionado Digital", "Direção Elétrica", "Teto Solar", "Bancos em Couro", "Câmera de Ré", "Sensor de Estacionamento", "Piloto Automático Adaptativo"],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-slate-50 py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb / Back */}
          <Link to="/catalog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ChevronLeft className="h-4 w-4" />
            Voltar para o catálogo
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Images and Description */}
            <div className="lg:col-span-2 space-y-6">
              {/* Gallery */}
              <div className="bg-white rounded-2xl overflow-hidden border shadow-sm">
                <div className="aspect-video relative">
                  <img src={car.images[0]} alt={car.model} className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-3 gap-2 p-2">
                  {car.images.map((img, i) => (
                    <div key={i} className="aspect-video rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                      <img src={img} alt={`${car.model} ${i}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Specs Grid */}
              <div className="bg-white p-6 rounded-2xl border shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-4 bg-slate-50 rounded-xl">
                  <Calendar className="h-6 w-6 text-primary mb-2" />
                  <span className="text-xs text-muted-foreground">Ano</span>
                  <span className="font-bold">{car.year}</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-slate-50 rounded-xl">
                  <Gauge className="h-6 w-6 text-primary mb-2" />
                  <span className="text-xs text-muted-foreground">KM</span>
                  <span className="font-bold">{car.mileage.toLocaleString()}</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-slate-50 rounded-xl">
                  <Fuel className="h-6 w-6 text-primary mb-2" />
                  <span className="text-xs text-muted-foreground">Combustível</span>
                  <span className="font-bold">{car.fuel_type}</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-slate-50 rounded-xl">
                  <Settings2 className="h-6 w-6 text-primary mb-2" />
                  <span className="text-xs text-muted-foreground">Câmbio</span>
                  <span className="font-bold">{car.transmission}</span>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-4">
                <h2 className="text-xl font-bold">Descrição</h2>
                <p className="text-muted-foreground leading-relaxed">{car.description}</p>
                
                <h3 className="font-bold pt-4">Itens do Veículo</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4">
                  {car.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Pricing and Contact */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-6 sticky top-24">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge variant="outline" className="mb-2">{car.make}</Badge>
                    <h1 className="text-2xl font-bold leading-tight">{car.model}</h1>
                    <p className="text-sm text-muted-foreground">{car.version}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="rounded-full"><Share2 className="h-5 w-5" /></Button>
                    <Button variant="ghost" size="icon" className="rounded-full text-rose-500"><Heart className="h-5 w-5" /></Button>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <span className="text-sm text-muted-foreground block">Preço</span>
                  <span className="text-4xl font-extrabold text-slate-900">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(car.price)}
                  </span>
                </div>

                <div className="space-y-3 pt-4">
                  <Button className="w-full h-12 text-lg font-bold gap-2 bg-green-600 hover:bg-green-700">
                    <MessageCircle className="h-5 w-5" />
                    Falar no WhatsApp
                  </Button>
                  <Button variant="outline" className="w-full h-12 font-bold">
                    Fazer Proposta
                  </Button>
                </div>

                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 flex gap-3">
                  <ShieldCheck className="h-6 w-6 text-blue-600 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-blue-900 leading-none mb-1">Compra Segura</h4>
                    <p className="text-xs text-blue-700 leading-tight">Garantia de procedência e suporte em toda a negociação.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
