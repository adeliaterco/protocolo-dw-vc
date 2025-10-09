"use client"

import { useEffect, useState } from "react"

export default function UpsellPage() {
  const [timeLeft, setTimeLeft] = useState(12 * 60 + 47) // 12:47 in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Load Hotmart checkout script
    const script = document.createElement("script")
    script.src = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
    script.async = true
    script.onload = () => {
      if (typeof window !== "undefined" && (window as any).checkoutElements) {
        try {
          ;(window as any).checkoutElements.init("salesFunnel").mount("#hotmart-sales-funnel")
        } catch (error) {
          console.error("Error initializing Hotmart widget:", error)
        }
      }
    }
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="bg-gradient-to-r from-red-600 to-red-700 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">🚨 ¡ESPERA! ÚLTIMA OPORTUNIDAD 🚨</h1>
          <div className="bg-yellow-400 text-gray-900 py-3 px-4 rounded-lg font-bold text-sm md:text-base">
            ⚠️ ESTA ES TU ÚLTIMA CHANCE - Descuento MÁXIMO que nunca volverás a ver
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl mb-4">
            ✅ Plan A (Estrategia de reconquista) - <span className="text-green-400 font-bold">CONFIRMADO</span>
          </p>
          <div className="bg-red-600 py-4 px-6 rounded-lg">
            <p className="text-lg md:text-2xl font-bold text-center">
              🔥 ÚLTIMA OPORTUNIDAD: Protocolo Íntimo por SOLO $12 (94% de descuento)
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-red-500 text-2xl md:text-3xl font-bold text-center mb-8">
            ⚠️ ENTIENDO QUE $19 PUEDE PARECER MUCHO...
          </h2>

          <div className="bg-yellow-500 text-gray-900 p-8 rounded-lg mb-8">
            <p className="text-xl md:text-2xl font-bold text-center mb-4">Por eso, esta es mi ÚLTIMA OFERTA para ti:</p>
            <p className="text-3xl md:text-5xl font-bold text-center text-red-600">SOLO $12</p>
          </div>

          <div className="text-center mb-8">
            <div className="text-6xl md:text-8xl font-bold text-red-500 mb-4">71%</div>
            <p className="text-xl md:text-2xl mb-8">De los hombres que usan SOLO el Plan A logran reconquistar</p>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-lg mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">PERO CON EL PROTOCOLO ÍNTIMO:</h3>
            <div className="space-y-4 text-lg md:text-xl">
              <p className="flex items-center justify-center gap-2">
                <span className="text-3xl">✅</span>
                <span className="font-bold">94% DE ÉXITO TOTAL</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-3xl">🔥</span>
                <span className="font-bold">3X MÁS PASIÓN que antes</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-3xl">🛡️</span>
                <span className="font-bold">CERO RIESGO de frialdad</span>
              </p>
            </div>
          </div>

          <div className="bg-red-900 border-4 border-red-500 p-6 rounded-lg">
            <p className="text-lg md:text-xl font-bold text-center">
              ⚠️ ADVERTENCIA: Si rechazas esta oferta, NUNCA más verás este precio. El Protocolo Íntimo volverá a su
              precio normal de $197.
            </p>
          </div>
        </div>
      </div>

      {/* Problema Oculto */}
      <div className="bg-gray-800 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">💔 EL PROBLEMA QUE EL 71% NO VE VENIR</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-red-600 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">29%</div>
              <p className="text-sm">Vuelven pero la relación se siente 'fría'</p>
            </div>
            <div className="bg-red-600 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">3-6</div>
              <p className="text-sm">meses - Tiempo para que la pasión se apague</p>
            </div>
            <div className="bg-red-600 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">47%</div>
              <p className="text-sm">Terminan separándose otra vez</p>
            </div>
          </div>

          <div className="bg-yellow-400 text-gray-900 p-6 rounded-lg">
            <p className="text-lg md:text-xl font-bold text-center">
              ¿De qué sirve recuperarla si la relación se siente vacía y sin pasión?
            </p>
          </div>
        </div>
      </div>

      {/* Comparación Devastadora */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">🔥 PROTOCOLO DE RECONEXIÓN ÍNTIMA</h2>
          <p className="text-xl text-center mb-12 text-gray-300">
            El método 'secreto' que convierte una reconquista fría en PASIÓN TOTAL
          </p>

          <div className="mb-12 flex justify-center">
            <img
              src="https://comprarplanseguro.shop/wp-content/uploads/2025/10/u1FvZg6SUmiCNr2UUqFfg.webp"
              alt="Protocolo de Reconexión Íntima"
              className="rounded-lg shadow-2xl max-w-full h-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-red-900 border-2 border-red-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-red-400">❌ SOLO CON PLAN A:</h3>
              <ul className="space-y-3 text-sm md:text-base">
                <li>• Recuperas su atención</li>
                <li>• Ella acepta volver</li>
                <li>• Pero la pasión no está</li>
                <li>• Sexo mecánico o inexistente</li>
                <li>• Ella parece distante</li>
                <li>• Riesgo de nueva ruptura</li>
                <li>• Relación sin chispa</li>
              </ul>
            </div>

            <div className="bg-green-900 border-2 border-green-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-green-400">✅ PLAN A + PROTOCOLO ÍNTIMO:</h3>
              <ul className="space-y-3 text-sm md:text-base">
                <li>• Recuperas su atención</li>
                <li>• Ella acepta volver</li>
                <li>• ADEMÁS: Pasión explosiva</li>
                <li>• Conexión íntima profunda</li>
                <li>• Ella te desea intensamente</li>
                <li>• Relación blindada</li>
                <li>• 3X más pasión que antes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Apresentação do Produto */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">📚 LO QUE OBTIENES HOY:</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-lg">
              <div className="text-4xl mb-3">💝</div>
              <h3 className="text-xl font-bold mb-3">MÓDULO 1: RECONEXIÓN EMOCIONAL PROFUNDA</h3>
              <p className="text-sm text-gray-300">
                Cómo crear una conexión emocional tan profunda que ella sienta que eres el ÚNICO hombre que realmente la
                entiende.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg">
              <div className="text-4xl mb-3">🔥</div>
              <h3 className="text-xl font-bold mb-3">MÓDULO 2: DESPERTAR DEL DESEO FÍSICO</h3>
              <p className="text-sm text-gray-300">
                Las técnicas exactas para despertar su deseo físico hacia ti, incluso si ahora se siente distante.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-900 to-orange-800 p-6 rounded-lg">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-3">MÓDULO 3: QUÍMICA SEXUAL EXPLOSIVA</h3>
              <p className="text-sm text-gray-300">
                Cómo crear una química sexual tan intensa que ella no pueda dejar de pensar en ti.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-lg">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-xl font-bold mb-3">MÓDULO 4: BLINDAJE ANTI-FRIALDAD</h3>
              <p className="text-sm text-gray-300">
                El sistema para mantener la pasión viva PARA SIEMPRE, evitando que la relación se enfríe.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-gray-900 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold text-center mb-6">BONOS EXCLUSIVOS:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="font-bold mb-2">🎁 BONO 1:</p>
                <p className="text-sm">Guía de Conversaciones Íntimas</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="font-bold mb-2">🎁 BONO 2:</p>
                <p className="text-sm">Técnicas de Seducción Avanzada</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="font-bold mb-2">🎁 BONO 3:</p>
                <p className="text-sm">Plan de Acción 30 Días</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">💰 ESTA ES TU ÚLTIMA OPORTUNIDAD</h2>

          <div className="space-y-6 text-lg mb-8">
            <p className="text-center">Normalmente, el Protocolo Íntimo cuesta $197</p>
            <p className="text-center">En la página anterior, te ofrecí un descuento especial de $19</p>
            <p className="text-center font-bold text-yellow-400 text-2xl">
              Pero como ÚLTIMA OPORTUNIDAD, puedes obtenerlo por solo $12
            </p>
          </div>

          <div className="text-center mb-8">
            <div className="inline-block">
              <p className="text-gray-400 line-through text-3xl mb-2">$197</p>
              <p className="text-gray-400 line-through text-2xl mb-2">$19</p>
              <p className="text-6xl font-bold text-green-400 mb-2">$12</p>
              <p className="text-2xl text-yellow-400 font-bold">¡Ahorras $185! (94% de descuento)</p>
            </div>
          </div>

          <div className="bg-red-900 border-4 border-red-500 p-6 rounded-lg">
            <p className="text-center text-xl font-bold">
              ⚠️ IMPORTANTE: Este es el precio MÁS BAJO que jamás verás. Si cierras esta página, el precio vuelve a $197
              PARA SIEMPRE.
            </p>
          </div>
        </div>
      </div>

      {/* Urgência Final */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-red-500">⏰ OFERTA EXPIRA EN:</h2>

          <div className="bg-gray-800 border-4 border-red-500 p-8 rounded-lg mb-8">
            <div className="text-center">
              <div className="inline-block bg-black border-2 border-red-500 px-12 py-6 rounded-lg">
                <div className="text-5xl md:text-7xl font-bold text-red-500 font-mono">{formatTime(timeLeft)}</div>
              </div>
            </div>
            <p className="text-center text-lg mt-6 text-yellow-400 font-bold">
              Después de este tiempo, el Protocolo Íntimo vuelve a $197
            </p>
          </div>

          <div className="bg-yellow-500 text-gray-900 p-6 rounded-lg mb-6">
            <p className="text-center text-lg font-bold">
              🎯 Son solo $12 que pueden ser la diferencia entre una relación fría y una relación APASIONADA
            </p>
          </div>

          <div className="bg-red-900 border-2 border-red-500 p-6 rounded-lg">
            <p className="text-center text-lg font-bold">
              ⚠️ Esta es tu ÚLTIMA OPORTUNIDAD de obtener el Protocolo Íntimo a este precio
            </p>
          </div>
        </div>
      </div>

      {/* CTA Principal - Widget Hotmart */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-lg shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              🔥 SÍ, QUIERO EL PROTOCOLO ÍNTIMO POR SOLO $12
            </h2>
            <p className="text-center text-xl mb-6">(Acceso inmediato + Garantía de 7 días)</p>

            <div id="hotmart-sales-funnel" className="my-8 min-h-[200px]"></div>

            <div className="space-y-4 text-center text-sm md:text-base">
              <p className="flex items-center justify-center gap-2">
                <span>🔒</span>
                <span>Pago 100% seguro y encriptado</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span>✅</span>
                <span>Acceso inmediato después del pago</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span>🛡️</span>
                <span>Garantía de 7 días - Riesgo CERO</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span>💳</span>
                <span>Acepta todas las tarjetas y métodos de pago</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <a href="https://app.plansistema.shop/app/" className="text-gray-500 text-sm hover:text-gray-400 underline">
            No gracias, prefiero arriesgarme a una relación fría (y perder esta oferta para siempre)
          </a>
        </div>
      </div>
    </div>
  )
}
