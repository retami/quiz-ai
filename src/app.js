import {getQuestionFromDavinci} from './getQuestionFromDavinci.js';

const App = {

    init: function () {
        this.spinner = $("#spinner");
        this.questionPrompt = $('#question');
        this.answersBlock = $('#answers');
        this.explanationBlock = $('#explanation');
        this.answerButton = $(".answer");
        this.nextButton = $("#next");
        this.topicInput = $("#topic");
        this.topicSelection = $("#topic-selection");

        this.correctIndex = 0;
        this.topic = '';

        this.answersBlock.hide();
        this.nextButton.hide();

        this.topicInput.on('change', async () => {
            if (this.topicInput.val() !== '') {
                this.topic = this.topicInput.val();
                await this.showQuestion();
            } else {
                this.topicInput.val(this.topic);
            }
        });

        this.topicSelection.on('change', async () => {
            if (this.topicSelection.val() !== '') {
                this.topic = this.topicSelection.val();
                this.topicInput.val(this.topic);
                this.topicSelection.val('');
                await this.showQuestion();
            } else {
                this.topicSelection.val(this.topic);
            }
        });

        this.answerButton.on("click", (event) => this.evaluateAnswer(event.target));

        this.nextButton.on("click", async () => {
            await this.showQuestion();
        });
    },

    showQuestion: async function () {
        this.questionPrompt.hide();
        this.answersBlock.hide();
        this.explanationBlock.hide();
        this.nextButton.hide();
        this.spinner.show();
        this.topicInput.prop("disabled", true);
        this.answerButton.removeClass("correct incorrect").prop("disabled", false);

        try {
            let nextQuestion = await this.fetchQuestion();
            this.questionPrompt.text(nextQuestion.question).show();
            this.answersBlock.show();
            this.answerButton.each((index, element) => {
                $(element).text(nextQuestion.answers[index])
            });
            this.explanationBlock.html(`<p>${nextQuestion.explanation}</p>`).hide();
        } catch (error) {
            console.log(error.toString());
            this.questionPrompt.text("An error occurred. Try fetching next question.").show();
            this.answersBlock.hide();
            this.nextButton.show();
        } finally {
            this.spinner.hide();
            this.topicInput.prop("disabled", false);
        }
    },

    evaluateAnswer: function (context) {
        const selectedAnswer = $(context).index();

        this.answerButton.each((index, element) => {
            if (index === this.correctIndex) {
                $(element).addClass("correct");
            } else if (index === selectedAnswer) {
                $(element).addClass("incorrect");
            }
            $(element).prop("disabled", true);
        });

        this.explanationBlock.show();
        this.nextButton.show();
    },

    fetchQuestion: async function () {
        const set = await getQuestionFromDavinci(this.topic);
        const nextQuestion = JSON.parse(set);
        this.correctIndex = Math.floor(Math.random() * 3);
        nextQuestion.answers.splice(this.correctIndex, 0, nextQuestion.answer);
        return nextQuestion;
    }
};

$(document).ready(() => {
    App.init();
});

export {App};