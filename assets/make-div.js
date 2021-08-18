const makeDiv = (divObject) => {
  const parent = document.querySelector(`${divObject.parentId}`);
  const child = document.createElement("div");
  
  if (divObject.childId) {
    child.setAttribute("id", `${divObject.childId}`);
  }

  const html = divObject.html || "";
  child.innerHTML = html;

  if (divObject.classList) {
    for (let i = 0; i < divObject.classList.length; i++) {
    child.classList.add(`${divObject.classList[i]}`)
    }
  }
  
  const placement = divObject.placement || "after";
  if (placement == "before") {
    parent.prepend(child);
  } else if (placement == "after") {
    parent.appendChild(child);
  }

  return child;
};

export { makeDiv };
