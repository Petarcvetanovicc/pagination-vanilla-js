const paginate = (followers) => {
    const itemsPerPage = 10
    const numOfPages = Math.ceil(followers.length / 10)

    const newFollowers = Array.from({length: numOfPages}, (_, index) => {
        const start = index * itemsPerPage
        return followers.slice(start, start + itemsPerPage)
    })

    return newFollowers
}

export default paginate