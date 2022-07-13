import { Box } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import Navbar from "../Navbar/Navbar";

type MainLayoutProps = {
  children: any;
};

const MainLayout: React.FC<PropsWithChildren<MainLayoutProps>> = ({
  children,
}) => {
  return (
    <Box>
      <Navbar />
      <Box>{children}</Box>
    </Box>
  );
};

export default MainLayout;
