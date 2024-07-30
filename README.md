# NudgeApp


## Getting Started

Please find `config.jsx` file under `NudgeApp/nudgeapp.client/`. Setting `isDemo` to `true`, the app can be run without a backend with randomized settings. `bufferPages` controls what text will be displayed.

We need to specify the backend address `hostUrl`. Depends on if we want to redirect to other pages, set `surveyUrl` to a url or empty string.

In the backend, 2 dummy APIs are implemented. In `TokenInfoController.cs`, which allow us to access the app with pre-defined nudges, for example, `https://localhost:5173/?token=1ac2b`
`https://localhost:5173/?token=2bd3c`
`https://localhost:5173/?token=1ac2b`
`https://localhost:5173/?token=2bd3c`
`https://localhost:5173/?token=3ce4d`
`https://localhost:5173/?token=4df5e`
`https://localhost:5173/?token=5eg6f`
`https://localhost:5173/?token=6fh7g`
`https://localhost:5173/?token=7gi8h`.
In the end, the data will be posted to `SubmissionController.cs` and simply stored in `submission.json`.


## Frontend

### Prerequisites

- Node.js
- npm (or yarn)

### Installation

1. Clone the repository:
    ```bash
    git clone this_repo
    ```
2. Navigate to the project directory:
    ```bash
    cd nudge-app
    npm install
    ```

### Running the Application

To run the application, use the following command:

```bash
npm run dev
```