import { Person, Home, Bento } from "@mui/icons-material";

import AppCard from "/AppCard.png";
import SideButton from "/SideButton.svg";
import TouchID from "/touchID.svg";

import Card from "./Card";
import MiniCard from "./MiniCard";
import PayCard from "./PayCard";
import PayDetailsCard from "./PayDetailsCard";
import MiniPayDetailsCard from "./MiniPayDetailsCard";
import Cards from "./Cards";

const AtomsCards: React.FC = () => {
  return (
    <Cards>
      <Card
        cardDescriptionDirection="column"
        cardcontentDirection="row"
        cardTitle="ApplePay-detailCard"
        items={[
          {
            miniCard: (
              <MiniCard
                miniCardTitle="Apple Card"
                miniCardSubtitle1="10880 Malibu Point Malibu Cal..."
                miniCardSubtitle2="•••• 1234"
                miniCardIcon={AppCard}
                miniCardModeColor="light"
              />
            ),
            caption: "Light / Contact",
          },
          {
            miniCard: (
              <MiniCard
                miniCardTitle="Contact"
                miniCardSubtitle1="astark@starkindustries.com"
                miniCardSubtitle2="(123) 456-7890"
                miniCardIcon={<Person />}
                miniCardModeColor="light"
              />
            ),
            caption: "Light / Shipping",
          },
          {
            miniCard: (
              <MiniCard
                miniCardTitle="Shipping"
                miniCardSubtitle1="Anthony Stark"
                miniCardSubtitle2="10880 Malibu Point"
                miniCardSubtitle3="Malibu CA 90263"
                miniCardIcon={<Home />}
                miniCardModeColor="light"
              />
            ),
            caption: "Light / Shipping",
          },
          {
            miniCard: (
              <MiniCard
                miniCardTitle="Shipping"
                miniCardSubtitle1="Arrives 5-7 days"
                miniCardPrice="$0.00"
                miniCardIcon={<Bento />}
                miniCardModeColor="light"
              />
            ),
            caption: "Light / Shipping Method",
          },
          {
            miniCard: (
              <MiniCard
                miniCardTitle="Apple Card"
                miniCardSubtitle1="10880 Malibu Point Malibu Cal..."
                miniCardSubtitle2="•••• 1234"
                miniCardIcon={AppCard}
                miniCardModeColor="dark"
              />
            ),
            caption: "Dark / Contact",
          },
          {
            miniCard: (
              <MiniCard
                miniCardTitle="Contact"
                miniCardSubtitle1="astark@starkindustries.com"
                miniCardSubtitle2="(123) 456-7890"
                miniCardIcon={<Person />}
                miniCardModeColor="dark"
              />
            ),
            caption: "Dark / Shipping",
          },
          {
            miniCard: (
              <MiniCard
                miniCardTitle="Shipping"
                miniCardSubtitle1="Anthony Stark"
                miniCardSubtitle2="10880 Malibu Point"
                miniCardSubtitle3="Malibu CA 90263"
                miniCardIcon={<Home />}
                miniCardModeColor="dark"
              />
            ),
            caption: "Dark / Shipping",
          },
          {
            miniCard: (
              <MiniCard
                miniCardTitle="Shipping"
                miniCardSubtitle1="Arrives 5-7 days"
                miniCardPrice="$0.00"
                miniCardIcon={<Bento />}
                miniCardModeColor="dark"
              />
            ),
            caption: "Dark / Shipping Method",
          },
        ]}
      />
      {/* ApplePay-paymentDetail */}
      <Card
        cardDescriptionDirection="column"
        cardcontentDirection="row"
        cardTitle="ApplePay-paymentDetails"
        items={[
          // Light Pay Details Card
          {
            miniCard: (
              <PayDetailsCard cardMode="light">
                <MiniPayDetailsCard
                  cardImg={SideButton}
                  cardMode="light"
                  cardText="Confirm with Side Button"
                  cardLine="true"
                />
              </PayDetailsCard>
            ),
            caption: "Light / FaceID",
          },
          {
            miniCard: (
              <PayDetailsCard cardMode="light">
                <MiniPayDetailsCard
                  cardImg={TouchID}
                  cardMode="light"
                  cardText="Pay with TouchID"
                  cardLine="false"
                />
              </PayDetailsCard>
            ),
            caption: "Light / TouchID",
          },
          // Dark Pay Details Card
          {
            miniCard: (
              <PayDetailsCard cardMode="dark">
                <MiniPayDetailsCard
                  cardImg={SideButton}
                  cardMode="dark"
                  cardText="Confirm with Side Button"
                  cardLine="true"
                />
              </PayDetailsCard>
            ),
            caption: "Dark / FaceID",
          },
          {
            miniCard: (
              <PayDetailsCard cardMode="dark">
                <MiniPayDetailsCard
                  cardImg={TouchID}
                  cardMode="dark"
                  cardText="Pay with TouchID"
                  cardLine="false"
                />
              </PayDetailsCard>
            ),
            caption: "Dark / TouchID",
          },
        ]}
      />
      {/* ApplePay-summarySheet */}
      <Card
        cardDescriptionDirection="column"
        cardcontentDirection="row"
        cardTitle="ApplePay-summarySheet"
        items={[
          {
            // Light Pay Card
            miniCard: (
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
                <MiniCard
                  miniCardTitle="Shipping"
                  miniCardSubtitle1="Arrives 5-7 days"
                  miniCardPrice="$0.00"
                  miniCardIcon={<Bento />}
                  miniCardModeColor="light"
                />
              </PayCard>
            ),
            caption: "Light",
          },
          {
            // Dark Pay Card
            miniCard: (
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
                <MiniCard
                  miniCardTitle="Shipping"
                  miniCardSubtitle1="Arrives 5-7 days"
                  miniCardPrice="$0.00"
                  miniCardIcon={<Bento />}
                  miniCardModeColor="dark"
                />
              </PayCard>
            ),
            caption: "Dark",
          },
        ]}
      />
    </Cards>
  );
};

export default AtomsCards;
