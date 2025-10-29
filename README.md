
# Football-stats-Barcelona

Simple stats of Barcelona players (bench and current team).

## Table of Contents
- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Setup & Usage](#setup--usage)  
- [Data Sources](#data-sources)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)  

## About
This project provides a lightweight front-end browser application that displays simplified statistics for players of FC Barcelona — both the current first-team squad and bench players. It is built for easy browsing of key player metrics, visualised on a clean web page.

## Features
- Displays key stats for first-team and bench players of FC Barcelona.  
- Responsive UI built with HTML/CSS/JavaScript.  
- Simple, no backend required (all logic runs in-browser).  
- Easily extendable: you can update stats or add new players.  

## Tech Stack
- **HTML5** – markup of the main layout (file: `fcb.html`).  
- **CSS3** – styling and responsive design (file: `style.css`).  
- **JavaScript** – client-side logic and data manipulation (file: `script.js`).  
- No server, database or external framework required.

## Setup & Usage
### Prerequisites  
- A modern web browser (Chrome, Firefox, Edge, Safari).  
- (Optional) A local HTTP server if you prefer not to open files directly (e.g., `http-server`, `python -m http.server`).

### Steps  
1. Clone the repository:  
   ```bash
   git clone https://github.com/bhanupraneeth027/Football-stats-Barcelona.git
   cd Football-stats-Barcelona
````

2. Open `fcb.html` in your browser, or run a local server and browse to `http://localhost:<port>/fcb.html`.
3. View the team stats.
4. To update or add new player stats, open `script.js` and modify the relevant data structure.

## Data Sources

*(Please update with your actual sources.)*
E.g.:

* Official club site or league stats pages.
* Sports analytics API(s) (if used).
* Public datasets or CSV/JSON exports.

## Project Structure

```
Football-stats-Barcelona/
├── fcb.html         ← main HTML page  
├── style.css        ← styles & layout  
├── script.js        ← JavaScript logic and data  
└── README.md        ← this file  
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes, add tests if applicable.
4. Commit and push your branch.
5. Open a Pull Request describing your changes.

Please adhere to standard best practices: write meaningful commit messages, ensure code is well-formatted, and include documentation for any new feature or data.


