import { ChangeEvent, FC, useState } from "react";
import {
  FeedbackFormWrapper,
  Form,
  FormBlock,
  FormButton,
  FormInput,
  FormLabel,
  FormTextArea,
  FormThumb,
  FormTitle,
} from "./FeedbackForm.styled";
import Container from "components/Container";

const FeedbackForm: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [phone, setPhone] = useState<string>("+380");
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setUsername(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setMessage(value);
  };
  return (
    <FeedbackFormWrapper>
      <Container>
        <div>
          <FormTitle>Замовити консультацію</FormTitle>
          <FormThumb>
            <Form action="https://formspree.io/f/mlddeeyv" method="post">
              <FormBlock>
                <FormInput
                  id="name"
                  type="text"
                  name="name"
                  value={username}
                  onChange={handleChange}
                  required
                  placeholder=""
                />
                <FormLabel htmlFor="name">Ім'я</FormLabel>
              </FormBlock>
              <FormBlock>
                <FormInput
                  id="phone"
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  pattern="^\+?3?8?(0\d{9})$"
                  required
                  placeholder=""
                />
                <FormLabel htmlFor="phone">Номер телефону</FormLabel>
              </FormBlock>
              <FormBlock>
                <FormTextArea
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleMessageChange}
                  placeholder=""
                />
                <FormLabel htmlFor="message">Коментар</FormLabel>
              </FormBlock>
              <FormButton type="submit">Відправити</FormButton>
            </Form>
          </FormThumb>
        </div>
      </Container>
    </FeedbackFormWrapper>
  );
};

export default FeedbackForm;
