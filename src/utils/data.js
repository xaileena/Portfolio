import cryptobot from "../assets/cryptobot.png";
import wordle from "../assets/wordle.png";
import redditbot from "../assets/redditbot.png";

export const projects = [
    {
        title: "Reddit Bot",
        subtitle: "Developed with Python, Reddit API",
        description:
        "Spam bot that searches for random posts in a specific subreddit where it has not made a comment, and for any comments it has not replied to. It then generates a random message (inspired by the game madlibs). This project was part of an assignment in my introductory computer science class.",
        image: redditbot,
        link: "https://github.com/xaileena/Reddit_Bot",
    },
    {
        title: "Crypto Bot",
        subtitle: "Developed with Python, Flask, HTML, CSS, OpenAI API",
        description:
        "Chatbot developed in 24 hours in a small team of 4 during the McHacks 2023 Hackathon. This project won the Tower Research Capital LLC Challenge. The chatbot provides responses to natural language inputs about various cryptocurrency statistics. Read more about it on our devpost!",
        image: cryptobot,
        link: "https://devpost.com/software/crypto-bot-dmtryx?ref_content=user-portfolio&ref_feature=in_progress",
    },
    {
        title: "Wordle",
        subtitle: "Developed in Python",
        description:
        "Inspired by the original Wordle game. The same game rules apply: The player has 6 chances to guess a 5 letter word, and every letter of their guess is color-coded. The twist: this game allows up to 2 players and it is run on command-line! This project was part of an assignment in my introductory class computer science class.",
        image: wordle,
        link: "https://github.com/xaileena/Wordle",
    },
];

export const skills = [
    "Java",
    "Python",
    "JavaScript",
    "C",
    "Flask",
    "Spring Boot",
    "React",
    "Angular"
];