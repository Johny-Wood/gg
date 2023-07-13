import React from "react";
import Header from "../Header";
import SideBarMenu from "../SideBarMenu";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <article className="main__wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <SideBarMenu />
              </div>

              <div className="col-md-10">
                <section className="main__content">
                  <Outlet />
                </section>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
