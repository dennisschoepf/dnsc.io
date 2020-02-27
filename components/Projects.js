export default () => (
  <div className="container mx-auto p-4 mt-40 sm:mt-56">
    <h2 className="w-full text-center mb-2 text-lg md:text-xl text-black uppercase font-bold tracking-wide">Projects</h2>
    <hr className="border-t-2 border-black" />
    <div className="mt-4 md:mt-8 grid grid-rows-6 lg:grid-rows-3 grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
      <div className="text-center py-12 bg-black text-white lg:col-span-2">Featured</div>
      <div className="text-center py-12 bg-black text-white">2</div>
      <div className="text-center py-12 bg-black text-white">3</div>
      <div className="text-center py-12 bg-black text-white">4</div>
      <div className="text-center py-12 bg-black text-white">5</div>
    </div>
  </div>
)