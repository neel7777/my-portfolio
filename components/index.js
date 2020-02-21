
// const List = [{title: 'Newsfeed-Components', pic: "", description: "This project was great practice in building a mock Newsfeed reader. By utilizing event click listeners, I created a series of news articles which toggled open to reveal dummy data, as well as a collapsible menu bar.", link: "https://github.com/neel7777/Newsfeed-Components"},
// {title: 'Saltiest-Hackers', pic: "", description: "For my first build week with Lambda School, I collaborated with several students of other cohorts/fields of study to create a website that tracks commenters based on their level of 'saltiness' while commenting", link: "https://github.com/neel7777/marketing"},
// {title: 'NASA-photo', pic: "", description: "In this project, I imported data from the NASA site to display the official photo of the day.", link: "https://github.com/neel7777/nasa-photo-of-the-day"}]

// function cardMaker(obj) {
//     const card = document.createElement('div');
//     const name = document.createElement('h1');
//     const img1 = document.createElement('img');
//     const description = document.createElement('p');
//     const link = document.createElement('a');

//     name.textContent = obj.name;
//     img1.src = obj.pic;
//     description.textContent = obj.description;
//     link.textContent = 'GitHub';
//     link.href = obj.link;

//     card.append(name);
//     card.append(img1);
//     card.append(description);
//     card.append(link);
    

//     card.classList.add('card');
//     name.classList.add('name');
//     img1.classList.add('img');
//     description.classList.add('desc');
//     link.classList.add('link');

//     return card;

// }

// axios.get(List)
//     .then(item => {
//         console.log(item);
//         item.forEach(element => {            
//             console.log(element);
//             const enter = document.querySelector('.projects');
//             enter.append(cardMaker(element));           

//         })


//     })
//     .catch(err => {
//         console.error(err);
//     })