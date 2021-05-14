# README

![-](https://i.imgur.com/lQ3b1As.gif)

// Welcome to the VOID™.

Relax, enjoy the music, the atmosphere, scream into the digital abyss :)

The VOID™ was created with the intention of making a space for catharsis. Wether you are feeling frustrated, depressed, elated, or you have thought about climate change too hard, the VOID™ hears you and does not judge.

Of course, there are no "users" in this space. Fill out the form to scream into the abyss. Once an entry has been created, you may ONLY delete it. You may also delete other entries not made by you that may appear into the VOID™.

While themes of catharsis, ego death, and uncertainty have played a huge role in this project , I also wanted to portray the dichotomy that social media has played in our collective subconscious. While you (the protagonist of your own story) writes into the VOID™ in an emotionally cathartic way, other "users" may simply delete your entry without even bothering to read it (similarly to "liking" a post on social media without reading it's content).

Likewise, deleting entries that come up from other "users" feel fun, because, even though humans are complex creatures, we also like to clika da button. It may even feel good to delete your own entry !

After all, nothing is permanent in the VOID™ ;)

## Code Example

```
 //fetches both URLS in promise and setState

    Promise.all([
      fetch(voidsURL).then((response) => response.json()),
      fetch(moodsURL).then((response) => response.json()),
    ]).then(([all_voids, all_moods]) =>
      this.setState({ moods: all_moods, voids: all_voids })
    );
  }

// deletes void entry from front and backend
  handleDelete = (voids) => {
    fetch(`${voidsURL}/${voids.id}`, {
      method: "DELETE",
    });
    const voidCollection = this.state.voids.filter((vd) => vd !== voids);
    this.setState({ voids: voidCollection });
  };
```

## Demo

[![void](http://img.youtube.com/vi/t5652l8Vqsw/0.jpg)](https://www.youtube.com/watch?v=t5652l8Vqsw "The Void Becomes You")

## Technologies

technologies used: React.js, Ruby on Rails, p5.js, HTML5/CSS, and postgresQL. This app is live and hosted through Heroku and Firebase, and created as a phase 3 project for Flatiron School in Denver. While the app is functional, users will only be able to see new entries upon refresh. I plan on implementing Faye websockets in the near future to make the app more responsive. :)

![-](https://i.imgur.com/hkdLbtZ.jpg)

[LinkdIn](https://www.linkedin.com/in/joannsiciliano/)

scream into the abyss [=== h e r e ===](https://the-void-becomes-you.web.app/)
