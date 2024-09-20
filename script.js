alert("i will give you a fact")
const facts = [
    { quote: "\"Did you know that if you pour water on a rock, nothing will happen?\"", author: "- created by Parrot" },
    { quote: "\"The sky is blue because it reflects blue light, right?\"", author: "- created by Parrot" },
    { quote: "\"If you blink fast enough, you might miss this fact.\"", author: "- created by Parrot" },
    { quote: "\"Fact: You can't actually touch your own elbow with your tongue.\"", author: "- created by Parrot" },
    { quote: "\"A cloud is just a really big puff of steam, and you can't stand on it.\"", author: "- created by Parrot" },
    { quote: "\"Grass is green because... well, it's grass.\"", author: "- created by Parrot" },
    { quote: "\"If you close your eyes, you won't be able to see anything.\"", author: "- created by Parrot" },
    { quote: "\"Chickens actually existed before eggs were a thing in cartons.\"", author: "- created by Parrot" },
    { quote: "\"If you walk backward, you're not walking forward.\"", author: "- created by Parrot" },
    { quote: "\"Shadows appear when the light is blocked, so don't be surprised!\"", author: "- created by Parrot" },
    { quote: "\"Water is wet. Mind-blowing, right?\"", author: "- created by Parrot" },
    { quote: "\"The moon doesn't really follow you when you walk, it's just far away!\"", author: "- created by Parrot" },
    { quote: "\"Your phone can't read your mind, but it can read your touch.\"", author: "- created by Parrot" },
    { quote: "\"Don't believe the myths: Cows don't actually jump over the moon.\"", author: "- created by Parrot" },
    { quote: "\"Did you know you can't breathe underwater without special equipment?\"", author: "- created by Parrot" },
    { quote: "\"Turtles aren't the fastest animals, and neither are snails.\"", author: "- created by Parrot" },
    { quote: "\"Pizza is round, but they cut it into triangles. It's a pizza paradox.\"", author: "- created by Parrot" },
    { quote: "\"Did you know that every second, one second passes?\"", author: "- created by Parrot" },
    { quote: "\"If you jump, you'll eventually come back down. Gravity, right?\"", author: "- created by Parrot" },
    { quote: "\"If you're reading this, you're probably looking at a screen.\"", author: "- created by Parrot" },
    { quote: "\"If you walk into a wall, you'll probably stop.\"", author: "- created by Parrot" },
    { quote: "\"If you talk to a fish, it won’t respond.\"", author: "- created by Parrot" },
    { quote: "\"Grass doesn’t grow faster when you watch it.\"", author: "- created by Parrot" },
    { quote: "\"The moon is not actually made of cheese. Sorry to disappoint.\"", author: "- created by Parrot" },
    { quote: "\"You can’t fold a paper airplane made of metal. It’s called a disaster.\"", author: "- created by Parrot" },
    { quote: "\"You can't plug your phone into a potato and expect it to charge.\"", author: "- created by Parrot" },
    { quote: "\"If you drop toast, it won’t always land butter-side down. Try it.\"", author: "- created by Parrot" },
    { quote: "\"You can’t play fetch with a goldfish, no matter how hard you try.\"", author: "- created by Parrot" },
    { quote: "\"Birds can’t read road signs. That's why they never use GPS.\"", author: "- created by Parrot" },
    { quote: "\"Yelling at clouds won’t make them move faster, but it might confuse people.\"", author: "- created by Parrot" },
    { quote: "\"You can’t dig to the center of the Earth with a spoon. That’s a long weekend wasted.\"", author: "- created by Parrot" }
];
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const button = document.getElementById('new-quote');

    button.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        const randomFact = facts[randomIndex];
        quoteElement.classList.remove('show');
        authorElement.classList.remove('show');
        setTimeout(() => {
            quoteElement.textContent = randomFact.quote;
            authorElement.textContent = randomFact.author;
            quoteElement.classList.add('show');
            authorElement.classList.add('show');
        }, 500);
    });