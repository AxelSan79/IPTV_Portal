export default function MainLayout({ children }) {
  return (
    <div
      className="fixed inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/background.jpg')"
      }}
    >
      {/* Overlay para legibilidad */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Contenido */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}
