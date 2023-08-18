// DEBUG SWITCH FOR LOADING SEQUENCE TO STAY ON AT HOME PAGE
export const debuggingLoadingSequence: boolean = false;

// PAGES TO SHOW IN NAV-BAR
export const pages: string[] = ['Home', 'Products', 'Contact'];

// API INFO FOR CONTACT FORM
export const contactAPIKey: string = '9e66aaa8-8293-4f02-ae04-e006f4ef8c4e';
export const contactAPIRoute: string = 'https://api.web3forms.com/submit';

// MAIN PHONE NUMBER
export const mainPhoneNumber: string = '425-375-3405';

// VENMO USERNAME
export const venmoUsername: string = '@Kirsa-Orndorf';

// PAYPAL EMAIL
export const payPalEmail: string = 'kirsag2302@gmail.com';

// FACEBOOK LINK
export const facebookLink: string = 'https://facebook.com/people/Adrianasbowtique/100064125880331/';

// AUTHORIZED PAYMENT METHODS
export const authorizedPaymentMethods: object[] = [
    {
        name: 'Venmo',
        imageName: 'venmo.png'
    },
    {
        name: 'Zelle',
        imageName: 'zelle.png'
    },
    {
        name: 'Apple Pay',
        imageName: 'applepay.png'
    },
    {
        name: 'PayPal',
        imageName: 'paypal.png'
    }
];

// SOCIAL MEDIA LINKS
export const socialMediaLinks: object[] = [
    {
        name: 'Instagram',
        link: 'https://instagram.com/adrianasbowtique/'
    },
    {
        name: 'Facebook',
        link: facebookLink
    },
    {
        name: 'Mail',
        link: 'mailto:adrianabowtique23@gmail.com'
    },
    {
        name: 'Phone',
        link: `tel:${mainPhoneNumber}`
    }
];
