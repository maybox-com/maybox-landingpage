import React from 'react'
import heroimage from '../assets/images/f8067bb13a5ba8eb60458be43d056770.jpeg'
import landing from '../assets/styles/Landingpage.css'
import FAQ from '../Layouts/FAQ'
import Cta from '../Layouts/Cta'
import Footer from '../Layouts/Footer'

const Landingpage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:mt-10 md:pl-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-8">
            {/* First Text Block */}
            <div className="space-y-2">
              <h2 className="text-4xl md:text-6xl font-custom font-semiBold text-gray-900">Beauty, self care <br></br> and wellness <br></br> that <span className="text-[#FBA013]">delivers</span></h2>
            </div>

            {/* Second Text Block */}
            <div className="space-y-2">
              <p className="text-gray-600 font-custom2">
              A customizable box of premium beauty, self-care & <br></br> 
              wellness products delivered monthly, just for you <br></br>
               whenever and however you need it.
              </p>
            </div>

            {/* Third Text Block */}
            <div className="space-y-2">
              <button className='bg-[#FBA013] p-3 px-5 border rounded-lg flex items-center gap-2'>
               <a href='#cta' ><p className='font-custom text-white text-sm'>Join the waitlist</p></a> 
                <svg className='mb-1 relative right-1'  width="15" height="12" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.2596 4.72462L1.86042 11.3955M16.2596 4.72462L12.9475 13.7546M16.2596 4.72462L7.22961 1.41246" 
                    stroke="#F2EFE9" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className="w-full md:w-1/2 relative md:right-20">
            <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden relative">
              <div className="absolute top-4 left-4 md:top-6 md:left-44 z-10 text-white">
                <p className="text-3xl tracking-wider md:tracking-wider md:text-4xl font-bold font-custom">Maya <br /> Daniels</p>
                <p className="text-base  md:text-base mt-1 font-custom">beauty vlogger</p>
              </div>
              <img 
                src={heroimage} 
                alt="Delivery Service"
                className="hero-image border rounded-xl relative md:left-40"
              />
            </div>
          </div>
        </div>



        <div className='pt-40'>
            <p className='text-[#6C6C6C] text-sm font-custom2'>Did you know?</p>
            <p className='pt-2 font-meduim font-custom2 tracking-tight text-1xl w-80 md:w-full md:text-2xl'>Consumers are increasingly demanding <span className='text-[#FBA013]'>eco-friendly and sustainable beauty <br /> products.</span> Technology is playing a 
              crucial role in developing innovative, <br /> sustainable 
               formulations and packaging solutions.</p>
        </div>







        <section id='benefits'>
            <div>
                <div className='pt-40 pb-10'>
                    <h2 className='pb-3 font-custom text-3xl text-[#1E1E1E]'>Benefits</h2>
                    <p className='text-[#6C6C6C] font-custom2'>Feel balanced, Help you <br /> look your best </p>
                </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className=''>
                <div className="relative pb-3 pt-5">
                  <div className='bg-white px-10 py-10 w-96 md:w-96 h-60 '>
                    <h2 className='font-custom text-4xl'>Feel</h2>
                    <p className='pt-1 font-custom2 text-[#6C6C6C]'>Let us help you feel glamorous and <br /> beautiful.</p>
                  </div>

                  <div className="bg-[#9655FD] w-96 h-60 rounded-b-xl p-6 md:w-96 -mt-16 flex items-center justify-center">
                    <svg width="119" height="119" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M74.375 89.25H66.9375C66.9375 94.1814 64.9785 98.9108 61.4915 102.398C58.0045 105.885 53.2751 107.844 48.3438 107.844C43.4124 107.844 38.683 105.885 35.196 102.398C31.709 98.9108 29.75 94.1814 29.75 89.25H22.3125C22.3125 96.1539 25.0551 102.775 29.9369 107.657C34.8187 112.539 41.4398 115.281 48.3438 115.281C55.2477 115.281 61.8688 112.539 66.7506 107.657C71.6324 102.775 74.375 96.1539 74.375 89.25Z" fill="#402D5E" />
                      <path d="M104.125 52.0625V29.75C104.115 22.8491 101.369 16.2337 96.4897 11.354C91.6101 6.47432 84.9946 3.7286 78.0937 3.71876H59.5C53.868 3.71412 48.4324 5.78774 44.2345 9.54232L14.4399 36.7189C12.4481 38.7009 11.2779 41.3617 11.1632 44.1692C11.0486 46.9767 11.9979 49.7241 13.8214 51.8619C15.6448 53.9997 18.2081 55.3704 20.9986 55.7C23.789 56.0295 26.6011 55.2935 28.8724 53.6393L28.8761 53.643L37.1875 47.9533V89.25C37.1875 92.2088 38.3629 95.0465 40.4551 97.1387C42.5473 99.2309 45.3849 100.406 48.3437 100.406C51.3026 100.406 54.1402 99.2309 56.2324 97.1387C58.3246 95.0465 59.5 92.2088 59.5 89.25V69.972C61.8736 70.8547 64.4801 70.886 66.8743 70.0606C69.2684 69.2352 71.3018 67.6043 72.6272 65.4463C74.288 66.4119 76.1726 66.926 78.0937 66.9375C79.9739 66.9323 81.8223 66.4519 83.4672 65.5411C85.1121 64.6302 86.5 63.3184 87.5022 61.7275C89.163 62.6931 91.0476 63.2072 92.9687 63.2188C95.9267 63.2158 98.7626 62.0395 100.854 59.9479C102.946 57.8563 104.122 55.0204 104.125 52.0625ZM96.6875 52.0625C96.6875 53.0488 96.2957 53.9947 95.5983 54.6921C94.9009 55.3895 93.955 55.7813 92.9687 55.7813C91.9825 55.7813 91.0366 55.3895 90.3392 54.6921C89.6418 53.9947 89.25 53.0488 89.25 52.0625V48.3438H81.8125V55.7813C81.8125 56.7675 81.4207 57.7134 80.7233 58.4108C80.0259 59.1082 79.08 59.5 78.0937 59.5C77.1075 59.5 76.1616 59.1082 75.4642 58.4108C74.7668 57.7134 74.375 56.7675 74.375 55.7813V48.3438H66.9375V59.5C66.9375 60.4863 66.5457 61.4322 65.8483 62.1296C65.1509 62.827 64.205 63.2188 63.2187 63.2188C62.2325 63.2188 61.2866 62.827 60.5892 62.1296C59.8918 61.4322 59.5 60.4863 59.5 59.5V48.3438H52.0625V89.25C52.0625 90.2363 51.6707 91.1822 50.9733 91.8796C50.2759 92.577 49.33 92.9688 48.3437 92.9688C47.3575 92.9688 46.4116 92.577 45.7142 91.8796C45.0168 91.1822 44.625 90.2363 44.625 89.25V33.8592L24.5437 47.6C23.7915 48.1575 22.8566 48.4107 21.9259 48.309C20.9951 48.2074 20.1369 47.7584 19.5228 47.0517C18.9086 46.345 18.5836 45.4326 18.6126 44.4968C18.6417 43.5609 19.0227 42.6705 19.6796 42.0033L49.2437 15.0386C52.0718 12.5325 55.7212 11.1511 59.5 11.1563H78.0937C83.0233 11.1622 87.7493 13.123 91.235 16.6088C94.7207 20.0945 96.6816 24.8204 96.6875 29.75V52.0625Z" fill="#402D5E" />
                    </svg>
                  </div>
                </div>
                </div>
   


