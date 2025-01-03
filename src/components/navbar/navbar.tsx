import NavbarComputer from "./navbar-computer";

const Navbar = () => {
  return (
    <nav
      className="flex items-center gap-4 border-b-4 border-gray-200 dark:border-black p-4 sticky top-0 z-50"
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      <NavbarComputer />

      <div className="flex flex-col">
        <span className="nes-text is-primary text-lg font-bold">
          Dewald Els
        </span>
        <span className="nes-text text-xs text-slate-500 dark:text-slate-200">
          Portfolio
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
