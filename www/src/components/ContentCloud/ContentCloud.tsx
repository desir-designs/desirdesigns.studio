export type TagProps = {
  name?: string;
};

export type ContentCloudProps = {
  title?: string;
  subTitle?: string;
  tags?: Array<TagProps>;
};

export const defaultProps: ContentCloudProps = {
  title: "!TITLE",
  subTitle: "!SUB_TITLE",
};


export default function ContentCloud(props: ContentCloudProps) {
  return (
    <section className="relative pt-20 pb-32 bg-gradient-cyan2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16 max-w-md mx-auto">
          <h2 className="mb-5 font-heading font-bold text-center text-5xl sm:text-6xl text-gray-900">
            {props?.title ?? defaultProps.title}
          </h2>
          <p className="text-gray-600 text-center">
            {props?.subTitle ?? defaultProps.subTitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center -m-2 mb-7">
          <div className="w-auto p-2">
            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
              <div className="mr-3 w-3.5 h-3.5 bg-gradient-cyan rounded-full" />
              <p>Manage remote team</p>
            </div>
          </div>
          <div className="w-auto p-2">
            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
              <div className="mr-3 w-3.5 h-3.5 bg-gradient-orange rounded-full" />
              <p>Connect with experts</p>
            </div>
          </div>
          <div className="w-auto p-2">
            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
              <div className="mr-3 w-3.5 h-3.5 bg-gradient-purple rounded-full" />
              <p>Easy to chat</p>
            </div>
          </div>
          <div className="w-auto p-2">
            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
              <div className="mr-3 w-3.5 h-3.5 bg-gradient-green rounded-full" />
              <p>Video analytics</p>
            </div>
          </div>
          <div className="w-auto p-2">
            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
              <div className="mr-3 w-3.5 h-3.5 bg-gradient-blue rounded-full" />
              <p>Secured Payments</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center -m-2 mb-7">
          <div className="w-auto p-2">
            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
              <div className="mr-3 w-3.5 h-3.5 bg-gradient-purple rounded-full" />
              <p>Live marketing reports</p>
            </div>
          </div>
          <div className="w-auto p-2">
            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
              <div className="mr-3 w-3.5 h-3.5 bg-gradient-green rounded-full" />
              <p>Project management</p>
            </div>
          </div>
          <div className="w-auto p-2">
            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
              <div className="mr-3 w-3.5 h-3.5 bg-gradient-cyan rounded-full" />
              <p>Edit videos &amp; audios</p>
            </div>
          </div>
          <div className="w-auto p-2">
            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
              <div className="mr-3 w-3.5 h-3.5 bg-gradient-blue rounded-full" />
              <p>Transaction history</p>
            </div>
          </div>
          <div className="w-auto p-2">
            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
              <div className="mr-3 w-3.5 h-3.5 bg-gradient-cyan2 rounded-full" />
              <p>No hidden fees</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center -m-2">
          <div className="w-auto p-2">
            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
              <div className="mr-3 w-3.5 h-3.5 bg-gradient-green rounded-full" />
              <p>Manage remote team</p>
            </div>
          </div>
          <div className="w-auto p-2">
            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
              <div className="mr-3 w-3.5 h-3.5 bg-gradient-blue rounded-full" />
              <p>Connect with experts</p>
            </div>
          </div>
          <div className="w-auto p-2">
            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
              <div className="mr-3 w-3.5 h-3.5 bg-gradient-orange rounded-full" />
              <p>Easy to chat</p>
            </div>
          </div>
          <div className="w-auto p-2">
            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
              <div className="mr-3 w-3.5 h-3.5 bg-gradient-purple rounded-full" />
              <p>Video analytics</p>
            </div>
          </div>
          <div className="w-auto p-2">
            <div className="font-heading flex items-center font-semibold px-4 py-2.5 text-lg text-gray-900 bg-white rounded-full">
              <div className="mr-3 w-3.5 h-3.5 bg-gradient-blue rounded-full" />
              <p>Secured Payments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
