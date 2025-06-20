import { Box, Stack, Typography, useTheme } from "@mui/material";
import Card from "./Card";
import Cards from "./Cards";
import { Home, Person } from "@mui/icons-material";
import AppCard from "/AppCard.png";
import SideButton from "/SideButton.svg";
import TouchID from "/touchID.svg";
import MiniCard from "./MiniCard";
import PayCard from "./PayCard";
import PayDetailsCard from "./PayDetailsCard";
import MiniPayDetailsCard from "./MiniPayDetailsCard";

const TemplatesCards: React.FC = () => {
  const theme = useTheme();
  return (
    <Cards>
      <Card
        cardTitle="Apple-Pay"
        cardDescriptionDirection="row"
        cardcontentDirection="column"
        miniCardDirection="row"
        items={[
          {
            miniCard: (
              <Box
                height={900}
                width={390}
                bgcolor={theme.palette.grey[800]}
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
              >
                <Box
                  flex={1}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box textAlign="center">
                    <Typography variant="body1" color="white" fontWeight="bold">
                      Double Click
                      <br />
                      to Pay
                    </Typography>
                  </Box>
                </Box>

                <Stack
                  spacing={0}
                  bgcolor={theme.palette.secondary.light}
                  borderRadius="20px 20px 0 0"
                  p={0}
                >
                  <PayCard cardMode="light">
                    <MiniCard
                      miniCardTitle="Apple Card"
                      miniCardSubtitle1="10880 Malibu Point Malibu Cal..."
                      miniCardSubtitle2="•••• 1234"
                      miniCardIcon={AppCard}
                      miniCardModeColor="light"
                    />
                    <MiniCard
                      miniCardTitle="Contact"
                      miniCardSubtitle1="astark@starkindustries.com"
                      miniCardSubtitle2="(123) 456-7890"
                      miniCardIcon={<Person />}
                      miniCardModeColor="light"
                    />
                  </PayCard>
                  <Stack m={"auto"}>
                    <PayDetailsCard cardMode="light">
                      <MiniPayDetailsCard
                        cardImg={SideButton}
                        cardMode="light"
                        cardText="Confirm with Side Button"
                        cardLine="true"
                      />
                    </PayDetailsCard>
                  </Stack>
                </Stack>
              </Box>
            ),
            caption: "Light / Face ID",
          },
          {
            miniCard: (
              <Box
                height={900}
                width={390}
                bgcolor={theme.palette.grey[800]}
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
              >
                <Box
                  flex={1}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box textAlign="center">
                    <Typography variant="body1" color="white" fontWeight="bold">
                      Double Click
                      <br />
                      to Pay
                    </Typography>
                  </Box>
                </Box>

                <Stack
                  spacing={0}
                  bgcolor={theme.palette.secondary.light}
                  borderRadius="20px 20px 0 0"
                  p={0}
                >
                  <PayCard cardMode="light">
                    <MiniCard
                      miniCardTitle="Apple Card"
                      miniCardSubtitle1="10880 Malibu Point Malibu Cal..."
                      miniCardSubtitle2="•••• 1234"
                      miniCardIcon={AppCard}
                      miniCardModeColor="light"
                    />
                    <MiniCard
                      miniCardTitle="Contact"
                      miniCardSubtitle1="astark@starkindustries.com"
                      miniCardSubtitle2="(123) 456-7890"
                      miniCardIcon={<Person />}
                      miniCardModeColor="light"
                    />
                    <MiniCard
                      miniCardTitle="Shipping"
                      miniCardSubtitle1="Anthony Stark"
                      miniCardSubtitle2="10880 Malibu Point"
                      miniCardSubtitle3="Malibu CA 90263"
                      miniCardIcon={<Home />}
                      miniCardModeColor="light"
                    />
                  </PayCard>
                  <Stack m={"auto"}>
                    <PayDetailsCard cardMode="light">
                      <MiniPayDetailsCard
                        cardImg={TouchID}
                        cardMode="light"
                        cardText="Pay with TouchID"
                        cardLine="false"
                      />
                    </PayDetailsCard>
                  </Stack>
                </Stack>
              </Box>
            ),
            caption: "Light / Touch ID",
          },
          {
            miniCard: (
              <Box
                height={900}
                width={390}
                bgcolor={theme.palette.grey[800]}
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
              >
                <Box
                  flex={1}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box textAlign="center">
                    <Typography variant="body1" color="white" fontWeight="bold">
                      Double Click
                      <br />
                      to Pay
                    </Typography>
                  </Box>
                </Box>

                <Stack
                  spacing={0}
                  bgcolor={theme.palette.primary.dark}
                  borderRadius="20px 20px 0 0"
                  p={0}
                >
                  <PayCard cardMode="dark">
                    <MiniCard
                      miniCardTitle="Apple Card"
                      miniCardSubtitle1="10880 Malibu Point Malibu Cal..."
                      miniCardSubtitle2="•••• 1234"
                      miniCardIcon={AppCard}
                      miniCardModeColor="dark"
                    />
                    <MiniCard
                      miniCardTitle="Contact"
                      miniCardSubtitle1="astark@starkindustries.com"
                      miniCardSubtitle2="(123) 456-7890"
                      miniCardIcon={<Person />}
                      miniCardModeColor="dark"
                    />
                  </PayCard>
                  <Stack m={"auto"}>
                    <PayDetailsCard cardMode="dark">
                      <MiniPayDetailsCard
                        cardImg={SideButton}
                        cardMode="dark"
                        cardText="Confirm with Side Button"
                        cardLine="true"
                      />
                    </PayDetailsCard>
                  </Stack>
                </Stack>
              </Box>
            ),
            caption: "Dark/ Face Id",
          },
          {
            miniCard: (
              <Box
                height={900}
                width={390}
                bgcolor={theme.palette.grey[800]}
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
              >
                <Box
                  flex={1}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box textAlign="center">
                    <Typography variant="body1" color="white" fontWeight="bold">
                      Double Click
                      <br />
                      to Pay
                    </Typography>
                  </Box>
                </Box>

                <Stack
                  spacing={0}
                  bgcolor={theme.palette.primary.dark}
                  borderRadius="20px 20px 0 0"
                  p={0}
                >
                  <PayCard cardMode="dark">
                    <MiniCard
                      miniCardTitle="Apple Card"
                      miniCardSubtitle1="10880 Malibu Point Malibu Cal..."
                      miniCardSubtitle2="•••• 1234"
                      miniCardIcon={AppCard}
                      miniCardModeColor="dark"
                    />
                    <MiniCard
                      miniCardTitle="Contact"
                      miniCardSubtitle1="astark@starkindustries.com"
                      miniCardSubtitle2="(123) 456-7890"
                      miniCardIcon={<Person />}
                      miniCardModeColor="dark"
                    />
                    <MiniCard
                      miniCardTitle="Shipping"
                      miniCardSubtitle1="Anthony Stark"
                      miniCardSubtitle2="10880 Malibu Point"
                      miniCardSubtitle3="Malibu CA 90263"
                      miniCardIcon={<Home />}
                      miniCardModeColor="dark"
                    />
                  </PayCard>
                  <Stack m={"auto"}>
                    <PayDetailsCard cardMode="dark">
                      <MiniPayDetailsCard
                        cardImg={TouchID}
                        cardMode="dark"
                        cardText="Pay with TouchID"
                        cardLine="false"
                      />
                    </PayDetailsCard>
                  </Stack>
                </Stack>
              </Box>
            ),
            caption: "Dark / Touch ID",
          },
        ]}
      />
    </Cards>
  );
};

export default TemplatesCards;
