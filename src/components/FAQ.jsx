import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Section from "./Section";

const questions = [
  {
    title: "Скільки коштує прибирання квартири?",
    answer:
      "Вартість залежить від площі, стану приміщення та виду прибирання — стандартне, генеральне або після ремонту. Ми завжди формуємо чесну ціну після короткого уточнення деталей. Ви можете дізнатися орієнтовну вартість через форму онлайн-заявки або по телефону.",
  },
  {
    title: "Чи потрібно бути вдома під час прибирання?",
    answer:
      "Ні, не обов’язково. Наші клієнти часто залишають нам ключі або код доступу. Ми гарантуємо безпеку ваших речей і повну конфіденційність.",
  },
  {
    title: "Які засоби ви використовуєте?",
    answer:
      "Ми застосовуємо лише сертифіковану, екологічну хімію, безпечну для дітей і тварин. Якщо у вас є алергії або особливі побажання — повідомте нам, і ми підберемо альтернативу.",
  },
  {
    title: "Як оплачувати прибирання?",
    answer:
      "Оплату можна здійснити готівкою, карткою або через онлайн-банкінг. Для постійних клієнтів діють знижки та бонуси.",
  },
  {
    title: "Чи прибираєте ви після ремонту або свят?",
    answer:
      "Так! Це один із наших найпопулярніших видів прибирання. Ми видаляємо пил, цементні плями, залишки фарби — і повертаємо житло до ідеального стану.",
  },
  {
    title:
      "Чи можна замовити регулярне прибирання (наприклад, раз на тиждень)?",
    answer:
      "Звісно. Багато клієнтів обирають абонемент — це дешевше та зручніше. Ви просто обираєте день і час, а ми беремо все інше на себе.",
  },
  {
    title: "Що робити, якщо я залишуся незадоволений прибиранням?",
    answer:
      "Ми завжди відкриті до зворотного зв’язку. Якщо щось не так — наші фахівці повернуться й виправлять ситуацію безкоштовно. Ми дбаємо про вашу довіру.",
  },
];

export default function FAQ() {
  return (
    <Section id="faq" title="Нас часто запитують" highligtColor="#fff">
      {questions.map((question) => (
        <Accordion key={question.title}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span" sx={{ fontWeight: "700" }}>
              {question.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "left" }}>
            {question.answer}
          </AccordionDetails>
        </Accordion>
      ))}
    </Section>
  );
}
