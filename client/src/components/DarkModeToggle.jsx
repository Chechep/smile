import { useTheme } from '../context/ThemeContext';


const DarkModeToggle = () => {
const { theme, setTheme } = useTheme();


return (
<button
onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
className="p-2 rounded-md bg-sky-500 text-white hover:bg-sky-600 transition"
>
{theme === 'light' ? '🌙 Dark' : '☀️ Light'}
</button>
);
};


export default DarkModeToggle;