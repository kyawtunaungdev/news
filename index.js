let breakingImg = document.querySelector('#breakingImg')
let breakingNews_title = document.querySelector('#breakingNews .title')
let breakingNews_desc = document.querySelector('#breakingNews .description')
let topNews = document.querySelector('.topNews')
let sportsNews = document.querySelector('#sportsNews .newsBox')
let businessNews = document.querySelector('#businessNews .newsBox')
let technologyNews = document.querySelector('#technologyNews .newsBox')
let header = document.querySelector('.header')


window.addEventListener('scroll', ()=> {
  if(window.scrollY>50){
    header.classList.add('sticky')
  } else {
    header.classList.remove('sticky')
  }
})


// fetching news data from a website providing api 

const apiKey = "3b5ac97890334f2186712e1476120b84";

const fetchData = async (category, pageSize) => {

  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`

  const data = await fetch(url)
  const response = await data.json()
  console.log(response)
  return response.articles
}

// adding breaking news
const add_breakingNews = (data) => {
  breakingImg.innerHTML = `<img src=${data[0].urlToImage} alt="image">`
  breakingNews_title.innerHTML = `<a href=${data[0].url} target='_blank'><h2>${data[0].title}</h2></a>`
  breakingNews_desc.innerHTML = `${data[0].description}`
}
fetchData('general', 5).then(add_breakingNews);


const add_topNews = (data) => {
  let html =''
  let title =''
  data.forEach((element) => {
    if(element.title.length<100){
      title = element.title
    }
    else {
      title = element.title.slice(0,100) + "..."
    }
    html += `<div class="news">
                <div class="img">
                <img src=${element.urlToImage} alt="image">
                </div>
                <div class="text">
                  <div class="title">
                  <a href=${element.url} target='_blank'><p>${title}</p></a>
                  </div>
                </div>
            </div>`
  })
  topNews.innerHTML = html
}
fetchData('general', 20).then(add_topNews);



const add_sportsNews = (data) => {
  let html =''
  let title =''
  data.forEach((element) => {
    if(element.title.length<100){
      title = element.title
    }
    else {
      title = element.title.slice(0,100) + "..."
    }
    html += `<div class="newsCard">
                <div class="img">
                <img src=${element.urlToImage} alt="image">
                </div>
                <div class="text">
                  <div class="title">
                  <a href=${element.url} target='_blank'><p>${title}</p></a>
                  </div>
                </div>
            </div>`
  })
  sportsNews.innerHTML = html
}
fetchData('sports', 5).then(add_sportsNews);


const add_businessNews = (data) => {
  let html =''
  let title =''
  data.forEach((element) => {
    if(element.title.length<100){
      title = element.title
    }
    else {
      title = element.title.slice(0,100) + "..."
    }
    html += `<div class="newsCard">
                <div class="img">
                <img src=${element.urlToImage} alt="image">
                </div>
                <div class="text">
                  <div class="title">
                  <a href=${element.url} target='_blank'><p>${title}</p></a>
                  </div>
                </div>
            </div>`
  })
  businessNews.innerHTML = html
}
fetchData('business', 5).then(add_businessNews);


const add_technologyNews = (data) => {
  let html =''
  let title =''
  data.forEach((element) => {
    if(element.title.length<100){
      title = element.title
    }
    else {
      title = element.title.slice(0,100) + "..."
    }
    html += `<div class="newsCard">
                <div class="img">
                <img src=${element.urlToImage} alt="image">
                </div>
                <div class="text">
                  <div class="title">
                  <a href=${element.url} target='_blank'><p>${title}</p></a>
                  </div>
                </div>
            </div>`
  })
  technologyNews.innerHTML = html
}
fetchData('technology', 5).then(add_technologyNews);