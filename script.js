const htmlOutput = document.getElementById("html-output")
const preview = document.getElementById("preview")
const markdownInput = document.getElementById('markdown-input');


function convertMarkdown() {
  let markdown = markdownInput.value;
  markdown =  markdownInput.value.replace(/^\s{0,3}(#{1,6})\s+(.*)$/gm, (match, hashes, content) =>{
  let level = hashes.length; 
  let markdown = `<h${level}>${content}</h${level}>`
  return markdown
})
const images = /!\[([^\]]+)\]\(([^)]+)\)/g;
markdown = markdown.replace(images, `<img src = "$2" alt = "$1"/>`)
markdown = markdown.replace(/\s{0,3}(\*{2}|_{2})(.*?)\1/g, `<strong>$2</strong>`)
markdown = markdown.replace(/(\*|_)(.*)\1/g, `<em>$2</em>`)
markdown = markdown.replace(/\[(.+)\]\((.+)\)/g, `<a href = "$2">$1</a>`)
markdown = markdown.replace(/^\s{0,3}>\s?(.*)/gm, `<blockquote>$1</blockquote>`)

  htmlOutput.textContent = markdown;
  preview.innerHTML = markdown;
  return markdown;
}

markdownInput.addEventListener("input", ()=> convertMarkdown())
convertMarkdown();

 
