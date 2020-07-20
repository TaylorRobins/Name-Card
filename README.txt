Which web event did you hook into to update the display name? 

    I used addEventListener to look for "click" on the submit button as well as "keypress" for when i press enter.

Where in your HTML did you link to your JavaScript file? Are there better places? What's the best place? 

    I linked my JavaScript just above the end HTML tag. It really depends on when you want your JavaScript to load.  If your script elements are toward your header it may be better to link it in the <head> section.

Why is it best practice to store your CSS/JS in external files rather than in your HTML file? 

    It makes reading your code much easier for someone that is not familiar with your project. It also makes each file less cluttered.