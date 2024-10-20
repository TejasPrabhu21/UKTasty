"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { usePathname } from "next/navigation";

const BreadCrumbs = () => {
  const pathName = usePathname();
  const pathSegments = pathName.split("/").filter((segment) => segment);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathSegments.map((segment, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/${pathSegments.slice(0, index + 1).join("/")}`}
              >
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {/* Add separator except for the last item */}
            {index < pathSegments.length - 1 && (
              <BreadcrumbSeparator className="hidden md:block" />
            )}
          </React.Fragment>
        ))}{" "}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbs;
