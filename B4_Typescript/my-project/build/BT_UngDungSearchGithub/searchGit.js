"use strict";
async function fetchRepo() {
    let res = await fetch('https://api.github.com/search/repositories?q=angular');
    res = await res.json();
    return res.items;
}
function createItem(text) {
    const item = document.createElement('li');
    item.textContent = text;
    return item;
}
const container = document.querySelector(".app");
async function maina() {
    // step 1: fetch repo
    const res = await fetchRepo();
    // step 2: lặp qua mảng các item trả về
    // step 3: call hàm createItem sau đó truyền vào name của từng item ở mỗi vòng lặp
    // step 4: call hàm container.appendChild(item mà hàm createItem trả về)
    res.forEach((item) => {
        const li = createItem(item.name);
        if (container)
            container.appendChild(li);
    });
}
maina();
