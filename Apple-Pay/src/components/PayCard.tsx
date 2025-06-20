import type { PayCardProps, StyleMode } from "../types/index";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";

const PayCard: React.FC<PayCardProps> = ({ cardMode, children }) => {
  const theme = useTheme();
  const mode = cardMode || theme.palette.mode;
  const styles: StyleMode =
    mode === "dark"
      ? {
          bg: theme.palette.primary.dark,
          iconColor: "#fff",
        }
      : {
          bg: theme.palette.secondary.light,
          iconColor: theme.palette.primary.dark,
        };
  return (
    <>
      <Box bgcolor={styles.bg} p={2} m={2} borderRadius={"20px 20px 0 0"}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          spacing={0.5}
          mb={1}
        >
          <AppleIcon
            sx={{
              color: styles.iconColor,
              width: 24,
              height: 24,
            }}
          />
          <Typography color={styles.iconColor} fontSize={24}>
            Pay
          </Typography>
        </Stack>
        <Stack direction={"column"} spacing={1}>
          {children}
        </Stack>
      </Box>
    </>
  );
};
export default PayCard;