import './style.css';

import ReactDOM from 'react-dom';
import React from 'react';

import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import "@fontsource/andika"
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import theme from "./theme/theme"
import App from './App.js';
import ResultPage from './components/result-page';

ReactDOM.render(
<ChakraProvider theme={theme}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/result" element={<ResultPage />} />
        </Routes>
    </BrowserRouter>
</ChakraProvider>,

document.getElementById('react-container'));