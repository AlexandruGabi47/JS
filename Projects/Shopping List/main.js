// Getting the refferences to the respective elements
// Text input:
var word = document.querySelector("#word");
//
var button = document.querySelector("#b1");
var ul = document.querySelector("#shoppingList");
// Storing the amount of elements
const elements = 0;
// Assigning the 'addItem' to the 'click' event
addButton.addEventListener("click", addItem);
function addItem()
{
    if(word.value !== "")
    {
        // Creating and modifying the element
        var li = document.createElement("li");
        li.appendChild(word.value);
        // Creating the edit button
        var editButton = document.createElement("button");
        editButton.value = "Edit";
        editButton.
        editButton.addEventListener("click", editItem);
        // Adding the element and buttons to the list
        ul.appendChild(li);
        // Clearing the input box & increasing the element size
        word.value = "";
        elements++;
    }
}
function editItem()
{

}
function deleteItem()
{

}