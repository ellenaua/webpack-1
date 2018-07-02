import _ from 'lodash';
import moment from 'moment-timezone';

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ') + moment().tz('America/Chicago').toString();

    return element;
}

document.body.appendChild(component());
