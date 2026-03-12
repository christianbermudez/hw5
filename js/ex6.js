const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

const buildDictionary = () => {
  let content = document.getElementById("content");

  // Create the <dl> element
  let dl = document.createElement("dl");

  words.forEach(word => {
    // Create <dt> for the term, wrapped in <strong>
    let dt = document.createElement("dt");
    let strong = document.createElement("strong");
    strong.textContent = word.term;
    dt.appendChild(strong);

    // Create <dd> for the definition
    let dd = document.createElement("dd");
    dd.textContent = word.definition;

    dl.appendChild(dt);
    dl.appendChild(dd);
  });

  content.appendChild(dl);
}

buildDictionary();
