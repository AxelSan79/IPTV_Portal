function SecondLayout({ children }) {
  return (
    <div className="fixed inset-0 bg-gray-900 text-white">
      {children}
    </div>
  );
}

export default SecondLayout;
