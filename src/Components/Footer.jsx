export default function Footer() {
  return (
    <footer className=" font-[poppins] w-full py-10 text-center bg-gray-900 text-white mt-20">
      <p className="text-lg">
        © {new Date().getFullYear()} Stephen Ajao — All Rights Reserved
      </p>
      <p className="text-sm text-gray-400 mt-2">
        Built with React & Tailwind CSS
      </p>
    </footer>
  );
}
