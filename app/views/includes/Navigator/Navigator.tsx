import ArchitectureIcon from '@mui/icons-material/Architecture';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CelebrationIcon from '@mui/icons-material/Celebration';
import MenuIcon from '@mui/icons-material/Menu';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';



export default function Navigator() {

    const ActionSx = {

        color: 'black',
        "&:hover": {
            color: 'blue'
        }
    }

    const Destinations = [
        {
            icon: <ArrowUpwardIcon sx={ActionSx} />,
            name: 'Up',
            action: () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        },
        {
            icon: <MenuIcon sx={ActionSx} />,
            name: 'Menu',
            action: () => { return }
        },
        {
            icon: <CelebrationIcon sx={ActionSx} />,
            name: 'Surprise!',
            action: () => { return }
        },
    ];

    return (
        <SpeedDial
            ariaLabel="Desir Designs Navigator"
            sx={{ position: 'fixed', bottom: 16, right: 32 }}
            FabProps={{
                sx: {
                    backgroundColor: "blue",

                    "&:hover": {
                        backgroundColor: "black",
                    }
                }
            }}
            icon={<ArchitectureIcon />}
        >
            {Destinations.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    onClick={() => action.action()}
                    tooltipOpen
                    tooltipTitle={<div className="block text-black no-wrap overflow-ellipsis overflow-hidden">{action?.name}</div>}
                />
            ))}
        </SpeedDial>
    )
}
