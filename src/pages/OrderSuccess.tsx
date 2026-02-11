import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  return (
    <div className="min-h-screen bg-background max-w-[390px] mx-auto flex flex-col items-center justify-center px-4">
      <div
        className="flex flex-col items-center gap-4 transition-all duration-300"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.8)",
        }}
      >
        <CheckCircle size={64} className="text-green-500" />
        <h1 className="text-lg font-bold text-foreground text-center">Pedido confirmado!</h1>
        <p className="text-sm text-muted-foreground text-center">
          Retire seu pedido no restaurante selecionado.
        </p>
      </div>

      <button
        onClick={() => navigate("/")}
        className="w-full h-12 rounded-3xl bg-primary text-primary-foreground font-bold text-sm mt-12"
      >
        Voltar ao início
      </button>
    </div>
  );
};

export default OrderSuccess;
