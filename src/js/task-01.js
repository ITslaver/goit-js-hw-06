//1
const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

//2
categories.forEach((category) => {
  const titleText = category.firstElementChild.textContent;
  //   console.log(titleText);
  const elementsOfCategory = category.lastElementChild.children;
  //   console.log(elementsOfCategory);
  console.log(
    `Category: ${titleText} \n Elements: ${elementsOfCategory.length}`
  );
});
