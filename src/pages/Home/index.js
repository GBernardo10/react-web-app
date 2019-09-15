import React from "react";
import { NavBar } from "../../components/Header/index";
import Grid from "@material-ui/core/Grid";
import { Layout } from "antd";

const { Content } = Layout;
export default () => {
    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
        >
            <NavBar />
            <div>
                <Content style={{ color: "0 50px" }}>
                    <div>rese</div>
                </Content>
            </div>
        </Grid>
    );
};