<div className='maingrid relative pt-12 pb-10 md:pt-20 md:pr-10 md:right-40'>
   <div className='relative'>
   <div className="bg-yellow-500 w-96 h-96 rounded-t-xl p-6 md:w-96 -mt-16 flex items-center justify-center">
      
      <div className="mt-4">
      <div className='bg-white px-10 py-10 w-96 md:w-96 h-40 mt-96 '>
                  <h2 className='font-custom text-4xl'>Look</h2>
                  <p className='pt-1 font-custom2 text-[#6C6C6C]'>Let us help you look bold with a <br /> natural glow.</p>
                </div>
<div  className='relative grid bottom-96 left-40'>
<svg className='svg' width="113" height="113" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.41666 56.5C4.41666 85.2656 27.7344 108.583 56.5 108.583C85.2656 108.583 108.583 85.2656 108.583 56.5C108.583 27.7343 85.2656 4.41663 56.5 4.41663C27.7344 4.41663 4.41666 27.7343 4.41666 56.5Z" stroke="#FF6600" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M46.0833 51.2916C49.0989 52.9426 52.6719 53.8958 56.5 53.8958C60.3281 53.8958 63.901 52.9426 66.9167 51.2916M40.9114 30.4583H40.875M72.125 30.4583H72.0885" stroke="#FF6600" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
</div>

      </div>
    </div>

    


    </div> 
