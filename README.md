
<div id="top"></div>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/thewilloftheshadow/phisherman.js">
    <h1>Phisherman.js</h1>
  </a>



[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] [![License][license-shield]][license-url]


  <p align="center">
    Phisherman.js, a simple JS module to interface with the Phisherman.gg API
    <br />
    <a href="https://phisherman.js.org/modules"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="https://github.com/thewilloftheshadow/phisherman.js/issues">Report Bug</a>
    ·
    <a href="https://github.com/thewilloftheshadow/phisherman.js/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Phisherman is a centralised database of phishing and scam links. It is designed for use with Discord bots, allowing them to utilise the Phisherman API to cross-check urls against our known phishing links.

Phisherman.js was written as a utility package for my private bots, because I wanted a simple way to interface with the Phisherman API through a package, so I didn't have to worry about managing API routes, error handling, etc.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get started, you'll need to install the package:

```bash
    npm install phisherman.js
```

You can obtain your API key by going to the [Phisherman website](https://phisherman.gg) and following the steps there to request a token.

Then, simply initalize the Phisherman client with your API key:

```javascript
import {Client} from "phisherman.js";
const client = new Client('your-api-key-here');
```

To check a domain, you can use the `checkDomain` method:

```javascript
client.checkDomain('unknown.test.phisherman.gg')
.then(result => {
    console.log(result);
})
```

See the [documentation](https://phisherman.js.org) for more information about the methods available.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the GNU General Public License. See [`LICENSE`](./LICENSE) for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

[Shadow](https://github.com/thewilloftheshadow) - will@willshadow.com

Project Link: [https://github.com/thewilloftheshadow/phisherman.js](https://github.com/propresenterjs/phisherman.js)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/thewilloftheshadow/phisherman.js.svg?style=for-the-badge
[contributors-url]: https://github.com/thewilloftheshadow/phisherman.js/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/thewilloftheshadow/phisherman.js.svg?style=for-the-badge
[forks-url]: https://github.com/thewilloftheshadow/phisherman.js/network/members
[stars-shield]: https://img.shields.io/github/stars/thewilloftheshadow/phisherman.js.svg?style=for-the-badge
[stars-url]: https://github.com/thewilloftheshadow/phisherman.js/stargazers
[issues-shield]: https://img.shields.io/github/issues/thewilloftheshadow/phisherman.js.svg?style=for-the-badge
[issues-url]: https://github.com/thewilloftheshadow/phisherman.js/issues
[license-shield]: https://img.shields.io/github/license/thewilloftheshadow/phisherman.js.svg?style=for-the-badge
[license-url]: https://github.com/thewilloftheshadow/phisherman.js/blob/master/LICENSE.txt