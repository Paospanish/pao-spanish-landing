import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen p-6 font-sans">
      <header className="text-center mb-10">
        <img src="/Logo.png" alt="Pao Spanish Logo" className="mx-auto w-40 mb-4" />
        <h1 className="text-4xl font-bold">Bienvenido a Pao Spanish</h1>
        <p className="mt-2 text-lg text-gray-600">Aprende español con tu tutor IA personalizado</p>
        <Button className="mt-4" onClick={() => window.location.href = "https://pao-spanish-demo.vercel.app"}>Probar gratis</Button>
      </header>
      ...
    </div>
  );
}