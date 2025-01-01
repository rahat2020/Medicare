// components/SocialMediaIcons.jsx
import React from "react";
import { Facebook, Twitter, Instagram } from "react-feather";

const SocialMediaIcons = ({
  size = 24,
  color = "text-gray-500",
  hoverColor = "hover:text-blue-600"
}) => {
  const icons = [
    { Icon: Facebook, link: "https://facebook.com", label: "Facebook" },
    { Icon: Twitter, link: "https://twitter.com", label: "Twitter" },
    { Icon: Instagram, link: "https://instagram.com", label: "Instagram" }
  ];

  return (
    <div className="flex space-x-4">
      {icons.map(({ Icon, link, label }, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${color} ${hoverColor} cursor-pointer`}
          aria-label={label}
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