</div>
      
      <div className="flex flex-col  md:flex-row md:space-x-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      <div className="bg-[#80F651] green md:rounded-l-xl rounded-xl flex justify-center items-center  h-64">
      <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.8107 19.03C39.8107 14.2059 41.7271 9.57937 45.1383 6.16822C48.5494 2.75706 53.1759 0.840698 58 0.840698C62.8241 0.840698 67.4506 2.75706 70.8618 6.16822C74.2729 9.57937 76.1893 14.2059 76.1893 19.03C76.1893 23.8541 74.2729 28.4806 70.8618 31.8918C67.4506 35.3029 62.8241 37.2193 58 37.2193C53.1759 37.2193 48.5494 35.3029 45.1383 31.8918C41.7271 28.4806 39.8107 23.8541 39.8107 19.03ZM22.2186 48.8243C25.9212 45.3093 30.8318 43.3497 35.9372 43.3497C41.0425 43.3497 45.9531 45.3093 49.6557 48.8243L49.7343 48.9028L58 57.1686L66.2736 48.9028L66.3522 48.8243C70.054 45.3139 74.9613 43.3571 80.0629 43.3571C85.1645 43.3571 90.0718 45.3139 93.7736 48.8243C95.6103 50.5693 97.0733 52.6694 98.0738 54.9971C99.0742 57.3247 99.5912 59.8314 99.5934 62.3649C99.5956 64.8985 99.0829 67.406 98.0866 69.7354C97.0902 72.0648 95.6309 74.1674 93.7972 75.9157L60.7343 108.051C60.001 108.764 59.0187 109.163 57.9961 109.163C56.9735 109.163 55.9912 108.764 55.2579 108.051L22.2029 75.9157C20.3699 74.1681 18.911 72.0664 17.9147 69.738C16.9184 67.4096 16.4054 64.9031 16.4069 62.3705C16.4083 59.838 16.9242 57.3321 17.9232 55.0049C18.9223 52.6776 20.3836 50.5698 22.2186 48.8243Z" fill="#4ACB16"/>
</svg>

      </div>
      <div className="bg-white md:rounded-r-xl rounded-0 relative md:bottom-0 bottom-2 white p-6 flex flex-col justify-end items-end h-full">
        <h3 className="font-custom text-4xl">Care</h3>
        <p className="font-custom2 text-[#6C6C6C] text-right">Let us help you care <br /> for yourself every day.</p>
      </div>
    </div>
      </div>
      
    </div>
            </div>
        </section>


        <section id='steps'>
        <div className='pt-40 pb-10'>
                    <h2 className='pb-3 font-custom text-3xl text-[#1E1E1E]'>Steps</h2>
                    <p className='text-[#6C6C6C] font-custom2'>How it works </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="flex flex-col items-center justify-center p-6">
      <div className='bg-[#FBA013] w-16 h-16 rounded-full py-2 px-6 '>
      <svg width="50" height="50" className='relative right-4' viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.729 30.7288C29.725 31.7275 29.1582 33.0837 29.153 34.4998C29.153 35.9179 29.7164 37.2779 30.7191 38.2807C31.7219 39.2835 33.0819 39.8468 34.5 39.8468C35.9161 39.8416 37.2723 39.2748 38.271 38.2708" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34.5 18.459C31.3274 18.459 28.226 19.3998 25.5881 21.1624C22.9502 22.925 20.8941 25.4302 19.68 28.3613C18.4659 31.2925 18.1483 34.5178 18.7672 37.6294C19.3862 40.7411 20.9139 43.5993 23.1573 45.8427C25.4007 48.086 28.2589 49.6138 31.3705 50.2327C34.4822 50.8517 37.7075 50.534 40.6386 49.3199C43.5697 48.1058 46.075 46.0498 47.8376 43.4119C49.6002 40.7739 50.541 37.6726 50.541 34.5" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34.5 7.76489C29.2123 7.76489 24.0434 9.33287 19.6468 12.2705C15.2503 15.2082 11.8236 19.3837 9.80011 24.2688C7.7766 29.154 7.24716 34.5295 8.27873 39.7156C9.31031 44.9017 11.8566 49.6654 15.5955 53.4043C19.3345 57.1433 24.0982 59.6896 29.2843 60.7211C34.4703 61.7527 39.8459 61.2233 44.731 59.1998C49.6162 57.1763 53.7916 53.7496 56.7293 49.353C59.667 44.9565 61.235 39.7875 61.235 34.4999M44.4201 24.5826L37.1735 31.8264" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M59.659 17.1756L50.541 18.4589L51.8243 9.34083C51.8337 9.23493 51.8113 9.12862 51.76 9.03549C51.7087 8.94236 51.6308 8.86664 51.5362 8.818C51.4417 8.76937 51.3348 8.75003 51.2292 8.76245C51.1236 8.77487 51.0241 8.8185 50.9434 8.88775L44.8985 14.9017C44.2776 15.5271 43.8209 16.2962 43.5691 17.1407C43.3172 17.9852 43.2779 18.8788 43.4548 19.7421L44.4173 24.5826L49.2577 25.5422C50.121 25.7191 51.0147 25.6799 51.8591 25.428C52.7036 25.1761 53.4728 24.7194 54.0982 24.0985L60.1093 18.0564C60.1788 17.9756 60.2225 17.8758 60.2349 17.7699C60.2473 17.664 60.2277 17.5568 60.1787 17.4621C60.1297 17.3674 60.0535 17.2896 59.9599 17.2385C59.8663 17.1875 59.7595 17.1655 59.6534 17.1756" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
     


        <h3 className="font-custom text-2xl text-[#1E1E1E] mb-2 pt-3">Share</h3>
        <p className="text-[#6C6C6C] font-custom2 text-sm text-center">Answer a few questions to help us <br /> match you with the right products <br /> for your skin, hair, and style.</p>
      </div>

      
      <div className="flex flex-col items-center justify-center p-6">
        <div className='bg-[#9C5FFB] w-16 h-16 rounded-full py-2 px-6'>
        <svg width="42" className='relative right-3 top-1' height="42" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4595 20.6392L21.8854 24.5607C23.3041 25.3118 24.8893 25.7057 26.5 25.7074M14.4595 20.6392L3.84282 15.0374C4.74848 13.5723 6.03516 12.3695 7.56969 11.5587L21.8826 4.00169C23.3025 3.25164 24.8888 2.85913 26.5 2.85913C28.1112 2.85913 29.6974 3.25164 31.1174 4.00169L38.5321 7.91494M14.4595 20.6392L38.1775 8.11569L38.5349 7.92319M26.5 25.7074C28.1113 25.707 29.6976 25.314 31.1174 24.5634L49.1571 15.0374M26.5 25.7074V51.1422C28.1113 51.1418 29.6976 50.7488 31.1174 49.9982L45.4303 42.4412C46.9879 41.6184 48.2898 40.3949 49.1973 38.9009C50.1048 37.4069 50.5839 35.6985 50.5837 33.9574V20.0424C50.5837 18.2759 50.0902 16.5461 49.1571 15.0374M3.84282 15.0319C2.91126 16.5401 2.41872 18.2716 2.41907 20.0369V33.9547C2.41856 35.6954 2.89729 37.4037 3.80429 38.8977C4.7113 40.3916 6.01262 41.6153 7.56969 42.4384L21.8826 49.9954C23.3019 50.7479 24.8882 51.1428 26.5 51.1449M49.1571 15.0374C48.2515 13.5723 46.9648 12.3695 45.4303 11.5587L38.5349 7.91769" stroke="white" stroke-width="4.5" stroke-linejoin="round"/>
</svg>

        </div>
        <h3 className="font-custom text-2xl text-[#1E1E1E] mb-2 pt-3">Choose</h3>
        <p className="text-[#6C6C6C] font-custom2 text-sm text-center">Choose the products you want, or <br /> let us build a box that's tailored <br /> just for you.</p>
      </div>
      <div className="flex flex-col items-center justify-center p-6">
        <div className='bg-[#80F651] w-16 h-16 rounded-full py-2 px-6'>
        <svg width="40" className='relative right-3' height="40" viewBox="0 0 46 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M43.2 48V23.25C43.2 12.0664 34.2847 3 23.2875 3C12.2903 3 3.375 12.0664 3.375 23.25V48" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.2875 46.875C29.3973 46.875 34.35 36.8017 34.35 24.375H12.225C12.225 36.8017 17.1777 46.875 23.2875 46.875Z" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>
        <h3 className="font-custom text-2xl text-[#1E1E1E] mb-2 pt-3">Discover</h3>
        <p className="text-[#6C6C6C] font-custom2 text-sm text-center">Try new products each month, find <br /> your favorites in our Shop, and be <br /> effortlessly you.</p>
      </div>
    </div>
        </section>



        <section  className='md:mr-20 md:mt-20 mt-20 relative md:left-20'>
        <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white md:w-64  md:ml-20 rounded-2xl relative  p-6 shadow-sm">
          <h2 className="font-custom text-2xl text-[#1E1E1E] font-bold mb-4">
            What are the membership <br /> perks?
          </h2>
          <div className="space-y-3 font-custom text-sm md:mb-10">
            {['Perfectly timed to your routine', 'Save more', 'Glow better, stress less', 'You\'re in control'].map((perk, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-400 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8L10 16L6 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-sm">{perk}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-8 px-5  md:w-64 shadow-sm">
            <h2 className="font-custom text-3xl text-[#1E1E1E] font-bold mb-2 text-center">100% Quality</h2>
            <p className="text-[#6C6C6C] font-custom2 text-sm text-center md:mb-5">
              From the chosen product we offer, quality with much assurance.
            </p>
          </div>

          <div className="bg-white md:w-64 rounded-2xl p-6 shadow-sm md:pt-10">
            <h2 className="font-custom text-2xl text-[#1E1E1E] font-bold mb-2 text-center">
              Stress free <br /> wellness package
            </h2>
            <p className="text-[#6C6C6C] font-custom2 text-sm text-center md:mb-16">
              We just make you comfortable!
            </p>
          </div>
        </div>

        <div className="bg-white md:w-64 rounded-2xl p-6 shadow-sm relative md:right-20">
          <h2 className="font-custom text-2xl text-[#1E1E1E] font-bold mb-4">
            Pause, skip, or <br /> cancel anytime.
            <br />
            It's <span className="text-purple-600">self-care</span> on your terms.
          </h2>
          <p className="text-[#6C6C6C] font-custom2 text-sm md:mt-40">
            Get your self-care essentials delivered exactly when you need them. No more waiting.
          </p>
        </div>
      </div>
    </div>
        </section>




        <section id='faqs'>
<FAQ/>
        </section>
        <section id='cta'>
<Cta />
        </section>

        <section>
            <Footer/>
        </section>
      </section>
    </div>
  )
}

export default Landingpage
