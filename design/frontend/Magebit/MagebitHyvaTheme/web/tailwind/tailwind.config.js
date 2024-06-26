const {
    spacing
} = require('tailwindcss/defaultTheme');

const colors = require('tailwindcss/colors');

const hyvaModules = require('@hyva-themes/hyva-modules');


const root = '../../../../../../../';
const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = hyvaModules.mergeTailwindConfig({
    theme: {
        extend: {
            screens: {
                'sm': '640px',
                // => @media (min-width: 640px) { ... }
                'md': '768px',
                // => @media (min-width: 768px) { ... }
                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }
                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }
                '2xl': '1536px' // => @media (min-width: 1536px) { ... }

            },
            fontFamily: {
                sans: ["Segoe UI", "Helvetica Neue", "Arial", "sans-serif", ...defaultTheme.fontFamily.sans]
            },
            colors: {
                primary: {
                    lighter: colors.blue['300'],
                    "DEFAULT": colors.blue['800'],
                    darker: colors.blue['900']
                },
                secondary: {
                    lighter: colors.blue['100'],
                    "DEFAULT": colors.blue['200'],
                    darker: colors.blue['300']
                },
                background: {
                    lighter: colors.blue['100'],
                    "DEFAULT": colors.blue['200'],
                    darker: colors.blue['300']
                },
                green: colors.emerald,
                yellow: colors.amber,
                purple: colors.violet
            },
            textColor: {
                orange: colors.orange,
                red: {
                    ...colors.red,
                    "DEFAULT": colors.red['500']
                },
                primary: {
                    lighter: colors.gray['700'],
                    "DEFAULT": colors.gray['800'],
                    darker: colors.gray['900']
                },
                secondary: {
                    lighter: colors.gray['400'],
                    "DEFAULT": colors.gray['600'],
                    darker: colors.gray['800']
                }
            },
            backgroundColor: {
                primary: {
                    lighter: colors.blue['600'],
                    "DEFAULT": colors.blue['700'],
                    darker: colors.blue['800']
                },
                secondary: {
                    lighter: colors.blue['100'],
                    "DEFAULT": '#160F3E',
                    darker: colors.blue['300']
                },
                sliderBg: {
                    lighter: '#003057',
                    "DEFAULT": '#003057',
                    darker: '#003057'
                },
                buttonBg: {
                    lighter: '#5db7ff',
                    "DEFAULT": '#5db7ff',
                    darker: '#5db7ff',
                    hover: '#2f5e82'
                },
                container: {
                    lighter: '#F2F2F2',
                    "DEFAULT": '#fafafa',
                    darker: '#f5f5f5'
                }
            },
            borderColor: {
                primary: {
                    lighter: colors.blue['600'],
                    "DEFAULT": colors.blue['700'],
                    darker: colors.blue['800']
                },
                secondary: {
                    lighter: colors.blue['100'],
                    "DEFAULT": colors.blue['200'],
                    darker: colors.blue['300']
                },
                container: {
                    lighter: '#f5f5f5',
                    "DEFAULT": '#e7e7e7',
                    darker: '#b6b6b6'
                }
            },
            minWidth: {
                8: spacing["8"],
                20: spacing["20"],
                40: spacing["40"],
                48: spacing["48"]
            },
            minHeight: {
                14: spacing["14"],
                a11y: '44px',
                'screen-25': '25vh',
                'screen-50': '50vh',
                'screen-75': '75vh'
            },
            maxHeight: {
                '0': '0',
                'screen-25': '25vh',
                'screen-50': '50vh',
                'screen-75': '75vh'
            },
            container: {
                center: true,
                padding: '1.5rem'
            },
            height: {
                '42': '10.5rem'
            },
            spacing: {
                '1': '10px',
                '2': '12px',
                '3': '16px',
                '4': '24px',
                '5': '32px',
                '6': '48px',
            }
        }
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('postcss-import'),
        require('tailwindcss/nesting'),
        require('tailwindcss'),
        require('postcss-font-magician')({display: 'swap'}), require('autoprefixer')],
    // Examples for excluding patterns from purge
    content: [
        '../../**/*.phtml',
        root + 'vendor/hyva-themes/magento2-default-theme/**/*.phtml',
        root + 'app/code/**/*.phtml',
        root + 'app/code/**/src/**/*.jsx',
        root + 'vendor/hyva-themes/magento2-hyva-checkout/src/reactapp/src/**/*.jsx',
        root + 'app/code/**/Block/Widget/**/*.php',
        root + 'vendor/hyva-themes/magento2-hyva-widgets/**/*.phtml',
        // root + 'var/custom_html/**/*'

    ]
});
