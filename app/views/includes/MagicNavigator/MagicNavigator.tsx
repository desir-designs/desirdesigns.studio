import useBannerState from '@controllers/hooks/useBannerState';
import useModal from '@controllers/hooks/useModal';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import OutboundIcon from '@mui/icons-material/Outbound';
import SearchIcon from '@mui/icons-material/Search';
import ShareIcon from '@mui/icons-material/Share';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SettingsIcon from '@mui/icons-material/Settings';
import type { ComponentType } from '@models/typings/Component';



const MagicNavigator: ComponentType<any> = () => {

    const { open, toggleBanner } = useBannerState()

    const { toggleModal } = useModal()


    const ActionButtonSx = {
        cursor: 'pointer',
        color: 'white'
    }


    const actions = [
        {
            action: () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }),
            icon: <KeyboardDoubleArrowUpIcon sx={ActionButtonSx} />,
            name: 'Top'
        },
        {
            icon: <SearchIcon sx={ActionButtonSx} />,
            name: 'Search',
            action: () => toggleModal()
        },
        {
            icon: <NotificationsIcon sx={ActionButtonSx} />,
            name: 'Notifications',
            action: () => toggleBanner()
        },
        {
            icon: <ShareIcon sx={ActionButtonSx} />,
            name: 'Share',
            action: () => toggleModal()
        },
        {
            icon: <SettingsIcon sx={ActionButtonSx} />,
            name: 'Settings',
            action: () => toggleModal()
        },


    ];

    return (
        <SpeedDial
            className="fixed bottom-10 right-8 z-50 sm:flex md:flex cursor-pointer transition-all ease-in duraiton-500 group"
            sx={{
                background: 'transparent',
                bgOpacity: 0.9
            }}
            FabProps={{
                sx: {
                    bgcolor: '#9200CC',
                    '&:hover': {
                        bgcolor: 'black',
                    }
                }
            }}

            ariaLabel="WTFMVMT_MAGIC_NAVIGATOR"
            icon={<OutboundIcon className='text-white group-hover:text-blue-200 group-hover:-rotate-45 duration-2000 ease-in-out will-change-transform' />}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    className='bg-black cursor-pointer'
                    FabProps={{
                        sx: {
                            bgcolor: '#000000',
                            '&:hover': {
                                bgcolor: '#02DCFF',
                            }
                        }
                    }}

                    tooltipOpen
                    onClick={() => action?.action()}
                    key={action?.name}
                    icon={action?.icon}
                    tooltipTitle={<div className='font-major text-white m-0 bg-black'>{action?.name}</div>}
                />
            ))}
        </SpeedDial>
    )
}

export default MagicNavigator;