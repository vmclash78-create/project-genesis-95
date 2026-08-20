# Site de Vendas de Carros

Monte um site de vendas de carros profissional com catálogo, detalhes do veículo e gestão de anúncios.

## Usuário e Fluxo
- **Compradores**: Navegam por marcas, modelos e categorias. Visualizam fotos, especificações e entram em contato.
- **Vendedores (Loja/Admin)**: Gerenciam o inventário de veículos.
- **Autenticação**: Login via Lovable Cloud (Email/Google) para gerenciar anúncios.

## Funcionalidades
- Catálogo de veículos com filtros (Marca, Ano, Preço, Tipo).
- Páginas de detalhes do veículo com galeria de imagens.
- Dashboard administrativo para gerenciar anúncios.
- Sistema de mensagens ou botão de contato via WhatsApp.
- Destaques na home (Ofertas da Semana, Novos na Loja).

## Detalhes Técnicos
- **Banco de Dados**: Tabelas `cars`, `car_images`, `makes`, `models`.
- **Segurança**: RLS para permitir leitura pública de anúncios ativos, mas edição apenas para o dono/admin.
- **UI**: Componentes Shadcn UI, ícones Lucide, Tailwind CSS.
- **Framework**: React 19 com TanStack Start.

## Etapas de Implementação
1. **Database**: Criar tabelas para marcas, modelos e veículos com RLS e GRANTs.
2. **Layout**: Navbar e Footer com visual moderno e automotivo.
3. **Página Inicial**: Hero section com busca e grid de veículos em destaque.
4. **Catálogo**: Página de listagem com filtros avançados.
5. **Detalhes**: Visualização completa do carro com specs técnicas.
6. **Admin**: CRUD de veículos (adicionar, editar, remover fotos).
