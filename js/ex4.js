const addCoBLink = () => {
  // Create the new <li> element
  let newLi = document.createElement("li");
  newLi.id = "cob";

  // Create the <a> element
  let newLink = document.createElement("a");
  newLink.href = "https://www.csulb.edu/college-of-business";
  newLink.textContent = "College of Business";

  // Append link to li
  newLi.appendChild(newLink);

  // Get the links list and the IS li (insert before it)
  let linksList = document.getElementById("links");
  let isLi = document.getElementById("is");

  // Insert the new li before the IS li
  linksList.insertBefore(newLi, isLi);
}

addCoBLink();
