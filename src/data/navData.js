import { ChevronDown } from "react-feather";

export const navData = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Products",
    href: "/products"
  },
  {
    label: "Specialties",
    href: "#",
    icon: <ChevronDown />,
    dropdown: [
      { label: "Cardiologist", href: "/cardiologist" },
      { label: "Neurology", href: "/neurology" },
      { label: "Ophthalmology", href: "/ophthalmology" },
      { label: "Urology", href: "/urology" }
    ]
  },
  {
    label: "About Us",
    href: "/about"
  },
  {
    label: "Blogs",
    href: "/blogs"
  },
  {
    label: "Contact Us",
    href: "/contacts"
  }
];
