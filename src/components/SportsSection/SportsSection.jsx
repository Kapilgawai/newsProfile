import React, { useState, useEffect } from "react";

const SportsSection = () => {
  const [sportsNews, setSportsNews] = useState([]);

  useEffect(() => {
    // Function to fetch sports news
    const fetchSportsNews = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your actual API key
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?category=sports&apiKey=YOUR_API_KEY"
        );
        const data = await response.json();
        setSportsNews(data.articles);
      } catch (error) {
        console.error("Error fetching sports news:", error);
      }
    };

    fetchSportsNews();
  }, []);

  return (
    <div>
      <h2>Sports Section</h2>
      <ul>
        {/* Add null check before mapping */}
        {sportsNews && sportsNews.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SportsSection;
