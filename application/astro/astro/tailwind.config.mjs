/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            aspectRatio: {
                auto: 'auto',
                square: '1 / 1',
                video: '16 / 9'
            },
            colors: {
                'sunglow': {
                    DEFAULT: '#fcce48',
                    100: '#403001',
                    200: '#816102',
                    300: '#c19103',
                    400: '#fbbf0a',
                    500: '#fcce48',
                    600: '#fdd96e',
                    700: '#fde392',
                    800: '#feecb7',
                    900: '#fef6db'
                },
                'onyx': {
                    DEFAULT: '#393d3f',
                    100: '#0c0c0d',
                    200: '#17191a',
                    300: '#232527',
                    400: '#2f3233',
                    500: '#393d3f',
                    600: '#5f6669',
                    700: '#858d91',
                    800: '#aeb3b5',
                    900: '#d6d9da'
                },
                'verdigris': {
                    DEFAULT: '#70a9a1',
                    100: '#152321',
                    200: '#2a4642',
                    300: '#3f6964',
                    400: '#548c85',
                    500: '#70a9a1',
                    600: '#8cbab4',
                    700: '#a9cbc7',
                    800: '#c6ddda',
                    900: '#e2eeec'
                },
                'rosy_brown': {
                    DEFAULT: '#c49799',
                    100: '#2c191a',
                    200: '#593234',
                    300: '#854b4e',
                    400: '#ab6a6d',
                    500: '#c49799',
                    600: '#d0abad',
                    700: '#dcc0c2',
                    800: '#e7d5d6',
                    900: '#f3eaeb'
                },
                'cardinal': {
                    DEFAULT: '#ba3b46',
                    100: '#250c0e',
                    200: '#4a181c',
                    300: '#70232a',
                    400: '#952f37',
                    500: '#ba3b46',
                    600: '#cc5e67',
                    700: '#d9868d',
                    800: '#e6aeb3',
                    900: '#f2d7d9'
                }
            },
            fontFamily: {
                "kitme-display": ["Abril Fatface", ...defaultTheme.fontFamily.sans],
                "kitme-headings": ["Abril Fatface", ...defaultTheme.fontFamily.sans],
                "kitme-body": ["EB Garamond", ...defaultTheme.fontFamily.sans],
                "kitme-mono": ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
                "kitme-emphasis": ["Sacrament", ...defaultTheme.fontFamily.serif],
            },
            screens: {
                "xs": "320px",
                "3xl": "1920px"
            },
            zIndex: {
                '50': '50',
                '100': '100',
                '200': '200',
                '500': '500',
                '700': '700',
                '900': '900',
                '1000': '1000',
            },
        },
    },
    plugins: [
        typography(),
        forms({
            strategy: 'class'
        }),
    ],
};
