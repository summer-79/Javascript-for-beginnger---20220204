quotes = [
    {
        quote : "The friendship that can cease has never been real.",
        author : "Saint Jerome"
    },
    {
        quote : "It's a lot like nature. You only have as many animals as the ecosystem can support and you only have as many friends as you can tolerate the bitching of.",
        author : "Randy K. Milholland"
    },
    {
        quote : "Don't flatter yourself that friendship authorizes you to say disagreeable things to your intimates. The nearer you come into relation with a person, the more necessary do tact and courtesy become. Except in cases of necessity, which are rare, leave your friend to learn unpleasant things from his enemies; they are ready enough to tell them.",
        author : "Oliver Wendell Holmes"
    },
    {
        quote : "Books are the quietest and most constant of friends; they are the most accessible and wisest of counsellors, and the most patient of teachers.",
        author : "Charles W. Eliot"
    },
    {
        quote : "Read much, but not many books.",
        author : "Benjamin Franklin"
    },
    {
        quote : "Let no one ever come to you without leaving better and happier.",
        author : "Mother Teresa"
    },
    {
        quote : "This bud of love, by summer's ripening breath, May prove a beauteous flower when next we meet.",
        author : "William Shakespeare"
    },
    {
        quote : "Nothing makes the earth seem so spacious as to have friends at a distance; they make the latitudes and longitudes.",
        author : "Henry David Thoreau"
    },
    {
        quote : "Fashion is made to become unfashionable.",
        author : "Gabriel Coco Chanel"
    },
    {
        quote : "When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That's relativity.",
        author : "Albert Einstein"
    },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:nth-child(2)");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML=todaysQuote.quote;
author.innerHTML=todaysQuote.author;
