Пояснение к js

Переменные, их назначение и тип:
moneyItem: <span id="moneyItem"></span>. Является текстовым полем количества денег [DOM]
moneySecItem: <span id="moneySecItem"></span>. Является текстовым полем количества дохода в секунду [DOM]
cookie: <div class="cookie"><img src="stuff/icon.png" alt="cookie" width="100%"></div>. Является кнопкой печенька [DOM]
gameButtons: Объект содержащий целые кнопки сооуржений [Object of DOMs]
gameButtonsItemsObj: Объект содержащий объекты изменяемых элементов кнопок (Цена, количество) [Object] {
  gameButtonsPrice: Объект содержащий цены всех сооружений [Object of DOMs]
  gameButtonsQuantity: Объект содержащий количества всех сооружений [Object of DOMs]
}
gameButtonsObjLength: Нужен для того чтобы определить количество свойств объекта gameButtonsItemsObj. Используется для обращения к этим свойствам не называя их имена
gameButtonsValuesObj: Объект содержащий объекты значений каждой кнопки. Используется для обращения к этим объктам. [Object] {
  clickerObj: Объект содердащий свойства цена, количество, прирост в секунду для кнопки "Кликер" [Object] {
    priceValue: значение цены [Value]
    quantityValue: значение количества [Value]
    increaseSec: значение прироста в секунду [Value]
  }
  grannyObj: Объект содердащий свойства цена, количество, прирост в секунду для кнопки "Бабушка" [Object]
  factoryObj: Объект содердащий свойства цена, количество, прирост в секунду для кнопки "Завод" [Object]
}
userObj: Объект содержащий данные о пользователе: количество денег, доход в секунду [Object] {
  moneyValue: количество денег [Value]
  moneySecValue: доход в секунду [Value]
}
gameElementObjIndex: индекс свойств объекта gameButtonsItemsObj. Используется для обращения к свойствам этого объекта не называя их [Value]
certainAllElementsObj: локальный объект являющийся любым объектом объекта gameButtonsItemsObj. Используется для дальнейшего обращения уже к любому DOM элементу каждой конкретной кнопки. [Object of DOMs]
certainElement: локальный DOM элемент являющимся любым свойством любого объекта объекта gameButtonsItemsObj. Используется для изменения контента каждой кнопки. [DOM]
certainElementIndex: индекс свойств объекта certainAllElementsObj и gameButtonsValuesObj. Используется для обращения к любому DOM элемнту определенной кнопки не называя её [Value]. Используется для обращения к определенной кнопке. [Value]
certainGameObj: локальный любой объект объекта gameButtonsValuesObj. Используется для обращения к любому свойству любого объекта не называя их. [Object]
certainGameButton: любой DOM элемент (кнопка) DOM Объекта gameButtons. Используется для вызова "click" функции любой кнопки. [DOM]