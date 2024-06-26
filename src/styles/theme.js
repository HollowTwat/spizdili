


// Define the light theme properties
const lightTheme = {
    body: '#FFFFFF', // White background
    button: '#808080', //#363537
    hover: 'silver',
    checkbox: 'silver',
    // body: 'violet',
    text: '#363537', // Dark gray text color
    textfaded: '#9F9F9F',
    toggleBorder: '#FFF',
    background: '#363537',
    editdelete: 'silver',
    fieldoutlinesNF: '#C46200',
    fieldoutlinesF: 'blue',
    fieldoutlinesD: 'gray',
    fieldoutlinesH: '#FCCF00',
};

// Define the dark theme properties
const darkTheme = {
    body: '#363537', // Dark gray background
    button: '#363537',
    hover: 'silver',
    checkbox: 'silver',
    // body: 'red',
    text: '#e7ecf7', // Very light gray text color
    textfaded: '#606060',
    toggleBorder: '#6B8096',
    background: '#999',
    editdelete: 'silver',
    fieldoutlinesNF: '#FCCF00',
    fieldoutlinesF: 'blue',
    fieldoutlinesD: 'gray',
    fieldoutlinesH: '#FCF000',
};

// Export the themes
export const theme = {
    light: lightTheme,
    dark: darkTheme,
};

// const themestate = () =>{
//     if (typeof (tg.colorScheme) !== "undefined")
//     {return tg.colorScheme}
//     else {return 'dark'}
// }

// export default themestate
const colorScheme = window.Telegram.WebApp.colorScheme ? window.Telegram.WebApp.colorScheme : 'dark';

export const themestate = colorScheme



