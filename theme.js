document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('theme-switcher');
    const themeSwitcherMobile = document.getElementById('theme-switcher-mobile');
    const body = document.body;

    const updateLabel = (theme) => {
        const label = theme === 'light' ? 'Dark Mode' : 'Light Mode';
        if (themeSwitcher) themeSwitcher.nextElementSibling.textContent = label;
        if (themeSwitcherMobile) themeSwitcherMobile.nextElementSibling.textContent = label;
    };

    const setTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-mode');
            if (themeSwitcher) themeSwitcher.checked = true;
            if (themeSwitcherMobile) themeSwitcherMobile.checked = true;
        } else {
            body.classList.remove('light-mode');
            if (themeSwitcher) themeSwitcher.checked = false;
            if (themeSwitcherMobile) themeSwitcherMobile.checked = false;
        }
        updateLabel(theme);
    };

    const toggleTheme = () => {
        const currentTheme = body.classList.contains('light-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        setTheme(currentTheme);
    };

    if (themeSwitcher) {
        themeSwitcher.addEventListener('change', toggleTheme);
    }
    if (themeSwitcherMobile) {
        themeSwitcherMobile.addEventListener('change', toggleTheme);
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme('dark'); // Default to dark mode
    }
});