import { atom, useRecoilState } from "recoil"

const bannerState = atom({
    key: 'bannerState',
    default: {
        isOpen: true,
        message: "MESSAGE_NOT_FOUND"
    },
});

const useBanner = () => {

    const [banner, setBanner] = useRecoilState(bannerState)


    const closeBanner = () => {

        setBanner({
            ...banner,
            isOpen: false
        })

        const message = `BANNER_STATE=${JSON.stringify(banner)}`

        console.log(message)

        return message
    }

    const toggleBanner = () => {
        setBanner({
            ...banner,
            isOpen: !banner.isOpen
        })
    }

    const setMessage = (message) => {

        setBanner({
            ...banner,
            message: message
        })
    }


    return { banner, closeBanner, toggleBanner, setMessage }
}

export default useBanner