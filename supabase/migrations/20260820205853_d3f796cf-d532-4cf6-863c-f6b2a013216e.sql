-- Create vehicle makes table
CREATE TABLE public.makes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Create vehicle models table
CREATE TABLE public.models (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    make_id UUID REFERENCES public.makes(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(make_id, name)
);

-- Create cars table
CREATE TABLE public.cars (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    make_id UUID REFERENCES public.makes(id) ON DELETE RESTRICT NOT NULL,
    model_id UUID REFERENCES public.models(id) ON DELETE RESTRICT NOT NULL,
    year INTEGER NOT NULL,
    price DECIMAL(12, 2) NOT NULL,
    mileage INTEGER NOT NULL,
    fuel_type TEXT NOT NULL,
    transmission TEXT NOT NULL,
    color TEXT NOT NULL,
    description TEXT,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create car images table
CREATE TABLE public.car_images (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    car_id UUID REFERENCES public.cars(id) ON DELETE CASCADE NOT NULL,
    url TEXT NOT NULL,
    is_main BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Grants
GRANT SELECT ON public.makes TO anon, authenticated;
GRANT ALL ON public.makes TO service_role;

GRANT SELECT ON public.models TO anon, authenticated;
GRANT ALL ON public.models TO service_role;

GRANT SELECT ON public.cars TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.cars TO authenticated;
GRANT ALL ON public.cars TO service_role;

GRANT SELECT ON public.car_images TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.car_images TO authenticated;
GRANT ALL ON public.car_images TO service_role;

-- RLS
ALTER TABLE public.makes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.models ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cars ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.car_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view makes" ON public.makes FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public can view models" ON public.models FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public can view published cars" ON public.cars FOR SELECT TO anon, authenticated USING (is_published = true);
CREATE POLICY "Users can manage own cars" ON public.cars FOR ALL TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Public can view car images" ON public.car_images FOR SELECT TO anon, authenticated USING (EXISTS (SELECT 1 FROM public.cars WHERE cars.id = car_images.car_id AND cars.is_published = true));
CREATE POLICY "Users can manage own car images" ON public.car_images FOR ALL TO authenticated USING (EXISTS (SELECT 1 FROM public.cars WHERE cars.id = car_images.car_id AND cars.user_id = auth.uid()));

-- Initial data for makes and models
INSERT INTO public.makes (name) VALUES ('Toyota'), ('Volkswagen'), ('Fiat'), ('Ford'), ('Chevrolet'), ('Honda'), ('Hyundai');

-- Populate models (example data)
DO $$
DECLARE
    toyota_id UUID;
    vw_id UUID;
    fiat_id UUID;
BEGIN
    SELECT id INTO toyota_id FROM public.makes WHERE name = 'Toyota';
    SELECT id INTO vw_id FROM public.makes WHERE name = 'Volkswagen';
    SELECT id INTO fiat_id FROM public.makes WHERE name = 'Fiat';

    INSERT INTO public.models (make_id, name) VALUES 
    (toyota_id, 'Corolla'), (toyota_id, 'Hilux'), (toyota_id, 'Yaris'),
    (vw_id, 'Gol'), (vw_id, 'Polo'), (vw_id, 'T-Cross'),
    (fiat_id, 'Uno'), (fiat_id, 'Argo'), (fiat_id, 'Toro');
END $$;
