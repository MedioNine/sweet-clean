import { Grid } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ReactComponent as ViberSvg } from "../assets/viber.svg";
import IconButton from "@mui/material/IconButton";
import "./Network.css";
import {
  INSTAGRAM_ACCOUNT,
  MOBILE_NUMBER,
  TELEGRAM_ACCOUNT,
} from "../constants/contacts";

const networks = [
  {
    Icon: TelegramIcon,
    onClick: () => window.open(`https://t.me/${TELEGRAM_ACCOUNT}`, "_blank"),
  },
  {
    Icon: InstagramIcon,
    onClick: () =>
      window.open(`https://www.instagram.com/${INSTAGRAM_ACCOUNT}/`, "_blank"),
  },
  {
    Icon: ViberSvg,
    onClick: () => {
      const viberLink = `viber://chat?number=${MOBILE_NUMBER.replace(
        /\D/g,
        ""
      )}`;
      // Fallback if browser doesn't support viber:// protocol
      if (
        navigator.userAgent.includes("Android") ||
        navigator.userAgent.includes("iPhone")
      ) {
        window.location.href = viberLink;
      } else {
        window.open(
          `https://msng.link/o/?${MOBILE_NUMBER.replace(/\D/g, "")}=vi`,
          "_blank"
        );
      }
    },
  },
];
export default function Network() {
  return (
    <Grid container justifyContent="center" mt={1}>
      {networks.map((network, index) => {
        const Icon = network.Icon;
        return (
          <IconButton onClick={network.onClick} key={index}>
            <Icon className="network-icon" style={{ width: 25, height: 25 }} />
          </IconButton>
        );
      })}
    </Grid>
  );
}
