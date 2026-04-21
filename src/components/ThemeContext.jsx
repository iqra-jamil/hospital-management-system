//theme switch (useContext)
import { createContext, useState } from 'react';
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
     };

    return (
       
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children} 
        </ThemeContext.Provider>
     
    );
};

//commnts 

//create context
// then state bani to store theme value
// write a function to updtaed theme value
//aik provider create kia aur app ko wrap kia taki sari app me theme or toggleTheme function use ho sake.
// {children} ka matlab hai jo bhi components ya elements ThemeProvider ke andar likhe gaye hain, unko yahan render karo.
//basically {children} app ke andar ke content ko dynamically display karta hai.
//then hum ny theme or toggle theme ko app.jsx main or header main use kr lia without reciveing them as props in evry child comp
//useContext(ThemeContext) {like we use theme and toggle theme} ka matlab hai ThemeContext ke andar jo bhi data hai, use yahan le lo.
//matlab app k andr jitny b chid componets hain wo children main aajaty hain or phir app ko provider main wrap krty hain is sy app k sary child componets dynamicaly render hoty hain 