import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NewsContainer = styled.div`
  padding: 20px;
  width: 800px;
  margin: auto;
`;

export const Form = styled.form`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

export const LinkText = styled.span`
  margin-top: 20px;
  color: #007bff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Description = styled.p`
  margin: 10px 0;
  color: #666;
`;

export const ReadMore = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const DataCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const DataTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #333;
`;

export const DataValue = styled.p`
  margin: 10px 0;
  font-size: 14px;
  color: #666;
`;

export const Article = styled.div`
  display: flex;
  margin-bottom: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ArticleImage = styled.img`
  width: 150px;
  height: 150px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  object-fit: cover;
`;

export const ArticleContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
