"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  ArrowRight,
  Check,
  Clock,
  Users,
  Heart,
  Play,
  Star,
  TrendingUp,
  Zap,
  Target,
  MessageCircle,
} from "lucide-react";

// --- Componente de Timer Regressivo (Inline) ---
interface CountdownTimerProps {
  initialSeconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialSeconds }) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <span className="font-black text-white">
      {formatTime(timeLeft)}
    </span>
  );
};

// --- Estilos Globais (Inline) ---
const globalStyles = `
  /* Reset e Base Mobile-First */
  * {
    box-sizing: border-box !important;
    max-width: 100% !important;
  }

  html {
    overflow-x: hidden !important;
    max-width: 100vw !important;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    overflow-x: hidden !important;
    max-width: 100vw !important;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  /* Padding e Spacing */
  .mobile-padding {
    padding: clamp(1rem, 4vw, 2rem) clamp(0.75rem, 3vw, 1rem);
  }

  .mobile-offer-padding {
    padding: clamp(1rem, 4vw, 2rem);
  }

  .mobile-urgency-padding {
    padding: clamp(0.75rem, 3vw, 1rem);
  }

  .mobile-guarantee-padding {
    padding: clamp(1rem, 4vw, 1.5rem);
  }

  .mobile-final-padding {
    padding: clamp(1rem, 4vw, 1.5rem);
  }

  /* Tipografia */
  .mobile-headline {
    font-size: clamp(1.5rem, 6vw, 3rem);
    line-height: 1.2;
    font-weight: 900;
  }

  .mobile-section-title {
    font-size: clamp(1.25rem, 5vw, 2rem);
    line-height: 1.3;
  }

  .mobile-subsection-title {
    font-size: clamp(1.125rem, 4vw, 1.5rem);
    line-height: 1.3;
  }

  .mobile-offer-title {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    line-height: 1.2;
  }

  .mobile-final-title {
    font-size: clamp(1.5rem, 5vw, 2rem);
    line-height: 1.2;
  }

  .mobile-guarantee-title {
    font-size: clamp(1.125rem, 4vw, 1.5rem);
    line-height: 1.3;
  }

  .mobile-description {
    font-size: clamp(1rem, 3vw, 1.125rem);
    line-height: 1.5;
  }

  .mobile-info-text {
    font-size: clamp(0.875rem, 3vw, 1rem);
    line-height: 1.4;
  }

  .mobile-small-text {
    font-size: clamp(0.75rem, 2.5vw, 0.875rem);
    line-height: 1.4;
  }

  .mobile-stats-number {
    font-size: clamp(1.25rem, 4vw, 1.5rem);
    line-height: 1.2;
  }

  .mobile-stats-text {
    font-size: clamp(0.75rem, 2.5vw, 0.875rem);
    line-height: 1.3;
  }

  .mobile-countdown {
    font-size: clamp(1.5rem, 5vw, 2rem);
    line-height: 1.2;
  }

  .mobile-urgency-text {
    font-size: clamp(0.875rem, 3vw, 1.125rem);
    line-height: 1.3;
  }

  .mobile-guarantee-text {
    font-size: clamp(1rem, 3vw, 1.125rem);
    line-height: 1.4;
  }

  .mobile-guarantee-desc {
    font-size: clamp(0.875rem, 3vw, 1rem);
    line-height: 1.4;
  }

  .mobile-final-subtitle {
    font-size: clamp(1rem, 3vw, 1.25rem);
    line-height: 1.4;
  }

  .mobile-final-warning {
    font-size: clamp(0.75rem, 2.5vw, 0.875rem);
    line-height: 1.3;
  }

  /* Ícones */
  .mobile-icon-size {
    width: clamp(1.25rem, 4vw, 1.5rem);
    height: clamp(1.25rem, 4vw, 1.5rem);
  }

  .mobile-social-icon {
    width: clamp(0.75rem, 2.5vw, 1rem);
    height: clamp(0.75rem, 2.5vw, 1rem);
  }

  .mobile-shield-icon {
    width: clamp(3rem, 8vw, 4rem);
    height: clamp(3rem, 8vw, 4rem);
  }

  /* Bordas */
  .mobile-border-yellow {
    border: clamp(2px, 1vw, 4px) solid rgb(250 204 21) !important;
  }

  .mobile-border-green {
    border: clamp(2px, 1vw, 4px) solid rgb(34 197 94) !important;
  }

  /* Botões */
  .mobile-cta-offer,
  .mobile-cta-final {
    width: 100% !important;
    box-sizing: border-box !important;
    touch-action: manipulation !important;
    -webkit-tap-highlight-color: transparent !important;
    user-select: none !important;
    transition: all 0.3s ease !important;
  }

  .mobile-cta-offer {
    background: rgb(234 179 8) !important;
    color: black !important;
    font-weight: 900 !important;
    padding: clamp(1rem, 4vw, 1.5rem) clamp(1rem, 4vw, 2rem) !important;
    border-radius: 9999px !important;
    font-size: clamp(1.125rem, 4vw, 1.5rem) !important;
    border: clamp(2px, 1vw, 4px) solid white !important;
    min-height: clamp(3.75rem, 14vw, 4.5rem) !important;
    max-width: 32rem !important;
    margin: 0 auto !important;
  }

  .mobile-cta-final {
    background: rgb(234 179 8) !important;
    color: black !important;
    font-weight: 900 !important;
    padding: clamp(1rem, 4vw, 1.5rem) clamp(1rem, 4vw, 2rem) !important;
    border-radius: 9999px !important;
    font-size: clamp(1.125rem, 4vw, 1.5rem) !important;
    border: clamp(2px, 1vw, 4px) solid white !important;
    min-height: clamp(3.75rem, 14vw, 4.5rem) !important;
    max-width: 28rem !important;
    margin: 0 auto !important;
  }

  .mobile-cta-offer:hover,
  .mobile-cta-final:hover {
    background: rgb(202 138 4) !important;
    transform: scale(1.02) !important;
  }

  .mobile-cta-final:hover {
    transform: scale(1.05) !important;
  }

  .mobile-cta-offer-text,
  .mobile-cta-final-text {
    font-size: clamp(1rem, 3.5vw, 1.25rem) !important;
    line-height: 1.2 !important;
    font-weight: 800 !important;
  }

  /* Performance */
  .bg-gradient-to-r,
  .bg-gradient-to-br {
    will-change: transform !important;
    backface-visibility: hidden !important;
    transform: translateZ(0) !important;
  }

  /* Texto */
  .break-words {
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
    word-break: break-word !important;
  }

  /* Imagens */
  img,
  video {
    max-width: 100% !important;
    height: auto !important;
    display: block !important;
  }

  /* Container limits */
  .min-h-screen {
    max-width: 100vw !important;
    width: 100% !important;
  }

  .max-w-4xl {
    max-width: 100% !important;
    width: 100% !important;
  }

  @media (min-width: 640px) {
    .max-w-4xl { max-width: 56rem !important; }
    .max-w-3xl { max-width: 48rem !important; }
    .max-w-2xl { max-width: 42rem !important; }
    .max-w-md { max-width: 28rem !important; }
  }

  /* Dark mode compatibility */
  @media (prefers-color-scheme: dark) {
    .bg-green-50 {
      background-color: rgb(20 83 45) !important;
    }

    .text-green-800 {
      color: rgb(187 247 208) !important;
    }

    .text-green-700 {
      color: rgb(134 239 172) !important;
    }
  }

  /* Mobile pequeno */
  @media (max-width: 375px) {
    .mobile-headline {
      font-size: 1.25rem !important;
    }

    .mobile-section-title {
      font-size: 1.125rem !important;
    }

    .mobile-offer-title {
      font-size: 1.25rem !important;
    }
  }

  @media (min-width: 640px) {
    .mobile-padding {
      padding: 2rem 1rem !important;
    }
  }

  /* Glassmorphism effect */
  .glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .glass-strong {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  /* Animations */
  @keyframes shine {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  .animate-shine {
    background: linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.1) 100%);
    background-size: 200% 100%;
    animation: shine 3s infinite;
  }

  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
    50% { box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.9); }
  }
  .animate-pulse-glow {
    animation: pulse-glow 2s infinite;
  }

  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    15% { transform: scale(1.05); }
    30% { transform: scale(1); }
    45% { transform: scale(1.05); }
    60% { transform: scale(1); }
  }
  .animate-heartbeat {
    animation: heartbeat 1.5s infinite;
  }

  @keyframes urgent-tick {
    0%, 100% { transform: translateY(0) scale(1); }
    25% { transform: translateY(-5px) scale(1.1); }
    50% { transform: translateY(0) scale(1); }
    75% { transform: translateY(5px) scale(0.9); }
  }
  .animate-urgent-tick {
    animation: urgent-tick 1s infinite;
  }

  @keyframes messageSlideIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .message-bubble {
    animation: messageSlideIn 0.5s ease-out;
  }

  /* Hotmart Widget Styles */
  #hotmart-sales-funnel {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 auto !important;
  }
`;

