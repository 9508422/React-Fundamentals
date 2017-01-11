import axios from 'axios';

const id = 'YOUR_CLIENT_ID';
const sec = 'YOUR_SECRET_ID';
const param = `?client_id=${id}&client_secret=${sec}`;

function getUserInfo(username) {
  return axios.get(`https://api.github.com/users/${username + param}`);
}

function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos${param}&per_page=100`);
}

function getTotalStars({ data }) {
  return data.reduce((prev, current) => prev + current.stargazers_count, 0);
}

async function getPlayersData({ followers, login }) {
  try {
    const repos = await getRepos(login);
    const totalStars = await getTotalStars(repos);
    return { followers, totalStars };
  } catch (error) {
    console.error('Error in getPlayersData: ', error);
  }
}

function calculateScores(players) {
  return [
    (players[0].followers * 3) + players[0].totalStars,
    (players[1].followers * 3) + players[1].totalStars,
  ];
}

export async function getPlayersInfo(players) {
  try {
    const userInfo = await Promise.all(players.map(getUserInfo));
    return userInfo.map(user => user.data);
  } catch (error) {
    console.error('Error in getPlayersInfo: ', error);
  }
}

export async function battle(players) {
  try {
    const playerOneData = getPlayersData(players[0]);
    const playerTwoData = getPlayersData(players[1]);
    const playersData = await Promise.all([playerOneData, playerTwoData]);
    return calculateScores(playersData);
  } catch (error) {
    console.error('Error in getPlayersInfo: ', error)
  }
}
