import { useEffect, useState } from "react";
import axios from "axios";
import { signOut } from 'firebase/auth';

import { auth } from '../firebase';
import {
  Article,
  ArticleImage,
  ArticleContent,
  Title,
  Description,
  ReadMore,
  NewsContainer,
} from "../styled-components/styles";

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const logout = () => {
    signOut(auth)
  }

  return (
    <NewsContainer>
      <h2>Crypto News</h2>
      <button onClick={logout}>Logout</button>
      <hr />
      {articles.map((article, index) => (
        <Article key={index}>
          {article.urlToImage && (
            <ArticleImage src={article.urlToImage} alt={article.title} />
          )}
          <ArticleContent>
            <Title>{article.title}</Title>
            <Description>{article.description}</Description>
            <ReadMore
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </ReadMore>
          </ArticleContent>
        </Article>
      ))}
    </NewsContainer>
  );
};

export default NewsFeed;