// --- Main Downsell Page Component ---
const DownsellPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isExpired, setIsExpired] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsExpired(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Exit-intent modal effect
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 50 && !isExpired) {
        setShowExitModal(true);
      }
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!isExpired) {
        const message = "¿Estás seguro? Esta es tu ÚLTIMA OPORTUNIDAD para proteger tu reconquista.";
        e.returnValue = message;
        return message;
      }
    };

    document.body.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isExpired]);

  // Hotmart Widget effect
  useEffect(() => {
    // Função para carregar o widget da Hotmart
    const loadHotmartWidget = () => {
      const script = document.createElement('script');
      script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
      script.onload = () => {
        if (window.checkoutElements) {
          window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
        }
      };
      document.head.appendChild(script);
    };

    // Carrega o widget após um pequeno delay para garantir que o DOM está pronto
    const timer = setTimeout(loadHotmartWidget, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleFinalExit = () => {
    // Link para sair completamente do funil
    window.location.href = "https://google.com";
  };

  if (isExpired) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900 text-white">
        <div className="glass-strong max-w-2xl w-full text-center p-8 md:p-12 rounded-xl">
          <div className="text-6xl md:text-8xl mb-6">💔</div>
          <h1 className="text-4xl md:text-6xl font-black text-red-500 mb-6">ÚLTIMA OPORTUNIDAD PERDIDA</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">El Plan A Básico ahora cuesta $147</p>
          <p className="text-lg text-gray-400">Esta oferta especial de $9.99 ya no está disponible.</p>
          <p className="text-lg text-red-500 mt-4 font-bold">47% de probabilidad de perderla de nuevo sin protección.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans relative">
      {/* Global styles */}
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

      {/* Exit-intent Modal */}
      {showExitModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="glass-strong max-w-lg w-full p-8 rounded-xl text-center relative border-4 border-red-500">
            <button
              onClick={() => setShowExitModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              &times;
            </button>
            <div className="text-6xl mb-6 animate-heartbeat">⚠️</div>
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-red-500">
              ¡ESTA ES TU ÚLTIMA OPORTUNIDAD!
            </h2>
            <p className="text-lg md:text-xl mb-6 text-gray-300">
              Si sales ahora, NO HABRÁ MÁS OFERTAS.
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-300 font-bold">
              <span className="text-red-500">47% de los que reconquistan la pierden de nuevo</span> sin las técnicas básicas de protección.
            </p>
            <p className="text-base text-gray-400 mb-4">
              Usa el widget de compra abajo en la página por solo $9.99.
            </p>
            <button
              onClick={() => setShowExitModal(false)}
              className="text-gray-400 hover:text-white underline text-sm"
            >
              Entiendo, quiero ver la oferta
            </button>
          </div>
        </div>
      )}

      {/* DOWNSELL HEADER */}
      <section className="bg-gradient-to-r from-orange-600 to-red-700 py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl md:text-8xl mb-6">🛑</div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight">
            ¡ESPERA! ÚLTIMA OPORTUNIDAD
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-bold mb-8 text-white opacity-90">
            No te vayas sin al menos las técnicas BÁSICAS para evitar perderla de nuevo.
          </p>
          <div className="inline-block bg-white bg-opacity-20 text-white text-lg md:text-xl px-6 py-3 font-bold rounded-full animate-pulse-glow">
            ⚠️ 47% de reconquistas fallan sin protección básica
          </div>
        </div>
      </section>

      {/* PAIN AMPLIFICATION */}
      <section className="py-16 md:py-24 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-12 text-red-500 leading-tight">
            🚨 RECONQUISTAR SIN PROTECCIÓN = 47% DE FRACASO
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="glass-strong p-8 md:p-12 rounded-xl border-l-8 border-red-500">
              <h3 className="text-xl md:text-2xl font-black mb-8 text-yellow-400">
                LA VERDAD BRUTAL DE LAS RECONQUISTAS:
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-6xl md:text-8xl font-black text-green-500 mb-4">89%</div>
                  <p className="text-lg md:text-xl text-gray-200">
                    Reconquistan con el Plan A
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl md:text-8xl font-black text-red-500 mb-4">47%</div>
                  <p className="text-lg md:text-xl text-gray-200">
                    <span className="text-red-500 font-bold">LA PIERDEN DE NUEVO</span> en 90 días
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-black mb-4 text-orange-400">¿POR QUÉ PASA ESTO?</h4>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500">❌</span>
                    <span className="text-gray-200">No saben identificar las primeras señales de pérdida de interés</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500">❌</span>
                    <span className="text-gray-200">Cometen errores básicos que alejan a la pareja</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500">❌</span>
                    <span className="text-gray-200">No tienen un plan para mantener la atracción después</span>
                  </li>
                </ul>
              </div>

              <p className="text-xl md:text-2xl font-black text-red-500 text-center">
                ¿Vas a arriesgar tu reconquista por menos de $10?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION - BASIC VERSION */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight">
            💊 PLAN A BÁSICO
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white opacity-90">
            Las técnicas ESENCIALES para evitar que la pierdas de nuevo
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="glass-strong border-l-8 border-yellow-400 p-8 rounded-xl mb-12">
              <h3 className="text-2xl md:text-3xl font-black mb-8 text-yellow-400">
                🔒 LO QUE INCLUYE (VERSIÓN BÁSICA):
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass p-6 rounded-xl">
                  <div className="text-4xl mb-4">⚠️</div>
                  <h4 className="text-lg font-black mb-4 text-orange-400">MÓDULO 1: SEÑALES DE ALERTA</h4>
                  <ul className="space-y-2 text-sm text-gray-200 text-left">
                    <li>• Las 5 señales más importantes de pérdida de interés</li>
                    <li>• Cómo reaccionar en las primeras 24 horas</li>
                    <li>• Qué NUNCA debes hacer cuando la veas distante</li>
                  </ul>
                </div>

                <div className="glass p-6 rounded-xl">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h4 className="text-lg font-black mb-4 text-blue-400">MÓDULO 2: PROTECCIÓN BÁSICA</h4>
                  <ul className="space-y-2 text-sm text-gray-200 text-left">
                    <li>• 3 errores que destruyen la reconquista</li>
                    <li>• Técnica del "Equilibrio Emocional"</li>
                    <li>• Plan de acción para los primeros 30 días</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-gray-900 p-6 rounded-xl">
                <h4 className="text-lg font-black mb-4 text-green-400">✅ BONUS INCLUIDO:</h4>
                <ul className="space-y-2 text-sm text-gray-200 text-left">
                  <li>• Checklist diario de mantenimiento de la relación</li>
                  <li>• 10 frases que mantienen su interés alto</li>
                  <li>• Protocolo de emergencia si ella se distancia</li>
                </ul>
              </div>
            </div>

            <div className="glass-strong border-l-8 border-red-500 p-6 md:p-8 rounded-xl">
              <h4 className="text-lg md:text-xl font-black mb-4 text-red-500">⚠️ LO QUE NO INCLUYE (VS. VERSIÓN COMPLETA):</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                <ul className="space-y-2 text-left">
                  <li>❌ Técnicas avanzadas de dominancia emocional</li>
                  <li>❌ Sistema completo anti-competencia</li>
                  <li>❌ Protocolo de blindaje permanente</li>
                </ul>
                <ul className="space-y-2 text-left">
                  <li>❌ Plan de evolución de relación a largo plazo</li>
                  <li>❌ Técnicas de marca emocional indeleble</li>
                  <li>❌ Soporte personalizado</li>
                </ul>
              </div>
              <p className="text-center mt-4 font-bold text-red-400">
                Pero te da el 70% de protección que necesitas por solo $9.99
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL BÁSICO */}
      <section className="py-16 md:py-24 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-black text-center mb-12 text-white leading-tight">
            Resultado con el Plan A Básico
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="glass-strong p-8 rounded-xl border-l-8 border-green-500">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-lg italic text-gray-200 mb-4">
                "Después de reconquistarla con el Plan A, tenía miedo constante de perderla de nuevo.
                El Plan A Básico me dio las herramientas esenciales para mantenerla interesada.
                No es tan completo como la versión completa, pero me ayudó a evitar los errores básicos.
                Llevamos 4 meses juntos y estable. Para el precio, vale totalmente la pena."
              </p>
              <p className="font-bold text-green-500">- Carlos R., 29 años</p>
              <p className="text-sm text-gray-400 mt-2">✅ Evitó la segunda ruptura • ✅ Relación estable 4+ meses</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE SECTION - DOWNSELL */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass-strong p-8 rounded-xl border-l-8 border-orange-400 mb-12">
              <h3 className="text-2xl md:text-3xl font-black mb-6 text-orange-400">🤔 PIÉNSALO...</h3>
              <div className="space-y-4 text-lg md:text-xl leading-relaxed text-gray-200">
                <p>
                  <strong>Ya invertiste en el Plan A</strong> para reconquistarla.
                </p>
                <p>
                  ¿Vas a arriesgar que la pierdas de nuevo por <strong className="text-green-500">menos de $10</strong>?
                </p>
                <p className="text-xl md:text-2xl font-black text-red-500">
                  Es menos que una pizza, pero puede salvar tu relación.
                </p>
              </div>
            </div>

            <div className="glass-strong p-8 rounded-xl border-l-8 border-green-500 mb-12">
              <div className="text-2xl md:text-3xl text-gray-400 line-through mb-4">Valor normal: $147</div>
              <div className="text-5xl md:text-7xl font-black text-green-500 mb-6">$9.99</div>
              <div className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg md:text-xl px-6 py-3 font-black rounded-full animate-pulse-glow">
                ¡Ahorras $137! (93% de descuento)
              </div>
              <p className="text-sm md:text-base text-green-400 mt-4">Acceso inmediato + Garantía de 30 días</p>
            </div>

            {/* HOTMART WIDGET */}
            <div className="glass-strong border-l-8 border-green-400 p-6 md:p-8 rounded-xl mb-8">
              <div className="text-center mb-6">
                <div className="text-2xl md:text-3xl font-black text-green-400 mb-2">
                  🔒 ÚLTIMA OPORTUNIDAD
                </div>
                <p className="text-sm md:text-base text-gray-300">
                  Pago seguro • SSL 256-bit • Garantía de 30 días
                </p>
              </div>
              
              {/* HOTMART SALES FUNNEL WIDGET */}
              <div id="hotmart-sales-funnel"></div>
              
              <div className="flex items-center justify-center gap-4 mt-4 text-xs md:text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  Compra Segura
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  Acceso Imediato
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  Garantia 30 días
                </span>
              </div>
            </div>

            <div className="glass max-w-2xl mx-auto p-6 rounded-xl mb-8 text-left">
              <h4 className="text-lg md:text-xl font-black mb-4 text-green-500">✅ Lo que recibes por $9.99:</h4>
              <ul className="space-y-2 text-sm md:text-base text-gray-200">
                <li>• Plan A Básico completo (2 módulos principales)</li>
                <li>• Las 5 señales más importantes de pérdida de interés</li>
                <li>• 3 errores que debes evitar a toda costa</li>
                <li>• Checklist diario de mantenimiento</li>
                <li>• Protocolo de emergencia si ella se distancia</li>
                <li>• 10 frases para mantener su interés alto</li>
                <li>• Garantía de 30 días sin riesgo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* URGENCY SECTION */}
      <section className="py-16 md:py-24 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="glass-strong border-l-8 border-red-500 max-w-3xl mx-auto p-8 md:p-12 text-center relative rounded-xl">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-4xl animate-urgent-tick text-white">
              🚨
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-8 text-red-500 leading-tight">
              ⏰ ÚLTIMA OPORTUNIDAD
            </h3>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed mb-8 text-gray-200">
              <p>
                Esta es tu <strong>ÚLTIMA OPORTUNIDAD</strong> para proteger tu reconquista.
              </p>
              <p>
                Si sales de esta página, <strong className="text-red-500">NO HABRÁ MÁS OFERTAS.</strong>
              </p>
              <p className="font-bold text-orange-400">
                El Plan A Básico después cuesta $147.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-6 rounded-xl text-4xl md:text-6xl font-black mb-8 animate-pulse">
              <CountdownTimer initialSeconds={timeLeft} />
            </div>

            <p className="text-sm md:text-base text-red-500 font-bold">
              Después de este tiempo, esta oferta desaparece PARA SIEMPRE.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="glass-strong p-8 rounded-xl border-l-8 border-yellow-400 mb-8">
              <h3 className="text-xl md:text-2xl font-black mb-6 text-yellow-400">
                ⚖️ TU DECISIÓN FINAL:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-900 bg-opacity-30 p-6 rounded-xl">
                  <h4 className="text-lg font-black mb-4 text-red-400">❌ SIN PROTECCIÓN:</h4>
                  <ul className="space-y-2 text-sm text-gray-200 text-left">
                    <li>• 47% de probabilidad de perderla de nuevo</li>
                    <li>• Segunda ruptura 3x más dolorosa</li>
                    <li>• Sin herramientas para detectar problemas</li>
                    <li>• Vivir con ansiedad constante</li>
                  </ul>
                </div>
                <div className="bg-green-900 bg-opacity-30 p-6 rounded-xl">
                  <h4 className="text-lg font-black mb-4 text-green-400">✅ CON PLAN A BÁSICO:</h4>
                  <ul className="space-y-2 text-sm text-gray-200 text-left">
                    <li>• 70% más de probabilidad de éxito</li>
                    <li>• Herramientas para detectar problemas</li>
                    <li>• Plan de acción claro</li>
                    <li>• Solo $9.99 - menos que una pizza</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-300 mb-8">
              La elección es tuya. ¿Vale la pena arriesgar tu felicidad por menos de $10?
            </p>

            <button
              onClick={handleFinalExit}
              className="text-gray-500 hover:text-gray-400 underline text-sm transition-colors duration-300"
            >
              No, prefiero arriesgarme sin protección (salir definitivamente)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownsellPage;
