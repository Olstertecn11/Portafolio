import React from "react";
import Navbar from './Navbar'
import Footer from "./Footer";

export default function Layout({ children, isNavInside = false }) {

  let content = children;

  if (isNavInside) {
    content = React.cloneElement(children, {
      NavbarComponent: <Navbar />
    });
  }

  return (
    <div>
      {!isNavInside && <Navbar />}

      <main>
        {content}
      </main>
    </div>
  );
}
