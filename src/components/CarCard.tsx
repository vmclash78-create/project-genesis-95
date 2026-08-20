import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, Gauge, Settings2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface CarCardProps {
  car: {
    id: string;
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    fuel_type: string;
    transmission: string;
    image: string;
  };
}

export function CarCard({ car }: CarCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
      <Link to="/" className="block relative aspect-[16/10] overflow-hidden">
        <img 
          src={car.image} 
          alt={`${car.make} ${car.model}`}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className="bg-primary/90 text-white font-bold">Novo</Badge>
        </div>
      </Link>
      
      <CardHeader className="p-4 space-y-1">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs font-medium text-primary uppercase tracking-wider">{car.make}</p>
            <h3 className="font-bold text-lg leading-none">{car.model}</h3>
          </div>
          <span className="font-bold text-lg text-slate-900">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(car.price)}
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 pt-0 border-b">
        <div className="grid grid-cols-3 gap-2 py-2">
          <div className="flex flex-col items-center gap-1">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground">{car.year}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Gauge className="h-4 w-4 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground">{car.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Settings2 className="h-4 w-4 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground text-center line-clamp-1">{car.transmission}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4">
        <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold">
          Ver Detalhes
        </Button>
      </CardFooter>
    </Card>
  );
}
