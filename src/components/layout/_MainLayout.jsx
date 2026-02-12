export default function MainLayout({ children }) {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      
      {/* Fondo full viewport */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/background.jpg')"
        }}
      />

      {/* Contenedor 16:9 centrado para contenido */}
      <div className="relative mx-auto h-full max-w-[1920px] aspect-video flex flex-col">
        {children}
      </div>

    </div>
  );
}


