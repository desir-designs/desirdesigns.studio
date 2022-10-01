const links = () => {

    const linksData = [
        {
            name: 'Home',
            url: '/',
            type: 'internal',
        },
        {
            name: 'Portfolio',
            url: '/portfolio',
            type: 'internal'
        },
        {
            name: 'About',
            url: '/about',
            type: 'internal'
        },
        {
            name: 'Contact',
            url: '/contact',
            type: 'internal'
        },
        {
            name: 'Services',
            url: '/services',
            type: 'internal'
        }
    ]

    return linksData ?? null
}

export default links