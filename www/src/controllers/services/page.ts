import { pages } from "@pages/index";
import { definePageService } from "blakprint";


export type PageServiceType = {
    methods: {}
}
export default async function PageService() {
  return definePageService(() => {

    const methods = {
      getData: async (id: string) => {
        const page = pages[id];
        return page;
      },
      getMetaData: async () => {
        return pages;
      },
      getPageData: async (id: string) => {
          
      },
      getPageMetaData: async (id: string) => {
          
      },

      getPage: async (id: string) => {
          
      },
      getPageLayout: async (id: string) => {
          
      }

    };
    return methods;

  }).value()
}
