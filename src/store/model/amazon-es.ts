import {Store} from './store';

export const AmazonEs: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['introduzca los caracteres que ve a continuación'],
    },
    captchaHandler: {
      challenge: '.a-row > img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: {
      container: '#desktop_buybox',
      text: ['añadir a la cesta'],
    },
    maxPrice: {
      container: '.a-text-price',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '#availability',
        text: ['No disponible'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B07PW9VBK5&Quantity.1=1',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.es/dp/B07PW9VBK5',
    },
    {
      brand: 'evga',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08J5F3G18&Quantity.1=1',
      model: 'ftw3 ultra',
      series: '3090',
      url: 'https://www.amazon.es/dp/B08J5F3G18/',
    },
    {
      brand: 'zotac',
      cartUrl:
        'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HR1NPPQ&Quantity.1=1',
      model: 'trinity',
      series: '3080',
      url: 'https://www.amazon.es/dp/B08HR1NPPQ',
    },
    {
      brand: 'asus',
      cartUrl: 'https://www.amazon.es/cart?ref_=sw_gtc',
      model: 'tuf oc',
      series: 'rx7900xtx',
      url: 'https://www.amazon.es/ASUS-Gaming-Radeon-7900-GDDR6/dp/B0BQCFCJK2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=Q8SCG7SROLET&dib=eyJ2IjoiMSJ9.TotuEMwyefQPTAeAYO8pl6o7moZ0fyik-iawtcYUx22ftxQHLRrh9zKLhzlV_21tvDs49yYbE-j3g4FLFel6Gj7VZClGUh2_oQzHkTAo5xpNLgaUl2jXu6QNmM3bP7nfTBuPbRQMSM0oSqDXy6AKHE2VWsFxf1eGJvL8Z3e88eTXaEwiivy9SIYkwO8Ee8RfgsJ_xP_kEdjDjY1GwIVIL5uhYatel2OVfQ0il_pXzp0IMK5mapp14mEOZ62yDDC0IrfgjUl_uWYXEzcevJMEAYRS1ctcPfHOrSEYSPkeX5bd0s9XPSA6Nm4ael8_VJW7uTpxQ4JdfLrxrqiqk9q_cmOvESw-lHVhb4lvV0uHTPxAfWQKjNOee81wLsznyixp3V3HxVK3dknndLS1mGjA4-iZ5J-uA5RmSjexZTm2mW4rWafukerbMrAwdrRH3r7u.o5wKIRHUOuYoourUBwHTdsn02QHPMI_O1bz5t7x5wos&dib_tag=se&keywords=7900%2Bxtx&qid=1739990237&sprefix=7900%2Bxtx%2Caps%2C101&sr=8-1&ufe=app_do%3Aamzn1.fos.956bbf2d-1bdd-4017-828c-5a84ed9b0efd&th=1',
    },
    {
      brand: 'sapphire',
      cartUrl: 'https://www.amazon.es/gp/cart/view.html?ref_=nav_cart',
      model: 'nitro+',
      series: 'rx7900xtx',
      url: 'https://www.amazon.es/Sapphire-Nitro-Radeon-Vapor-X-GDDR6/dp/B0BT524DL4?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3050E1P51EBIC&dib=eyJ2IjoiMSJ9.TotuEMwyefQPTAeAYO8plwosZkeQ2zhnZdD2jfA2t5FIAWuivIQlHUWkx_ZF79PhLtyzWYcKt1ObDCBMjFZTm1GfnMop-HrCgTSRYoxaTpY6G4liLv_lj_6xYJ_owTG5v729SZBe0N0ZN9MMo1dFdiyCPXRaJob-SEgc7rI2YwCj06S0dLUPU-ubT05Jr26j2aj7Xe7eXY-mWZTO2IlEoqhOMmK1tz5Mo78N-3wlae4NN068EIugnG5X6eGkDismUHTkRIG-nGCldP5kVsL4PebtyFr2wleY3G8BV2m-ewi8i0cv2aNuWXtjbwr-6BvwFMA0N-E4WLZwClIi7SPWJUTsJzzIq8HvWoUQmo39HeTLgk7PnPkI3yYwV8XB5LsCicGctB4DUA-g6yzj00HdHnNV3PSXhZn_Q-l7xige2gA3rCasaheyLbsiJXttVhhJ.L59no_xs7tONBNGTjeZATwMNtJhwq0PrqYr8jMFvZeU&dib_tag=se&keywords=rx7900xtx&qid=1739990663&sprefix=7900xt%2Caps%2C121&sr=8-3&ufe=app_do%3Aamzn1.fos.956bbf2d-1bdd-4017-828c-5a84ed9b0efd',
    },
    {
      brand: 'sapphire',
      cartUrl: 'https://www.amazon.es/gp/cart/view.html?ref_=nav_cart',
      model: 'nitro+',
      series: 'rx7900xtx',
      url: 'https://www.amazon.es/SAPPHIRE-11322-01-40G-Vapor-X-Tarjeta-gr%C3%A1fica/dp/B0BR6JWP1Q?pd_rd_w=k2SL9&content-id=amzn1.sym.2f4002ab-dbfc-433a-a6cc-38b51e98ea10&pf_rd_p=2f4002ab-dbfc-433a-a6cc-38b51e98ea10&pf_rd_r=JKT9WEXN9B0R3Z80EH8Y&pd_rd_wg=2OvHk&pd_rd_r=361dbe5b-bf7a-4f7a-afc6-ead9e3e6418a&pd_rd_i=B0BR6JWP1Q',
    },
    {
      brand: 'sapphire',
      cartUrl: 'https://www.amazon.es/gp/cart/view.html?ref_=nav_cart',
      model: 'pulse',
      series: 'rx7900xtx',
      url: 'https://www.amazon.es/SAPPHIRE-Pulse-Radeon-7900-GDDR6/dp/B0BQNCSW3X?crid=BMB0DYX39ASL&dib=eyJ2IjoiMSJ9.TotuEMwyefQPTAeAYO8plwosZkeQ2zhnZdD2jfA2t5FIAWuivIQlHUWkx_ZF79PhWv4unGTZ8MCOwkqV1aBtprndCltec1RSd-BvMyYs1Xf9ErhoGSzzFD_Os_Id-FqCWhhcNYpW7G4fWE7QgrUdiiyCPXRaJob-SEgc7rI2YwCj06S0dLUPU-ubT05Jr26jPRYBsHHtkWXJZcDLHAa7cVRnINHwnQeFua3t99E1Jrq8laE0BFpZ6ph-FbaUCtlm1inPMCo2kXDTrUKnbtZrvLwSvHjP4Io38fHmX9KuBV_TuuLUk1OPG0CH7Glph83IgNkDKKtD6cqg8gZtLQWVzI5h6P3pQ6qmXqa4CQf8Qa8._BSa9M2PYtWqAYO-EZM0b5oJxV8SopX1y9Y4G0X7O6E&dib_tag=se&keywords=rx7900xtx&qid=1739990912&s=computers&sprefix=7900%2Ccomputers%2C99&sr=1-8&ufe=app_do%3Aamzn1.fos.956bbf2d-1bdd-4017-828c-5a84ed9b0efd',
    },
  ],
  name: 'amazon-es',
  country: 'ES',
};
