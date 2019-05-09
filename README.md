# :airplane: Travel Inspiration App :ferry:

Inspired by the Week 3 project mandate of Founders and Coders, the primary aim of this
project is to practice making API call requests.

To enable a seamless experience in viewing the output, I have chosen to use two APIs
that do not require the use of API keys:

* [REST Countries](https://restcountries.eu/)
* [Exchange Rate API](https://exchangeratesapi.io/)

Click [here](http://corinnachan.com/api-project/) to check it out!


### Minimum Viable Product :baggage_claim:

To ensure I achieved the main objective of creating something with APIs
without getting too carried away by all the interesting options that APIs provide (believe me, it was tempting!),
here was the checklist for the MVP:

1. An app that can generate a random travel destination suggestion and something related to it
2. Make 2 API calls from different sources
3. A basic presentable user interface

### Main learnings / Takeaways :bullettrain_front:

1. CORS using <crossorigin.me> or <cors-anywhere.herokuapp.com> if needed
2. Debugging XHR step-by-step using Chrome Dev Tools > Event Listener Breakpoints
3. Using an output from API call as a global variable for the second API call
4. Start with an overarching shell first, then build the details after that

### Stretch goals / Things to deep dive into with more time :beach_umbrella:

1. How to chain second API request so only 1 button is required
2. Add images dynamically based on the destination generated
