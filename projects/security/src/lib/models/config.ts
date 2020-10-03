interface AppConfig {
    colorTheme: string;
    customScrollbars: boolean;
    layout: {
        style: string,
        width: 'fullwidth' | 'boxed',
        navbar: {
            primaryBackground: string,
            secondaryBackground: string,
            hidden: boolean,
            folded: boolean,
            position: 'right' | 'top',
            variant: string
        },
        toolbar: {
            customBackgroundColor: boolean,
            background: string,
            hidden: boolean,
            position: 'above' | 'below-static' | 'below-fixed'
        }
        footer: {
            customBackgroundColor: boolean,
            background: string,
            hidden: boolean,
            position: 'above' | 'above-static' | 'above-fixed' | 'below-static' | 'below-fixed'
        },
        customSide: {
            hidden: boolean,
            position: 'left' | 'right'
        },
        simpleSide: {
            hidden: boolean,
            position: 'left' | 'right'
        }
    };
}

export const appConfig: AppConfig = {
    colorTheme: 'theme-default',
    // نمونه تم های موجود:
    // colorTheme      : 'theme-yellow-light',
    // colorTheme      : 'theme-blue-gray-dark',
    // colorTheme      : 'theme-pink-dark',
    customScrollbars: true,
    // نمونه لایه های موجود
    // layout: {
    //     style    : 'horizontal-layout-1',
    //     width    : 'fullwidth',
    //     navbar   : {
    //         primaryBackground  : 'app-navy-700',
    //         secondaryBackground: 'app-navy-900',
    //         folded             : false,
    //         hidden             : false,
    //         position           : 'top',
    //         variant            : 'vertical-style-1'
    //     },
    //     toolbar  : {
    //         background           : 'app-white-500',
    //         customBackgroundColor: false,
    //         hidden               : false,
    //         position             : 'above'
    //     },
    //     footer   : {
    //         background           : 'app-navy-900',
    //         customBackgroundColor: true,
    //         hidden               : true,
    //         position             : 'above-static'
    //     },
    //     customSide: {
    //         hidden  : false,
    //         position: 'left'
    //     },
    //     simpleSide: {
    //         hidden  : false,
    //         position: 'right'
    //     }
    // }
    layout: {
        style: 'vertical-layout-1',
        width: 'fullwidth',
        navbar: {
            primaryBackground: 'app-navy-700',
            secondaryBackground: 'app-navy-900',
            folded: false,
            hidden: false,
            position: 'right',
            variant: 'vertical-style-1'
        },
        toolbar: {
            customBackgroundColor: false,
            background: 'app-white-500',
            hidden: false,
            position: 'below-fixed'
        },
        footer: {
            customBackgroundColor: true,
            background: 'app-navy-900',
            hidden: false,
            position: 'below-fixed'
        },
        customSide: {
            hidden: false,
            position: 'left'
        },
        simpleSide: {
            hidden  : false,
            position: 'right'
        }
    }
};
