import { Stack } from "@mui/material";
import type { CardsProps } from "../types/index";

const Cards: React.FC<CardsProps> = ({ children }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      spacing={3}
      mb={8}
    >
      {children}
    </Stack>
  );
};
export default Cards;
