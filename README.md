# InfoDisplay
- Directorys:
  - ### Libraries
    This directory contains the libraries used for this project: <br />
      - [p5.js](https://p5js.org/download/)<br />
      - [p5.dom.js](https://p5js.org/download/)
  - ### Images
    This directory contains the files to the wheater icons. _I do **not** own them but they are necessary!_ __Made by__ [OpenWeatherMap](http://openweathermap.org/)
    I cannot publish the background image because I **do not own it!** Feel free to use your own one.
    The loading animation is made by [loading.io](https://loading.io)
  - ### Modules
    This directory contains the modules on the display. They have to be added in _this_ folder and registerd manually in the `sketch.js`
  - ### Styles
    This directory contains a little bit of stylint in `CSS`. _More comming soon if necessary_
- Files:
  - #### index.html
    This file contains the main page of the display.
  - #### sketch.js
    This file contains the main script of the Display.
  - ## Keys.js
    This file must contain your API-Key from [OpenWeatherMap.org](http://openweathermap.org/). Create an _Account_ and insert your API-key in this file!
    ```javascript
    let key = ""; // Your API-Key in here!
    ```
  - #### TODO.txt
    This file contains a TODO-List.

## TODO:
- [x] Time
- [x] Date
- [x] Weather
- [x] News
- [x] Weather forecast
- [ ] Timetable
- [ ] Shares
- [ ] Updated to newer JS-Version
