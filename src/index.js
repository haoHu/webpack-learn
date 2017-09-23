import _ from 'lodash';
import printMe from './print.js';


function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = _.join(['hello', 'world'], ' ');
    btn.innerHTML = '点击输出console';
    btn.onclick = printMe;
    element.appendChild(btn);
    element.classList.add('hello');
    return element;
}

document.body.appendChild(component());