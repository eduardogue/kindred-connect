import { useNavigate } from "react-router-dom";
import { MapPin, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const ProductCard = ({ product, onClick }: { product: typeof products[0]; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="flex-shrink-0 w-[110px] h-[140px] rounded-xl bg-card flex flex-col items-center justify-between p-3"
    style={{ boxShadow: "0px 2px 8px rgba(0,0,0,0.08)" }}
  >
    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
      <span className="text-[10px]">★</span>
    </div>
    <span className="text-[32px] leading-none">{product.image}</span>
    <div className="text-center">
      <p className="text-xs font-normal text-foreground leading-tight truncate w-full">{product.name}</p>
      <p className="text-xs text-muted-foreground">{product.points.toLocaleString()} pts</p>
    </div>
  </button>
);

const Home = () => {
  const navigate = useNavigate();
  const { userPoints } = useCart();

  const category6k = products.filter((p) => p.category === "6000");
  const category18k = products.filter((p) => p.category === "18000");

  return (
    <div className="min-h-screen bg-background max-w-[390px] mx-auto">
      {/* Header */}
      <div className="px-4 pt-4 pb-2">
        <p className="text-xs text-muted-foreground">Retirar em</p>
        <div className="flex items-center gap-2 mt-1">
          <MapPin size={16} className="text-muted-foreground flex-shrink-0" />
          <p className="text-sm text-foreground font-normal">Av. Paulista, 1234 - São Paulo</p>
        </div>
      </div>

      {/* Points Balance */}
      <div className="px-4 mt-4 mb-4">
        <p className="text-2xl font-bold text-primary">{userPoints.toLocaleString()} pts</p>
        <p className="text-xs text-muted-foreground mt-1">Seu saldo de pontos</p>
      </div>

      {/* Category 1 */}
      <div className="px-4 mb-2">
        <h2 className="text-lg font-bold text-foreground mb-2">Até 6.000 pts</h2>
      </div>
      <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
        {category6k.map((p) => (
          <ProductCard key={p.id} product={p} onClick={() => navigate(`/product/${p.id}`)} />
        ))}
      </div>

      {/* Category 2 */}
      <div className="px-4 mt-6 mb-2">
        <h2 className="text-lg font-bold text-foreground mb-2">Até 18.000 pts</h2>
      </div>
      <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
        {category18k.map((p) => (
          <ProductCard key={p.id} product={p} onClick={() => navigate(`/product/${p.id}`)} />
        ))}
      </div>

      {/* Points history link */}
      <button
        onClick={() => navigate("/points")}
        className="flex items-center justify-between w-full px-4 mt-4 mb-8 py-3"
      >
        <span className="text-sm text-foreground">Ver extrato de pontos</span>
        <ChevronRight size={16} className="text-muted-foreground" />
      </button>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-card border-t border-border flex justify-around py-3">
        <NavItem icon="🏠" label="Início" active />
        <NavItem icon="🎁" label="Ofertas" />
        <NavItem icon="📋" label="Pedidos" />
        <NavItem icon="👤" label="Perfil" />
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active }: { icon: string; label: string; active?: boolean }) => (
  <div className="flex flex-col items-center gap-1">
    <span className="text-lg">{icon}</span>
    <span className={`text-[10px] ${active ? "text-primary font-bold" : "text-muted-foreground"}`}>{label}</span>
  </div>
);

export default Home;
