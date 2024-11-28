import cryptobot from "../assets/cryptobot.png";
import bathroombreak from "../assets/bathroombreak.png";
import redditbot from "../assets/redditbot.png";

export const projects = [
    {
        title: "BathroomBreak",
        subtitle: "Developed with Places API and React",
        description:
        "Interactive map that displays restrooms at McGill University. Users can search for restrooms by location and filter by accessibility, showers, and free menstrual products. This project was developed in a team of 4 for the 2024 McGill CodeJam Hackathon.",
        image: bathroombreak,
        link: "https://github.com/xaileena/BathroomBreak",
    },
    {
        title: "Crypto Bot",
        subtitle: "Developed with OpenAI API, Flask, HTML, CSS",
        description:
        "Chatbot developed in 24 hours in a small team of 4 during the McHacks 2023 Hackathon. This project won the Tower Research Capital LLC Challenge. The chatbot provides responses to natural language inputs about various cryptocurrency statistics. Read more about it on our devpost!",
        image: cryptobot,
        link: "https://devpost.com/software/crypto-bot-dmtryx?ref_content=user-portfolio&ref_feature=in_progress",
    },
    {
        title: "Reddit Bot",
        subtitle: "Developed with RedditAPI",
        description:
        "Spam bot that searches for random posts in a specific subreddit where it has not made a comment, and for any comments it has not replied to. It then generates a random message (inspired by the game madlibs). This project was part of an assignment in my introductory computer science class.",
        image: redditbot,
        link: "https://github.com/xaileena/Reddit_Bot",
    }
];

export const skills = [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "C",
    "Spring",
    "React",
    "Angular"
];