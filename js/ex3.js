const boldParagraphs = () => {
  const paragraphs = document.getElementsByTagName("p");
  for (let p of paragraphs) {
    p.style.fontWeight = "bold";
    p.style.backgroundColor = "yellow";
  }
}

boldParagraphs();
