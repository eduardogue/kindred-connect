import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const OrderConfirm = () => {
  const navigate = useNavigate();
  const { items, totalPoints, userPoints, confirmOrder } = useCart();

  const handleConfirm = () => {
    confirmOrder();
    navigate("/success");
  };

  return (
    <div className="min-h-screen bg-background max-w-[390px] mx-auto flex flex-col">
      {/* Header */}
      <div className="px-4 pt-4 pb-2">
        <button onClick={() => navigate(-1)} className="p-1">
          <ArrowLeft size={24} className="text-foreground" />
        </button>
      </div>

      {/* Store Image */}
      <div className="w-full h-40 bg-muted flex items-center justify-center">
        <div className="text-center">
          <span className="text-4xl">🏪</span>
          <p className="text-xs text-muted-foreground mt-2">McDonald's - Av. Paulista</p>
        </div>
      </div>

      {/* Order Summary */}
      <div className="px-4 py-4 flex-1">
        <h2 className="text-lg font-bold text-foreground mb-4">Resumo do pedido</h2>

        {items.map((item) => (
          <div key={item.product.id} className="flex items-center justify-between py-3 border-b border-border">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{item.product.image}</span>
              <div>
                <p className="text-sm text-foreground">{item.product.name}</p>
                <p className="text-xs text-muted-foreground">Qtd: {item.quantity}</p>
              </div>
            </div>
            <p className="text-sm font-bold text-foreground">
              {(item.product.points * item.quantity).toLocaleString()} pts
            </p>
          </div>
        ))}

        <div className="flex items-center justify-between mt-4">
          <p className="text-sm font-bold text-foreground">Total</p>
          <p className="text-sm font-bold text-primary">{totalPoints.toLocaleString()} pts</p>
        </div>

        <div className="flex items-center justify-between mt-2">
          <p className="text-xs text-muted-foreground">Saldo disponível</p>
          <p className="text-xs text-muted-foreground">{userPoints.toLocaleString()} pts</p>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="px-4 pb-8 pt-4">
        <button
          onClick={handleConfirm}
          disabled={totalPoints > userPoints}
          className="w-full h-12 rounded-3xl bg-primary text-primary-foreground font-bold text-sm disabled:opacity-50"
        >
          Confirmar pedido
        </button>
      </div>
    </div>
  );
};

export default OrderConfirm;
