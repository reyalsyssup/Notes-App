// Sets the margin left of the add new notes button.
// margin-left: auto; doesnt work so this is what i did :/
setInterval(() => {
    var mainContainerBtnWidth = document.querySelector(".main-container .btn.add-new-note").getBoundingClientRect().width;
    var mainContainerH1Width = document.querySelector(".main-container h1").getBoundingClientRect().width;
    var mainContainerWidth = document.querySelector(".main-container").getBoundingClientRect().width;
    // 35 accounts for padding
    var mainContainerBtnMarginLeft = mainContainerWidth - mainContainerH1Width - mainContainerBtnWidth - 35;

    document.querySelector(".main-container .add-new-note").style.marginLeft = `${mainContainerBtnMarginLeft}px`;
}, 200);