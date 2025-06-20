import type { PayCardProps, StyleMode } from "../types/index";
import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";

const MiniPayDetailsCard: React.FC<PayCardProps> = ({ cardMode, cardImg,cardText,cardLine}) => {
  const theme = useTheme();
  const mode = cardMode || theme.palette.mode;
  const line = cardLine;

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
    const lines: StyleMode =
    line === "true"
    ?{
        display:"flex"
    }:{
display:"none"
    };
  return (
    <>
      <Box bgcolor={styles.bg} m={2}>
        <Stack direction={"column"} alignItems={"center"} justifyContent={"center"} spacing={1}>
                <img
                  src={typeof cardImg === "string" ? cardImg : ""}
                  alt=""
                  style={{ width: 32, height: 32 }}
                />
                <Typography color={styles.text}>{cardText} </Typography>
                <Divider
                sx={{
                    display:lines.display,
                    background:styles.text,
                    width:150,
                    height:4,
                    borderRadius:10,
                    marginTop:20
                }}
                />
        </Stack>
      </Box>
    </>
  );
};
export default MiniPayDetailsCard;
