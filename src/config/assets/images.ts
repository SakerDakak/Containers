export default class ImageX {
  // Logo
  static readonly logo: string = "/logo/logo.svg";
  static readonly logo_v: string = "/logo/logo-v.svg";
  static readonly logo_h: string = "/logo/logo-h.svg";
  static readonly logo_symbol: string = "/logo/logo-symbol.svg";
  static readonly logo_dark: string = "/logo/logo-dark.svg";
  static readonly logo_v_dark: string = "/logo/logo-v-dark.svg";
  static readonly logo_h_dark: string = "/logo/logo-h-dark.svg";
  static readonly logo_symbol_dark: string = "/logo/logo-symbol-dark.svg";

  // Background
  static readonly background: string = "/images/gradient/background.png";

  // Others
  static readonly faqHero: string = "/images/faqHero.jpg";
  static readonly aboutHero: string = "/images/about-hero.jpg";
  static readonly about_1: string = "/images/about-1.jpg";
  static readonly ourServices: string = "/images/our-services.jpg";
  static readonly ourServices_2: string = "/images/our-services-2.jpg";

  // Containers
  static readonly container_1: string = "/images/container/container-1.png";
  static readonly container_2: string = "/images/container/container-2.png";
  static readonly container_3: string = "/images/container/container-3.png";

  // Shipping
  static readonly shipping = (num: number): string =>
    `/images/shippings/logo-${num}.png`;
  static readonly shipping_1: string = "/images/shippings/logo-1.png";
  static readonly shipping_2: string = "/images/shippings/logo-2.png";
  static readonly shipping_3: string = "/images/shippings/logo-3.png";
  static readonly shipping_4: string = "/images/shippings/logo-4.png";
  static readonly shipping_5: string = "/images/shippings/logo-5.png";
  static readonly shipping_6: string = "/images/shippings/logo-6.png";
  static readonly shipping_7: string = "/images/shippings/logo-7.png";
  static readonly shipping_8: string = "/images/shippings/logo-8.png";
  static readonly shipping_9: string = "/images/shippings/logo-9.png";

  // Costumers
  static readonly customer = (num: number): string =>
    `/images/customers/logo-${num}.png`;
  static readonly customer_1: string = "/images/customers/logo-1.png";
  static readonly customer_2: string = "/images/customers/logo-2.png";
  static readonly customer_3: string = "/images/customers/logo-3.png";
  static readonly customer_4: string = "/images/customers/logo-4.png";
  static readonly customer_5: string = "/images/customers/logo-5.png";
  static readonly customer_6: string = "/images/customers/logo-6.png";
  static readonly customer_7: string = "/images/customers/logo-7.png";
  static readonly customer_8: string = "/images/customers/logo-8.png";
  static readonly customer_9: string = "/images/customers/logo-9.png";

  static readonly stage = (num: number): string =>
    `/images/howItWorks/stage-${num}.jpg`;
  static readonly stage_1: string = "/images/howItWorks/stage-1.jpg";

  // Shapes
  static readonly questionMark: string = "/images/shapes/question-mark.svg";
  static readonly map: string = "/images/shapes/map.svg";
  static readonly map_dark: string = "/images/shapes/map-dark.svg";
}
