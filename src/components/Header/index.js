import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./styles.css";

const { Header } = Layout;
export const NavBar = () => {
    return (
        <Layout>
            <Header>
                <section className="grid-container">
                    <div className="logo"></div>
                    <div className="avatar"></div>
                </section>
            </Header>
        </Layout>
    );
};
