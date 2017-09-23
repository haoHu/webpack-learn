import _ from 'lodash';
import './style.css';
import Icon from './images/myicon.png';

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'world'], ' ');

    element.classList.add('hello');
    // 将图像添加到现有的div中
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    return element;
}

document.body.appendChild(component());