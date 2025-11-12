import ServiceCard from "./ServiceCard.jsx";
import { Grid } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServicesOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Section from "./Section.jsx";

const services = [
  {
    title: "Генеральне прибирання",
    subtitle: "Збереження часу – 1-2 тижні",
    details: [
      "глибока чистка поверхонь",
      "видалення застарілих забруднень",
      "миття стелі, стін, скла, всіх інших поверхонь",
    ],
    Icon: ApartmentIcon,
  },
  {
    title: "Поточне прибирання",
    subtitle: "збереження часу – 3-4 години в день",
    details: [
      "видалення забруднень, які виникають в процесі щоденного користування будівлі",
      "не стосується важкодоступних місць та відмивання складних зафіксованих забруднень",
    ],
    Icon: CleaningServicesOutlinedIcon,
  },
  {
    title: "Після квартирантів / перед заселенням",
    subtitle: "Збереження часу – 1-2 дні",
    details: [
      "повне миття поверхонь",
      "видалення запахів",
      "дезінфекція сантехніки",
      "обробка кухні від жиру",
      "прибирання під меблями",
    ],
    Icon: PeopleAltOutlinedIcon,
  },
  {
    title: "Після ремонту",
    subtitle: "Збереження часу – 2-3 дні",
    details: [
      "видалення будівельного пилу з усіх поверхонь",
      "миття вікон, рам, підвіконь від штукатурки, фарби",
      "очищення плитки, підлоги від клею, цементу",
      "протирка стін, меблів, освітлення",
      "полірування поверхонь",
      "вологе прибирання",
    ],
    Icon: ConstructionOutlinedIcon,
  },
  {
    title: "Прибирання під’їздів ",
    subtitle: "",
    details: [],
    Icon: BusinessOutlinedIcon,
  },
];
export default function Services() {
  return (
    <Section id="services" title="З нами ти зможеш знайти багато часу: ">
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
