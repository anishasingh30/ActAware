import React, { useState, useEffect } from "react";
import "../styles/FeedbackStories.css";

const feedbackData = [
  {
    image: "https://plus.unsplash.com/premium_photo-1661322806498-4867760086f9?q=80&w=2017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Emily Johnson",
    feedback:
      "ActAware has truly been a game-changer for me! Before discovering this platform, I struggled to find the right resources and guidance on how to contribute effectively towards global sustainability goals. ActAware not only provided me with valuable insights and educational tools but also connected me with a community of like-minded individuals who are passionate about making a difference. Whether it's learning about the 17 Global Goals, participating in impactful initiatives, or finding opportunities to donate, this platform has empowered me to take meaningful action. I feel more confident and motivated than ever to play my part in creating a sustainable and equitable future for all!",
  },
  {
    image: "https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601_1280.jpg",
    name: "Michael Smith",
    feedback:
      "I never realized how easy it was to make a difference until I joined ActAware. Before discovering this platform, I always thought contributing to global causes required extensive time, resources, or connections. However, ActAware changed my perspective completely. With its user-friendly interface, it effortlessly guides users through the 17 Global Goals, providing valuable information, interactive learning opportunities, and tangible ways to take action.What truly stands out is how simple it is to make a meaningful impact—whether through donations, volunteering, or spreading awareness. The platform not only makes giving back accessible but also educates and empowers individuals to become advocates for positive change. Thanks to ActAware, I now feel more informed, engaged, and motivated to contribute towards a sustainable future. It’s incredible to see how small actions, when done collectively, can create a ripple effect of change!!",
  },
  {
    image: "https://images.unsplash.com/photo-1570274552732-05212a4f75ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "David Williams",
    feedback:
      "Through ActAware, I found a strong community of like-minded individuals who share my passion for climate change and education. Before joining, I often felt like my efforts to make a difference were isolated and small. But ActAware connected me with a network of people who are equally driven to create meaningful change.",
  },
];

function FeedbackStories() {
  const [currentFeedback, setCurrentFeedback] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeedback((prev) => (prev + 1) % feedbackData.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feedback-container">
      <h2 className="feedback-heading">What People Say About Us</h2>
      <div className="feedback-box">
        <img
          src={feedbackData[currentFeedback].image}
          alt={feedbackData[currentFeedback].name}
          className="feedback-image"
        />
        <h3 className="feedback-name">{feedbackData[currentFeedback].name}</h3>
        <p className="feedback-text">{feedbackData[currentFeedback].feedback}</p>
      </div>
    </div>
  );
}

export default FeedbackStories;
