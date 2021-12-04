import axios from 'axios';

// 1. Http Reauest & Response 와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/' 
}

// 2. API 함수들을 정리
function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`);
}

// async await 를 이용한 api 불러오기
async function fetchAskList() {
    try {
        const res = axios.get(`${config.baseUrl}ask/1.json`);
        return res;
    } catch(error) {
        console.log(error);
    }
}

async function fetchJobsList() {
    try {
        const res = axios.get(`${config.baseUrl}jobs/1.json`);
        return res;
    } catch(error) {
        console.log(error);
    }
}

function fetchList(pagename) {
    return axios.get(`${config.baseUrl}${pagename}/1.json`);
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchitemInfo(id) {
    return axios.get(`${config.baseUrl}item/${id}.json`);
}

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchitemInfo,
    fetchList
}
