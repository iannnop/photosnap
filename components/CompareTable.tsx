const CompareTable = () => {
  return (
    <div className="flex flex-col px-6 my-14 lg:my-28 max-w-5xl mx-auto space-y-10">
      <h2 className="text-center">Compare</h2>
      <table className="uppercase tracking-[2px] text-xs md:text-sm">
        <thead>
          <tr className="border-b-[1px] border-black">
            <th className="md:py-6 md:pl-6 text-left">The Features</th>
            <th className="px-2 md:px-8">Basic</th>
            <th className="px-2 md:px-8">Pro</th>
            <th className="px-2 md:px-8">Business</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-[1px]">
            <th className="py-6 md:pl-6 text-left">Unlimited Story Posting</th>
            <th><CheckMark /></th>
            <th><CheckMark /></th>
            <th><CheckMark /></th>
          </tr>
          <tr className="border-b-[1px]">
            <th className="py-6 md:pl-6 text-left">Unlimited Photo Upload</th>
            <th><CheckMark /></th>
            <th><CheckMark /></th>
            <th><CheckMark /></th>
          </tr>
          <tr className="border-b-[1px]">
            <th className="py-6 md:pl-6 text-left">Embedding Custom Content</th>
            <th></th>
            <th><CheckMark /></th>
            <th><CheckMark /></th>
          </tr>
          <tr className="border-b-[1px]">
            <th className="py-6 md:pl-6 text-left">Customize Metadata</th>
            <th></th>
            <th><CheckMark /></th>
            <th><CheckMark /></th>
          </tr>
          <tr className="border-b-[1px]">
            <th className="py-6 md:pl-6 text-left">Advanced Metrics</th>
            <th></th>
            <th></th>
            <th><CheckMark /></th>
          </tr>
          <tr className="border-b-[1px]">
            <th className="py-6 md:pl-6 text-left">Photo Downloads</th>
            <th></th>
            <th></th>
            <th><CheckMark /></th>
          </tr>
          <tr className="border-b-[1px]">
            <th className="py-6 md:pl-6 text-left">Search Engine Indexing</th>
            <th></th>
            <th></th>
            <th><CheckMark /></th>
          </tr>
          <tr className="border-b-[1px]">
            <th className="py-6 md:pl-6 text-left">Custom Analytics</th>
            <th></th>
            <th></th>
            <th><CheckMark /></th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const CheckMark = () => {
  return (
    <div className="flex justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" strokeWidth="2" d="M1 8.124L5.623 13 17 1"/></svg>
    </div>
  )
}

export default CompareTable