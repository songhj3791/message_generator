//inspiring message list generator

function message(message, author){
    return {
        message,
        author
    }
}

//declare messages array for multi message object
const messages = [];
messages.push(message('All our dreams can come true, if we have the courage to pursue them.', 'Walt Disney'));
messages.push(message('The secret of getting ahead is getting started.', 'Mark Twain'));
messages.push(message('I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.', 'Michael Jordan'));
messages.push(message('Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.', 'Mary Kay Ash'));
messages.push(message('The best time to plant a tree was 20 years ago. The second best time is now.', 'Chinese Proverb'));
messages.push(message('Only the paranoid survive.', 'Andy Grove'));
messages.push(message('It’s hard to beat a person who never gives up.', 'Babe Ruth'));
messages.push(message('I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.’', 'Leah Busque'));
messages.push(message('If people are doubting how far you can go, go so far that you can’t hear them anymore.', 'Walt Disney'));
messages.push(message('We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.', 'Arianna Huffington'));
messages.push(message('Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.', 'Joss Whedon'));



//randomly generate message
// our first recommendation : ~~~
// our second recommendation : ~~~
// our third recommendation : ~~~

function messageGenerator(){
    //store randomly created indexs
    let randomIndex = [];

    while(randomIndex.length<3){
        let index = Math.floor(Math.random()*messages.length);

        //avoid duplicated index in randomIndex Array
        if(!randomIndex.includes(index)){
            randomIndex.push(index);
        }

    }

    //after create randomIndex return messages string

    return `our first recommendation : "${messages[randomIndex[0]].message}" - ${messages[randomIndex[0]].author} \n\
            our second recommendation : "${messages[randomIndex[1]].message}" - ${messages[randomIndex[1]].author} \n\
            our third recommendation : "${messages[randomIndex[2]].message}" - ${messages[randomIndex[2]].author}`
}

messageGenerator();
