import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920')",
        }}
      />
      <div className="absolute inset-0 z-10 bg-slate-950/60" />

      <div className="container relative z-20 mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Encontre o carro perfeito para você
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
          Mais de 10.000 ofertas de veículos novos e seminovos com as melhores taxas do mercado.
        </p>

        {/* Search Box */}
        <div className="bg-background rounded-lg p-2 shadow-2xl max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex-1">
              <Select>
                <SelectTrigger className="w-full text-slate-900 h-12 border-0 focus:ring-0">
                  <SelectValue placeholder="Marca" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="toyota">Toyota</SelectItem>
                  <SelectItem value="volkswagen">Volkswagen</SelectItem>
                  <SelectItem value="fiat">Fiat</SelectItem>
                  <SelectItem value="ford">Ford</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex-1">
              <Select>
                <SelectTrigger className="w-full text-slate-900 h-12 border-0 focus:ring-0 border-l border-slate-200 md:rounded-none">
                  <SelectValue placeholder="Modelo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="corolla">Corolla</SelectItem>
                  <SelectItem value="gol">Gol</SelectItem>
                  <SelectItem value="uno">Uno</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-[1.5]">
              <Input 
                placeholder="Qual carro você procura?" 
                className="w-full h-12 border-0 text-slate-900 focus-visible:ring-0 border-l border-slate-200 md:rounded-none"
              />
            </div>

            <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90">
              <Search className="mr-2 h-5 w-5" />
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
