import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen p-6 font-sans">
      <header className="text-center mb-10">
        <img src="/Logo.png" alt="Pao Spanish Logo" className="mx-auto w-40 mb-4" />
        <h1 className="text-4xl font-bold">Bienvenido a Pao Spanish</h1>
        <p className="mt-2 text-lg text-gray-600">Aprende español con tu tutor IA personalizado</p>
        <Button className="mt-4" onClick={() => window.location.href = "https://pao-spanish-demo.vercel.app"}>
          Probar gratis
        </Button>
      </header>

      <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">🎓 Tutor IA con avatar</h2>
            <p>Interactúa con un tutor inteligente que habla contigo y te guía paso a paso.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">🗣️ Reconocimiento de voz</h2>
            <p>Practica tu pronunciación y obtén correcciones instantáneas.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">🎬 Videos explicativos</h2>
            <p>Aprende vocabulario y gramática con clases en video fáciles de entender.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">🎮 Juegos y ejercicios</h2>
            <p>Refuerza lo aprendido con juegos divertidos y actividades interactivas.</p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center mt-10">
        <h2 className="text-3xl font-bold mb-4">Planes de Suscripción</h2>
        <p className="mb-6 text-gray-600">Empieza gratis. Desbloquea todo con Pao Premium.</p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Card className="w-64">
            <CardContent className="text-center">
              <h3 className="text-xl font-bold mb-2">Mensual</h3>
              <p className="text-2xl font-semibold">$9.99</p>
              <p className="text-sm text-gray-500 mb-4">Acceso total durante 1 mes</p>
              <Button onClick={() => window.location.href = "https://2565881724897.gumroad.com/l/hkllen"}>
                Suscribirme
              </Button>
            </CardContent>
          </Card>

          <Card className="w-64">
            <CardContent className="text-center">
              <h3 className="text-xl font-bold mb-2">Anual</h3>
              <p className="text-2xl font-semibold">$59.99</p>
              <p className="text-sm text-gray-500 mb-4">Acceso total por 12 meses</p>
              <Button onClick={() => window.location.href = "https://2565881724897.gumroad.com/l/hkllen"}>
                Suscribirme
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center mb-6">Testimonios</h2>
        <div className="space-y-4">
          <Card>
            <CardContent>
              <p>🌟 "Pao Spanish me ayudó a sentirme segura al hablar en español. ¡El tutor IA es muy amigable!"</p>
              <p className="mt-2 text-right text-sm text-gray-500">– María, 17 años</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p>🌟 "Me encanta practicar con el avatar. Es como tener un profe en casa todo el tiempo."</p>
              <p className="mt-2 text-right text-sm text-gray-500">– Kevin, 21 años</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center mb-6">Contáctanos</h2>
        <form className="space-y-4" action="https://formspree.io/f/mjvnavlv" method="POST">
          <input type="text" name="nombre" placeholder="Nombre" className="w-full p-2 border rounded" required />
          <input type="email" name="email" placeholder="Correo electrónico" className="w-full p-2 border rounded" required />
          <textarea name="mensaje" placeholder="Tu mensaje" className="w-full p-2 border rounded" rows="4" required></textarea>
          <Button type="submit" className="w-full">Enviar mensaje</Button>
        </form>
      </section>

      <footer className="text-center mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} Pao Spanish. Todos los derechos reservados.
      </footer>
    </div>
  );
}
