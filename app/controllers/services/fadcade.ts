import utils from "@utils/index"
import { notion as notionTypes } from "@configs/types"


const FacadeService = () => {

    const { files, url, email, phone, rich_text, title,
        multi_select, number, status, select, icon, date,
        isDatabase, getProperties } = utils().notion


    const notion = notionTypes()

    const serviceObject = {
        version: Date.now(),
        types: { notion }
    }

    return { ...serviceObject }
}

export default FacadeService