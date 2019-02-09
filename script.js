window.onload = function(){

//Query selector returns node list not an array
//Select all inputs on the page
const inputs = document.querySelectorAll('.controls input');

//Here we are updating the CSS variables
function handleUpdate() {
    //Grab suffix var (specifically px)
    //This comes from the 'data-sizing' added to the blur and spacing inputs
    //We also want to add || "" to capture the change of the background image color because it does not have a suffix
    //..As the base color is simply a hex code that is the value and doesn't need px appended to it
    //Without || '', we will see undefined with changing the hex code of the base color
    const suffix = this.dataset.sizing ||"";

    //Select variables and set property to the value of the input 
    //We also need to add suffix to the end of it to append the pixels
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)

    console.log(this.name);

}

//Listen for change event on inputs and call handleUpdate function
//Add event listener to call handleUpdate function on the change of the inputs, but also when the input bar
//..is dragged around alot, which is where the mousemove event comes into play here
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))


};