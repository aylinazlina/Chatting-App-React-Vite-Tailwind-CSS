
import moment from 'moment/moment';
//data and time

//todo: _ means it is an object and an object will call a function getTimeNow  _.getTimeNow()=>{}

   export const getTimeNow= () => {
        return moment().format("dd, MM DD YYYY, h:mm a");
    }


