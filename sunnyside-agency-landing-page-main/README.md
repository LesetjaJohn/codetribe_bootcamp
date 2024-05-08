# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [My Proud snippets](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [Useful resources] (#useful-resources)
- [Author](#author)

### Screenshot

![Design preview for the Sunnyside agency landing page coding challenge](./design/desktop-preview.jpg)

## Overview

The challenge is to build out this landing page and get it looking as close to the design as possible.

This challenge focuses mostly on HTML, CSS, & Javascript.

### The challenge

Users are able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [View](https://github.com/LesetjaJohn/codetribe_bootcamp.git)
- Live Site URL: [View](https://sunny-side-4b0ec.web.app/)

## MyProudsnippets

  01.

  let Testimonials=
    {
        clientName:["Emily R.","Thomas S.","Jennie F."],
        comment:["We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
                "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
                "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"],
        designation:["Managing Director","Chief Operating Officer","Business Owner"]
    };

    02.
    for (let i = 0; i <= 3; i++) {
        document.getElementById("testimonName0" + (i+1).toString()).innerHTML=Testimonials.clientName[i];
        document.getElementById("testimonContent0" + (i+1).toString()).innerHTML=Testimonials.comment[i];
        document.getElementById("testimonDes0" + (i+1).toString()).innerHTML=Testimonials.designation[i];
    };

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Javascript
- Flexbox
- Bootstrap, Bootswatch Themes
(<https://getbootstrap.com/>) (<https://bootswatch.com/>)
- Mobile-first workflow

- [Bootswatch themes](https://bootswatch.com/quartz/) - Website theme

## Author

- Website - [Lesetja John Mogashoa](https://ljmogashoa04.wixsite.com/softplugz)
- Frontend Mentor - [@LesetjaJohn](https://www.frontendmentor.io/profile/LesetjaJohn)
