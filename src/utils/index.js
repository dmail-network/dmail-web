
export const getPosToParent = (parent, sub, isTop = false) => {
    const parentClient = parent.getBoundingClientRect()
    const subClient = sub.getBoundingClientRect()
    return parseInt(subClient[isTop ? 'top' : 'left'] - parentClient[isTop ? 'top' : 'left'])
}
