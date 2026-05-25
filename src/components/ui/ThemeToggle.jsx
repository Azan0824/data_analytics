import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const {
    darkMode,
    setDarkMode,
  } = useTheme();

  return (
    <button
      onClick={() =>
        setDarkMode(!darkMode)
      }
      className="
      p-3
      rounded-xl
      bg-white/10
      hover:bg-white/20
      transition
      "
    >
      {darkMode ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
}