import Header from "@/modules/Header";
import React from "react";
import "./index.scss";

export default function Layout({
  children,
  id = "",
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <>
      <Header />
      <div id={id} className="content-wrap">
        {children}
      </div>
      {/* footer */}
    </>
  );
}
