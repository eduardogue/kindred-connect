import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === Number(id));
  if (!product) return <div className="p-4">Produto não encontrado</div>;

  const handleAdd = () => {
    addItem(product, quantity);
    navigate("/confirm");
  };

  return (
    <div className="min-h-screen bg-background max-w-[390px] mx-auto flex flex-col">
      {/* Header */}
      <div className="px-4 pt-4 pb-2">
        <button onClick={() => navigate(-1)} className="p-1">
          <ArrowLeft size={24} className="text-foreground" />
        </button>
      </div>

      {/* Product Image */}
      <div className="flex items-center justify-center py-8">
        <span className="text-[120px] leading-none">{product.image}</span>
      </div>

      {/* Product Info */}
      <div className="px-4 flex-1">
        <h1 className="text-lg font-bold text-foreground">{product.name}</h1>
        <p className="text-sm text-muted-foreground mt-1">{product.points.toLocaleString()} pontos</p>

        {/* Quantity */}
        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center"
          >
            <Minus size={16} />
          </button>
          <span className="text-lg font-bold w-8 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Add Button */}
      <div className="px-4 pb-8 pt-4">
        <button
          onClick={handleAdd}
          className="w-full h-12 rounded-3xl bg-primary text-primary-foreground font-bold text-sm"
        >
          Adicionar — {(product.points * quantity).toLocaleString()} pts
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
