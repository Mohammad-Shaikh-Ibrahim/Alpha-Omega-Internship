import { Box, Stack, Typography, useTheme } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import type { MiniCardProps, StyleMode } from "../types/index";

const MiniCard: React.FC<MiniCardProps> = ({
  miniCardTitle,
  miniCardSubtitle1,
  miniCardSubtitle2,
  miniCardSubtitle3,
  miniCardPrice,
  miniCardIcon,
  miniCardModeColor,
}) => {
  const theme = useTheme();

  const mode = miniCardModeColor || theme.palette.mode;

  const styles: StyleMode =
    mode === "dark"
      ? {
          bg: theme.palette.secondary.dark,
          text: "#fff",
          subtitle: "#ccc",
          iconColor: "#fff",
          cardIconBg: theme.palette.primary.dark,
        }
      : {
          bg: "#fff",
          text: "#000",
          subtitle: "#555",
          iconColor: "#000",
          cardIconBg: theme.palette.secondary.light,
        };

  return (
    <Box
      sx={{
        bgcolor: styles.bg,
        color: styles.text,
        borderRadius: 4,
        p: 2,
        m: 2,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={3}
      >
        <Stack direction="row" alignItems="flex-start" spacing={2}>
          {/* Image & Icon */}
          {miniCardIcon && (
            <Box display="flex" alignItems="center">
              {typeof miniCardIcon === "string" ? (
                <img
                  src={miniCardIcon}
                  alt={miniCardTitle}
                  style={{ width: 40, height: 25 }}
                />
              ) : (
                <Box
                  sx={{
                    backgroundColor: styles.cardIconBg,
                    color: styles.iconColor,
                    borderRadius: "10px",
                    padding: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                  }}
                >
                  {miniCardIcon}
                </Box>
              )}
            </Box>
          )}

          {/* Text Content */}
          <Box>
            {typeof miniCardIcon === "string" ? (
              <>
                <Typography variant="body1" sx={{ color: styles.text }}>
                  {miniCardTitle}
                </Typography>
                <Stack direction="column" spacing={0.5}>
                  <Typography variant="body2" sx={{ color: styles.subtitle }}>
                    {miniCardSubtitle1}
                  </Typography>
                  <Typography variant="body2" sx={{ color: styles.subtitle }}>
                    {miniCardSubtitle2}
                  </Typography>
                  <Typography variant="body2" sx={{ color: styles.subtitle }}>
                    {miniCardSubtitle3}
                  </Typography>
                </Stack>
              </>
            ) : (
              <>
                <Typography variant="body2" sx={{ color: styles.subtitle }}>
                  {miniCardTitle}
                </Typography>
                <Stack direction="column" spacing={0.5}>
                  <Typography variant="body1" sx={{ color: styles.text }}>
                    {miniCardSubtitle1}
                  </Typography>
                  <Typography variant="body1" sx={{ color: styles.text }}>
                    {miniCardSubtitle2}
                  </Typography>
                  <Typography variant="body1" sx={{ color: styles.text }}>
                    {miniCardSubtitle3}
                  </Typography>
                </Stack>
              </>
            )}
          </Box>
        </Stack>

        <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
          {/* Price */}
          <Typography variant="body2" sx={{ color: styles.subtitle }}>
            {miniCardPrice}
          </Typography>
          {/* Arrow Icon */}
          <ArrowForwardIosIcon
            sx={{ fontSize: "14px", color: styles.subtitle }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default MiniCard;
