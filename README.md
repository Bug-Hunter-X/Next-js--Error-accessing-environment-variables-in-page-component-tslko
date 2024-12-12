# Next.js: Error accessing environment variables in page component

This repository demonstrates a common error in Next.js applications when accessing environment variables within page components.  The issue arises because environment variables might not always be defined in all environments (e.g., development vs. production).

## Problem:

The `about.js` file attempts to access an environment variable (`process.env.MY_VARIABLE`) which may not be defined, resulting in an error during development.

## Solution:

The `aboutSolution.js` file demonstrates the solution by using the `process.env.MY_VARIABLE` in a conditional statement that prevents errors from occuring when this variable is not available.  For production deployment, ensure your environment variables are properly configured.

## Setup:

1. Clone this repository.
2.  Run `npm install`.
3.  (Optional) Set environment variables (e.g., `MY_VARIABLE=myValue`)
4. Start the development server: `npm run dev`