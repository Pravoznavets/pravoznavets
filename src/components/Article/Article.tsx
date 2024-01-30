import { FC } from "react";
import {
  ArticleDescription,
  ArticleImage,
  ArticteTitle,
  LearnMoreLink,
  StyledArticle,
} from "./Article.styled";

type ArticleProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const Article: FC<ArticleProps> = ({ image, title, description, link }) => {
  return (
    <StyledArticle>
      <ArticleImage src={image} alt="Lawyer" />
      <div>
        <ArticteTitle>{title}</ArticteTitle>
        <ArticleDescription> {description}</ArticleDescription>
      </div>
      <LearnMoreLink to={link}>Дізнатися більше</LearnMoreLink>
    </StyledArticle>
  );
};

export default Article;
