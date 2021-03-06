import PubSub from '../helpers/pub_sub.js'
// const PubSub = require('../helpers/pub_sub.js');


class SelectView{
  constructor(element){
    this.element = element
  }
};

// const SelectView = function (element) {
//   this.element = element;
// };

bindEvents(){
  PubSub.subscribe('InstrumentFamilies:data-ready', (evt) =>{
    const allInstrumentFamilies = evt.detail;
    this.populate(allInstrumentFamilies);
  });


// SelectView.prototype.bindEvents = function () {
//   PubSub.subscribe('InstrumentFamilies:data-ready', (evt) => {
//     const allInstrumentFamilies = evt.detail;
//     this.populate(allInstrumentFamilies);
//   });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};


   populate(instrumentFamilyData){
// SelectView.prototype.populate = function (instrumentFamilyData) {
  instrumentFamilyData.forEach((familiy, index) => {
    const option = document.createElement('option');
    option.textContent = familiy.name;
    option.value = index;
    this.element.appendChild(option);
  });
}
};

export default SelectView;
// module.exports = SelectView;
