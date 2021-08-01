//theme
import { createTheme } from '@material-ui/core/styles';
//fonts
import '@fontsource/quicksand/300.css';
import '@fontsource/quicksand/400.css';
import '@fontsource/quicksand/500.css';
import '@fontsource/quicksand/700.css';
//basic styles
import '../index.css';

const theme = createTheme({
	typography: {
		fontFamily: 'Quicksand',
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
	},
});

export default theme;
