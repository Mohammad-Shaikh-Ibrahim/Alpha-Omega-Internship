import { Stack, Box, Typography, Divider } from "@mui/material";
import type { SectionProps } from "../types/index";

const Section: React.FC<SectionProps> = ({ name }) => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            mt: 2,
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            {name}
          </Typography>
        </Box>
      </Stack>
      <Divider sx={{ my: 3 }} />
    </>
  );
};
export default Section;
