export default function Footer() {
    return (
      <footer className="bg-blue-600 dark:bg-blue-800 text-white py-6 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p>© {new Date().getFullYear()} Smile. All rights reserved.</p>
          <p className="text-sm opacity-80 mt-2">Empowering bright smiles with modern dental care.</p>
        </div>
      </footer>
    );
  }
  