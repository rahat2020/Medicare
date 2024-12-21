import Link from "next/link";
import React from "react";

const AppBreadcrumb = ({
  index,
  item,
  breadcrumbListLength,
  href,
  isMobileScreen,
  isCapitilizeActiveLink = false
}) => (
  <React.Fragment key={item?.title}>
    {item?.activeLink ? (
      <span
        className={`text-14 font-semibold text-border-regular ${
          isCapitilizeActiveLink ? "capitalize" : ""
        }`}
      >
        {item?.title}
      </span>
    ) : (
      <Link href={href} className="text-14 font-semibold text-brand-link">
        {item?.title}
      </Link>
    )}
    {index < breadcrumbListLength - 1 && (
      <span className={isMobileScreen ? `mx-1` : `mx-2.5`}>/</span>
    )}
  </React.Fragment>
);

export default AppBreadcrumb;
