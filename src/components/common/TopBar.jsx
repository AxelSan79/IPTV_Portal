export default function TopBar({ title }) {
  return (
    <div className="absolute top-0 left-0 w-full h-24 flex items-center justify-between px-12 z-30">
        
      <h1 className="text-white text-2xl font-semibold">
        {title}
      </h1>

      <img
        src="/images/logo.png"
        alt="Hotel Logo"
        className="absolute top-6 right-6 h-18 object-contain"
      />

    </div>
  );
}
