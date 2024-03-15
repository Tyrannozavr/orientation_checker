const count = {
    'yes': 0,
    'no': 0,
}

export default defineEventHandler((event) => {
    let query = getQuery(event)
    if (query.answer) {
        count[query.answer] += 1
    }
    return count
})