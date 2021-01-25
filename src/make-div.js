import { Variable } from "eslint-scope";

const makeDiv = (divObject) => {
  const parent = document.querySelector(`${divObject.parentId}`);
  const child = document.createElement("div");
  if (divObject.childId) {
    child.setAttribute("id", `${divObject.childId}`);
  }
  html = divObject.html || "";
  child.innerHTML = html;
  for (let i = 0; i < divObject.classList.length; i++) {
    child.classList.add(`${divObject.classList[i]}`)
  }
  placement = divObject.placement || "after";
  if (placement == "before") {
    parent.prepend(child);
  } else if (placement == "after") {
    parent.appendChild(child);
  }
  return child;
};

export { makeDiv };

makeDiv (parentID, childID (optional), htmlToUse (optional), placement (optional), [classlist (optional)])


let object = {
  parentId: 'parentId',
  childId: 'childId',
  htmlToUse: Variable,
  classList: [
    'one',
    'two',
    'three'
  ]
}