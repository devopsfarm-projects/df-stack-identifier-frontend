function About() {
  return (
    <>
      <div className="flex min-h-screen bg-white dark:bg-black">
        <div className="mx-auto">
        <div class="mx-auto mb-[40px] mt-[150px] h-[213px] w-[213px] overflow-hidden rounded-full bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
      <img src="https://i.imgur.com/4U5tBXC.png" alt="" />
    </div>

          <h1 class="max-w-screen-sm text-center text-[55px] font-extrabold text-black dark:text-white">
      I do code and <br />
      make content <span class="text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">about it!</span>
    </h1>

      
        </div>
      </div>

      <div className="pt-24 py-16 bg-white dark:bg-black"> 
        <div className="container m-auto px-6 text-gray-600 dark:text-white md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:w-5/12">
              <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" className="object-cover w-full h-auto" />
            </div>
            <div className="md:w-7/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl dark:text-gray-300">Nuxt development is carried out by passionate developers</h2>
              <p className="mt-6 text-gray-600 dark:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
              <p className="mt-4 text-gray-600 dark:text-white"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
