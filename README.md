# Frontend Mentor - Interactive card details form solution

## Table of contents

- [Frontend Mentor - Interactive card details form solution](#frontend-mentor---interactive-card-details-form-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)


## Overview

A landing page where the user can enter card details and see them displayed on the side. The user is also shown a completed display when the form is succesfully completed, plus a dark mode and some animations. Finally this landing page is suitable for all devices.

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page
- Add dark-mode, style elements accordingly
- Add animations, card elements etc.

### Screenshot

![Desktop dark completed form](./images/screenshots/Desktop%20dark%20completed%20form.png)
![Desktop normal completed form](./images/screenshots/Desktop%20normal%20completed%20form.png)
![Desktop normal form error](./images/screenshots/Desktop%20normal%20form%20error.png)
![Ipad dark landscape](./images/screenshots/Ipad%20dark%20landscape.png)
![Ipad portrait](./images/screenshots/Ipad%20portrait.png)
![Mobile dark landscape](./images/screenshots/Mobile%20dark%20landscape.png)
![Mobile normal portrait](./images/screenshots/Mobile%20normal%20portrait.png)

### Links

- Solution URL: [Github](https://github.com/kostas23Github/interactive-card-details-form)
- Live Site URL: [Github Pages](https://kostas23github.github.io/interactive-card-details-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS3
- Flexbox
- Desktop-first workflow
- Javascript
- DOM API

### What I learned

Elements can have ```:valid```, ```:invalid``` pseudoselectors as well as the pseudoselectors themselves.

```css
.proud-of-this-css:focus:invalid {
  color: papayawhip;
}
```
In this example when the class proud-of-this-css is focused but has an invalid value it's text color is changed.

## Author

- Website - [kostas23Github](https://github.com/kostas23Github)
- Frontend Mentor - [kostas](https://www.frontendmentor.io/profile/kostas23Github)

