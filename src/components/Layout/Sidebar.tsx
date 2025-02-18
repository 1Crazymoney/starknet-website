"use client";
import { Box } from "src/libs/chakra-ui";

type Props = {
  children: React.ReactNode;
};

export const Sidebar = ({ children }: Props) => {
  return (
    <Box
      as="aside"
      role="complementary"
      width={{ base: "full", lg: "xl" }}
      alignSelf="start"
      position={{ base: "unset", lg: "sticky" }}
      top="36"
    >
      {children}
    </Box>
  );
};
