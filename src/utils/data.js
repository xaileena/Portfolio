import cryptobot from "../assets/cryptobot.png";
import wordle from "../assets/wordle.png";
import redditbot from "../assets/redditbot.png";

export const projects = [
    {
        title: "Reddit Bot",
        subtitle: "Python, Reddit API",
        description:
        "Spam bot that searches for random posts in a specific subreddit where it has not made a comment, and for any comments it has not replied to. It then generates a random message (inspired by madlib). This project was part of an assignment in my introductory computer science class.",
        image: redditbot,
        link: "https://github.com/xaileena/Reddit_Bot",
    },
    {
        title: "Crypto Bot",
        subtitle: "Python, Flask, HTML, CSS, OpenAI API",
        description:
        "Chatbot developed in 24 hours in a small team of 4 during McHacks 2023 and it won the Tower Research Capital LLC Challenge. This chatbot provides responses to natural language inputs about various cryptocurrency statistics. Read more about it on our devpost!",
        image: cryptobot,
        link: "https://devpost.com/software/crypto-bot-dmtryx?ref_content=user-portfolio&ref_feature=in_progress",
    },
    {
        title: "Wordle",
        subtitle: "Python",
        description:
        "Inspired by the original Wordle game. The same game rules apply: The player has 6 chances to guess a 5 letter word, and every letter of their guess is color-coded.This game allows up to 2 players and it is run on command-line. It was part of an assignment in my introductory class.",
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