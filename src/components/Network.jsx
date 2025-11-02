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
      window.open(`viber://chat?number=${MOBILE_NUMBER}`);
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
