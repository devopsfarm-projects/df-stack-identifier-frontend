function Pricing (){
    return(
<>
<section className="px-8 py-24">
  <div className="container mx-auto text-center">
    <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">Pricing</h2>
    <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">Check out our affordable pricing options for delicious meals.</p>
  </div>
  <div className="mt-24">
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md border border-blue-gray-100">
        <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6">
          <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 capitalize">Basic Meal Plan</h5>
          <p className="block antialiased font-sans text-sm leading-normal text-inherit font-normal !text-gray-500">Enjoy a daily meal with our basic plan.</p>
          <h3 className="antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 flex gap-1 mt-4">$9.99<span className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 -translate-y-0.5 self-end opacity-70"></span></h3>
        </div>
        <div className="p-6 border-t border-blue-gray-50">
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4 text-blue-gray-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
              </svg>
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">Breakfast</p>
            </li>
            <li className="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4 text-blue-gray-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
              </svg>
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">Lunch</p>
            </li>
            <li className="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4 text-blue-gray-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
              </svg>
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">Dinner</p>
            </li>
          </ul><button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg border border-green-500 text-green-500 hover:opacity-75 focus:ring focus:ring-green-200 active:opacity-[0.85] block w-full mt-6" type="button">buy now</button>
        </div>
      </div>
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md border border-blue-gray-100">
        <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6">
          <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 capitalize">Family Feast</h5>
          <p className="block antialiased font-sans text-sm leading-normal text-inherit font-normal !text-gray-500">A feast for the whole family to enjoy together.</p>
          <h3 className="antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 flex gap-1 mt-4">$29.99<span className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 -translate-y-0.5 self-end opacity-70"></span></h3>
        </div>
        <div className="p-6 border-t border-blue-gray-50">
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4 text-blue-gray-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
              </svg>
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">Appetizers</p>
            </li>
            <li className="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4 text-blue-gray-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
              </svg>
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">Main Course</p>
            </li>
            <li className="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4 text-blue-gray-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
              </svg>
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">Dessert</p>
            </li>
          </ul><button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg border border-green-500 text-green-500 hover:opacity-75 focus:ring focus:ring-green-200 active:opacity-[0.85] block w-full mt-6" type="button">buy now</button>
        </div>
      </div>
    </div>
  </div>
</section>
</>
    );
}

export default Pricing;