export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-zinc-900 px-6 py-3 text-center text-xs text-zinc-500">
      © {new Date().getFullYear()} MNC Brand. Secure Encrypted Connection.
    </footer>
  );
}