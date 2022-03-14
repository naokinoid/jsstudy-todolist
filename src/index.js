import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの入力値を取得し、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了のリストに追加する関数
const createIncompleteList = (text) => {
  // divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグを生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタンを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // テキストを取得
    const text = addTarget.firstElementChild.innerText;
    // div以下を初期化
    addTarget.textContent = null;
    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;
    // 戻すボタンを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 完了したTODOから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    // divタグの小要素に各要素を追加
    div.appendChild(li);
    div.appendChild(backButton);
    // id = complete-listの要素（ulタグ）の小要素にdivタグを追加
    document.getElementById("complete-list").appendChild(div);
  });

  // 削除ボタンを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの小要素に各要素を追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // id = incomplete-listの要素（ulタグ）の小要素にdivタグを追加
  document.getElementById("incomplete-list").appendChild(div);

  console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
