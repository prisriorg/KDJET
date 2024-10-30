import { faker } from '@faker-js/faker/locale/en';
import  Cookies  from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();
export const setCookie = (name, value, options = {}) => {
  cookies.set(name, value, options);
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name, options = {}) => {
  cookies.remove(name, options);
};

export const format = num => 
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,');

export const getBeginningOfTheWeek = (now) => {
    const days = (now.getDay() + 7 - 1) % 7;
    now.setDate(now.getDate() - days);
    now.setHours(0, 0, 0, 0);
    return now;
};
export function paginate (arr, size) {
    return arr.reduce((acc, val, i) => {
        let idx = Math.floor(i / size)
        let page = acc[idx] || (acc[idx] = [])
        page.push(val)
        return acc
    }, [])
}
export const getDate = num => {
    const curr = new Date();
    const date = new Date(curr.setDate(curr.getDate() - curr.getDay() + num));
    const d = [
        date.getFullYear(),
        date.getMonth()+1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
    ];
    function pad(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }
    return pad(d[2]) +"-"+ pad(d[1]) +"-"+ d[0];
}
export function getDa(date = new Date()){
    const d = [
        date.getFullYear(),
        date.getMonth()+1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
    ];
    function pad(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }
    return pad(d[2]) +"-"+ pad(d[1]) +"-"+ d[0];
}
export function addOneDay(date = new Date()) {
    date.setDate(date.getDate() + 1);
    return date;
}

export async function sendPostReq(url,data,token='') {
    const userInfo = await axios.post(url, data, { headers: {'Content-Type': 'application/json','Authorization':token}});
    return userInfo.data;
}
export async function sendGetReq(url,data,token='') {
    const userInfo = await axios.get(url, data, { headers: {'Content-Type': 'application/json','Authorization':token}});
    return userInfo.data;
}
export function getURL() {
    return "http://localhost:3002/";
}
export function mockUsers(length) {
    const createRowData = rowIndex => {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const gender = faker.person.sex();
        const name = faker.person.fullName({ firstName, lastName, sex: gender });
        const avatar = faker.image.avatar();

        const city = faker.location.city();
        const street = faker.location.street();
        const email = faker.internet.email();
        const postcode = faker.location.zipCode();
        const phone = faker.phone.number();
        const amount = faker.finance.amount({ min: 1000, max: 90000 });
        const company = faker.company.name();

        const age = Math.floor(Math.random() * 30) + 18;
        const stars = Math.floor(Math.random() * 10000);
        const followers = Math.floor(Math.random() * 10000);
        const rating = 2 + Math.floor(Math.random() * 3);
        const progress = Math.floor(Math.random() * 100);

        return {
            id: rowIndex + 1,
            name,
            firstName,
            lastName,
            avatar,
            city,
            street,
            postcode,
            email,
            phone,
            gender,
            age,
            stars,
            followers,
            rating,
            progress,
            amount,
            company
        };
    };
    return Array.from({ length }).map((_, index) => {
        return createRowData(index);
    });
}




