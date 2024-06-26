import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSnapchat,
  FaYoutube,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FaSquareXTwitter, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillMoonStarsFill, BsGlobe } from "react-icons/bs";
import { IoClose, IoSunnyOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";

export default class IconX {
  // Social Media
  static readonly facebook = FaFacebook;
  static readonly instagram = FaInstagram;
  static readonly youtube = FaYoutube;
  static readonly linkdin = FaLinkedin;
  static readonly snapchat = FaSnapchat;
  static readonly xTwitter = FaSquareXTwitter;
  static readonly whatsapp = FaWhatsapp;

  // Contant
  static readonly phone = FaPhone;
  static readonly email = MdEmail;
  static readonly address = FaMapMarkerAlt;

  // Theme Mode
  static readonly darkTheme = BsFillMoonStarsFill;
  static readonly lightTheme = IoSunnyOutline;

  static readonly language = BsGlobe;

  // Navbar Mobile
  static readonly menuOpen = IoIosMenu;
  static readonly menuClose = IoClose;
}
