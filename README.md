# Jobless corner - React Frontend

This project is a job board that allows users to view job listings, filter by category, and search for jobs by title or description. This frontend is built with React and interacts with a Rails API backend to retrieve job data.

## Getting Started

To run this project locally, you will need to have Node.js and npm installed on your machine. Once you have those installed, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the project dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and navigate to `http://localhost:4000` to view the project.

Project Structure

.
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── JobList.js
│ │ ├── JobListItem.js
│ │ ├── SearchBar.js
│ │ └── ...
│ ├── pages/
│ │ ├── HomePage.js
│ │ ├── SearchPage.js
│ │ └── ...
│ ├── services/
│ │ ├── jobService.js
│ │ └── ...
│ ├── App.js
│ ├── index.js
│ └── ...
├── package.json
├── README.md
└── ...

- The `public/` directory contains the HTML file that serves as the entry point for the application.

- The `src/` directory contains all of the source code for the project.

  - The `components/` directory contains reusable UI components.
  - The `pages/` directory contains top-level pages for the application.
  - The `services/` directory contains service modules that interact with the backend API.
  - `App.js` is the root component for the application.
  - `index.js` is the entry point for the application.

- `package.json` contains metadata about the project and a list of dependencies.
- `README.md` contains information about the project.

## Available scripts

In the project directory, you can run:

`npm start`

Runs the app in development mode.<br />
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

`npm test`
Launches the test runner in the interactive watch mode.<br />
See the running tests section for more information.

`npm run build`
Builds the app for production to the build folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the deployment section for more information.

`npm run eject`

> Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project uses the [MIT](https://opensource.org/license/mit/) license.

## Acknowledgment

- React
- React Router
- Axios
