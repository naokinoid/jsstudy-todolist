import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの入力値を取得し、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグを生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // divタグの小要素にliタグを追加
  div.appendChild(li);

  // id = incomplete-listの要素（ulタグ）の小要素にdivタグを追加
  document.getElementById("incomplete-list").appendChild(div);

  console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
