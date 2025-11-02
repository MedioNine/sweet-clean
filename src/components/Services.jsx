import ServiceCard from "./ServiceCard.jsx";
import { Grid } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServicesOutlined";
import DryCleaningOutlinedIcon from "@mui/icons-material/DryCleaningOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import Section from "./Section.jsx";

const services = [
  {
    title: "Прибирання під'їздів",
    subtitle: "Ляля фа фа ляля фафа фів",
    Icon: ApartmentIcon,
  },
  {
    title: "Генеральне прибирання",
    subtitle: "Ляля фа фа ляля фафа фівЛяля фа фа ляля фафа ф",
    Icon: CleaningServicesOutlinedIcon,
  },
  {
    title: "Підтримуюче прибирання",
    subtitle: "Ляля фа фа ляля фафа фів",
    Icon: DryCleaningOutlinedIcon,
  },
  {
    title: "Після ремонту",
    subtitle: "Ляля фа фа ляля фафа фЛяля фа фа ляля фафа ф",
    Icon: ConstructionOutlinedIcon,
  },
];
export default function Services() {
  return (
    <Section id="services" title="Послуги">
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: "center",
          alignItems: "top",
        }}
        padding={2}
      >
        {services.map((service) => (
          <Grid key={service.title}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
