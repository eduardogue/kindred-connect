import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { pointsHistory } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const PointsHistory = () => {
  const navigate = useNavigate();
  const { userPoints } = useCart();

  return (
    <div className="min-h-screen bg-background max-w-[390px] mx-auto">
      {/* Header */}
      <div className="px-4 pt-4 pb-2">
        <button onClick={() => navigate(-1)} className="p-1">
          <ArrowLeft size={24} className="text-foreground" />
        </button>
      </div>

      {/* Balance */}
      <div className="px-4 mt-4 mb-6">
        <p className="text-xs text-muted-foreground">Saldo atual</p>
        <p className="text-2xl font-bold text-primary mt-1">{userPoints.toLocaleString()} pts</p>
      </div>

      {/* History */}
      <div className="px-4">
        <h2 className="text-lg font-bold text-foreground mb-4">Extrato</h2>

        {pointsHistory.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-3 border-b border-border">
            <div>
              <p className="text-sm text-foreground">{item.description}</p>
              <p className="text-xs text-muted-foreground">{item.date}</p>
            </div>
            <p className={`text-sm font-bold ${item.type === "earned" ? "text-green-600" : "text-primary"}`}>
              {item.type === "earned" ? "+" : ""}{item.points.toLocaleString()} pts
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PointsHistory;
