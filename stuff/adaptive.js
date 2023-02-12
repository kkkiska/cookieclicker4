
const cookieInterface = document.querySelector (".cookie-and-balance-container");
const gamePanel = document.querySelector ('.game-panel');
const actionAllButtonsContainer = document.createElement ('div');
actionAllButtonsContainer.className = 'action-all-buttons-container';
const actBtnShopContainer = actionAllButtonsContainer.cloneNode();

const actionButtonShopHTML = `
  <div class="action-button-container">
    <div class="action-button" onclick="buttonShopOnClick()">
      <img src="stuff/buybutt.png" alt="Магазин">
    </div>
    <div class="action-button-text">Магазин</div>
  </div>
`
actBtnShopContainer.innerHTML = actionButtonShopHTML;
const actionButtonUpgradeHTML = `
  <div class="action-button-container">
    <div class="action-button" onclick="ButtonIsNotAvailableAlert()">
      <img src="stuff/upgrade.png" alt="Улучшения">
    </div>
    <div class="action-button-text">Улучшения</div>
  </div>
`
const actionButtonSettingsHTML = `
  <div class="action-button-container">
    <div class="action-button" onclick="ButtonIsNotAvailableAlert()">
      <img src="stuff/management.png" alt="Настройки">
    </div>
    <div class="action-button-text">Настройки</div>
  </div>
`
const gameItems = document.querySelector ('.game-items');
const blackScreen = document.querySelector ('.blackscreen');
CheckSize();
function CheckSize() {
  if ((window.innerWidth <= 1100) || (window.innerHeight <= 798)) {
    if (window.innerWidth >= window.innerHeight) {
      cookieInterface.before(actBtnShopContainer);
      cookieInterface.after(actionAllButtonsContainer);
      actionAllButtonsContainer.innerHTML = actionButtonUpgradeHTML + actionButtonSettingsHTML;
      gamePanel.classList.add('horizontal');
      gamePanel.classList.remove('vertical');
    } else {
      cookieInterface.after(actionAllButtonsContainer)
      actBtnShopContainer.remove();
      actionAllButtonsContainer.innerHTML = actionButtonShopHTML + actionButtonUpgradeHTML + actionButtonSettingsHTML;
      gamePanel.classList.add('vertical');
      gamePanel.classList.remove('horizontal');
    }
  } else {
    ButtonCloseShop();
    gamePanel.classList.remove('vertical');
    gamePanel.classList.remove('horizontal');
  }

  // if ((window.innerWidth <= 300) || (window.innerHeight <= 319)) {
  //   blackScreen.style.display = 'block';
  //   alert ('Сайт не работает на таком разрешении!') 
  // } else {
  //   blackScreen.style.display = 'none';
  // }
}

const closeButtonHTML = `
  <div class="action-button-container">
    <div class="action-button" onclick="ButtonCloseShop()">
      <img src="stuff/close.png" alt="Закрыть">
    </div>
    <div class="action-button-text" style="color:black;">Закрыть</div>
  </div>
`
const closeButton = document.createElement('div');
closeButton.innerHTML = closeButtonHTML;


function buttonShopOnClick() {
  if (innerHeight >= 490) {
    gameItems.classList.add ('active');
    gameItems.prepend(moneyItem);
    gameItems.append(closeButton);
  } else {
    alert ('Данная кнопка не работает для такого разрешения экрана');
  }
}


const balanceBar = document.querySelector ('.balance-bar')
function ButtonCloseShop() {
  if (gameItems.classList.contains('active')) {
  gameItems.classList.remove ('active');
  balanceBar.prepend(moneyItem);
  closeButton.remove();
  }
}

function ButtonIsNotAvailableAlert() {
  alert('Кнопка будет доступна в следующих обновлениях!');
}

window.addEventListener ("resize", () => {
  CheckSize();
})

