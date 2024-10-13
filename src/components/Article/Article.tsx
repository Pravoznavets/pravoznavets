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
      <div>
        <ArticleImage src={image} alt="Lawyer" />
      </div>
      <div>
        <ArticteTitle>{title}</ArticteTitle>
        <ArticleDescription> {description}</ArticleDescription>
      </div>
      <LearnMoreLink to={link}>
        <span>Дізнатися більше</span>
        <span></span>
        <span>До статті</span>
      </LearnMoreLink>
    </StyledArticle>
  );
};

export default Article;
