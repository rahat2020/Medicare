import { Menu, X, User, Lock, ChevronDown, AlignRight } from "react-feather";

export const navData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Pages",
    href: "#",
    icon: <ChevronDown />, 
    dropdown: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Service Details", href: "/serviceDetails" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Specialties",
    href: "#",
    icon: <ChevronDown />, 
    dropdown: [
      { label: "Cardiologist", href: "/cardiologist" },
      { label: "Neurology", href: "/neurology" },
      { label: "Ophthalmology", href: "/ophthalmology" },
      { label: "Urology", href: "/urology" },
    ],
  },
  {
    label: "Doctors",
    href: "/doctors",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];
