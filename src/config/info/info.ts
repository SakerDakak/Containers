import { Contant } from "@/data/types/basic/contant";
import { SocialMedia } from "@/data/types/basic/socialmedia";

export default class InfoX {
  static readonly appName: string = process.env.APP_NAME || "APP NAME";
  static readonly appURL: string =
    process.env.HOST_URL || "http://localhost:3000";

  static readonly contant: Contant = {
    email: "info@containers.com.sa",
    phone: ["+966550559236"],
    whatsapp: "+966550559236",
    map: "https://maps.app.goo.gl/7YJhFviF4jXpyz7PA"
  };

  static readonly socialMedia: SocialMedia = {
    snapchat:
    "https://www.snapchat.com/add/containers24?share_id=v6C8_CnBzxA&locale=ar-AE",
    xTwitter: "https://twitter.com/CONTAINERS90356",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com/",
    linkdin: "https://linkdin.com/",
  };
}