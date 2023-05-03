## Quiz App

A simple quiz app, that fetches the questions, answers and explanations from the OpenAI API.

It's for demonstration purposes to try out different prompts and models and to play with option values like temperature.

### Prerequisites
-   Get an API key from [OpenAI](https://platform.openai.com/)
-   Rename the **.env.example** file to **.env**
-   Set the **OPEN_AI_API_KEY** variable to your API key in the **.env** file

### Installation
-   Install Dependencies
    ```
    npm install
    ```
-   Run webpack
    ```
    npm run build
    ```
-   Start your server pointing to the **dist** folder, e.g.
    ```
    php -S localhost:8000 -t ./dist
    ```
    and open your browser at http://localhost:8000

### Keep in mind
-  *Do not publish the **dist** folder on a public server. Your API key is still stored in the bundle.*


-  The OpenAI API is not free. You can use the API for free for several API requests.
   After that, you have to pay for the API requests you make.

