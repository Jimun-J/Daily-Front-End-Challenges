import { createContext, useState } from "react";

const themes = {
    themeOne: {
        main_bg: "hsl(222, 26%, 31%)",
        
        keypad_bg: "hsl(223, 31%, 20%)",
        screen_bg: "hsl(224, 36%, 15%)",

        header_color: "hsl(0, 0%, 100%)",

        reset_key_bg: "hsl(225, 21%, 49%)",
        reset_key_shadow: "hsl(224, 28%, 35%)",
        reset_key_color: "hsl(0, 0%, 100%)",
        result_key_bg: "hsl(6, 63%, 50%)",
        result_key_shadow: "hsl(6, 70%, 34%)",
        result_key_color: "hsl(0, 0%, 100%)",

        num_key_bg: "hsl(30, 25%, 89%)",
        num_key_shadow: "hsl(28, 16%, 65%)",
        num_key_color: "hsl(221, 14%, 31%)",

    },
    themeTwo: {
        main_bg: "hsl(0, 0%, 90%)",
        keypad_bg: "hsl(0, 5%, 81%)",
        screen_bg: "hsl(0, 0%, 93%)",

        header_color: "hsl(60, 10%, 19%)",

        reset_key_bg: "hsl(185, 42%, 37%)",
        reset_key_shadow: "hsl(185, 58%, 25%)",
        reset_key_color: "hsl(0, 0%, 100%)",
        result_key_bg: "hsl(25, 98%, 40%)",
        result_key_shadow: "hsl(25, 99%, 27%)",
        result_key_color: "hsl(0, 0%, 100%)",

        num_key_bg: "hsl(45, 7%, 89%)",
        num_key_shadow: "hsl(35, 11%, 61%)",
        num_key_color: "hsl(60, 10%, 19%)",
    },
    themeThree: {
        main_bg: "hsl(268, 75%, 9%)",
        keypad_bg: "hsl(268, 71%, 12%)",
        screen_bg: "hsl(268, 71%, 12%)",

        header_color: "hsl(52, 100%, 62%)",

        reset_key_bg: "hsl(281, 89%, 26%)",
        reset_key_shadow: "hsl(285, 91%, 52%)",
        reset_key_color: "hsl(0, 0%, 100%)",
        result_key_bg: "hsl(176, 100%, 44%)",
        result_key_shadow: "hsl(177, 92%, 70%)",
        result_key_color: "hsl(198, 20%, 13%)",

        num_key_bg: "hsl(268, 47%, 21%)",
        num_key_shadow: "hsl(290, 70%, 36%)",
        num_key_color: "hsl(52, 100%, 62%)",
    }
}

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(1);
    const [theme, setTheme] = useState(themes.themeOne);

    const toggleTheme = (e) => {
        let button = e.target.parentNode.firstElementChild;

        do {
            if (button !== e.target) {
                button.classList.remove('active');
            }
            button = button.nextElementSibling
        } while (button);

        e.target.classList.add('active');

        switch (e.target.classList[0]) {
            case 'button-one':
                setCurrentTheme(1);
                setTheme(themes.themeOne);
                break;
            case 'button-two':
                setCurrentTheme(2);
                setTheme(themes.themeTwo);
                break;
            case 'button-three':
                setCurrentTheme(3);
                setTheme(themes.themeThree);
                break;
            default:
                setCurrentTheme(1);
                setTheme(themes.themeOne);
                break;
        }
    }

    return (
        <ThemeContext.Provider value={[{ theme, currentTheme }, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}