const container = document.querySelector('.container')

const displayFollowers = (followers) => {
    container.innerHTML = followers.map(function(follower){
        return `<article class="card">
        <img src="${follower.avatar_url}" alt="">
        <h3>${follower.login}</h3>
        <a href="${follower.html_url}">VIEW PROFILE</a>
    </article>`
    }).join('')
}

export default displayFollowers