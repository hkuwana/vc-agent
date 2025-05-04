/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                light: {
                    ...require('daisyui/src/theming/themes')['light'],
                    primary: '#4F46E5',
                    'primary-focus': '#4338CA',
                    secondary: '#10B981',
                    accent: '#F59E0B',
                    neutral: '#3D4451',
                    'base-100': '#FFFFFF',
                },
                dark: {
                    ...require('daisyui/src/theming/themes')['dark'],
                    primary: '#6366F1',
                    'primary-focus': '#4F46E5',
                    secondary: '#10B981',
                    accent: '#F59E0B',
                    neutral: '#1F2937',
                    'base-100': '#1E293B',
                },
            },
        ],
    },
} 