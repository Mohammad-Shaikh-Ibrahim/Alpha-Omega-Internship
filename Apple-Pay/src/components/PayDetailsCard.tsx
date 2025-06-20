import type { PayCardProps, StyleMode } from "../types/index";
import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const PayDetailsCard: React.FC<PayCardProps> = ({ cardMode, children }) => {
  const theme = useTheme();
  const mode = cardMode || theme.palette.mode;
  const styles: StyleMode =
    mode === "dark"
      ? {
          bg: theme.palette.primary.dark,
          text: "#fff",
          subtitle: "#ccc",
        }
      : {
          bg: theme.palette.secondary.light,
          text: theme.palette.primary.dark,
          subtitle: "#555",
        };
  return (
    <>
      <Box bgcolor={styles.bg} m={2} width={300}>
        <Divider
          sx={{
            background: "#ccc",
          }}
        />
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          spacing={0.5}
          p={2}
        >
          <Stack>
            <Typography variant="body2" color={styles.subtitle} fontSize={10}>
              Pay Stark Industries
            </Typography>
            <Typography variant="h5" color={styles.text} fontWeight={700}>
              $199
            </Typography>
          </Stack>
          {/* Arrow Icon */}
          <ArrowForwardIosIcon
            sx={{
              fontSize: "14px",
              color: styles.subtitle,
            }}
          />
        </Stack>
        <Divider
          sx={{
            mb: 2,
            background: "#ccc",
          }}
        />
        <Stack direction={"column"} alignItems={"center"} >
          {children}
        </Stack>
      </Box>
    </>
  );
};
export default PayDetailsCard;
