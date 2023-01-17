# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Screenshot

![](./design/desktop-preview.jpg)

### Links

- Solution URL: [https://github.com/Briuwu/react_REST-countries](https://github.com/Briuwu/react_REST-countries)
- Live Site URL: [https://briuwu-rest-countries.netlify.app/](https://briuwu-rest-countries.netlify.app/)

## My process

I started this project, to practice my react and designing skills. First, I created the necessary folder structures. Next, I created the context that will handle the API call and other functions that will be needed in different files, after that, I started coding on displaying all the necessary elements, after doing that, I styled them using SCSS, and lastly I added the animation using Framer Motion.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- SCSS
- Framer Motion

### What I learned

I learned quite a few different things on this project, mainly on how to create a context, and how to manipulate different arrays to display elements.

I also learned about optional chaining, this (?.) operator returns an undefined if the function or object is undefined or null, instead of throwing an error. Which is really helpful for this part!

```let borders = data.filter((each) => {
      return item?.includes(each.cca3);
    });```

## Author

- Frontend Mentor - [@Briuwu](https://www.frontendmentor.io/profile/Briuwu)
