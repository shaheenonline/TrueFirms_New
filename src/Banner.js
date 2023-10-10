// import noCommision from './public/noCommision.svg';
import React from 'react';
import './App.css';

function Banner() {
  return (
    <section id="banner" className='py-10 sm:py-20 bg-slate-100'>
      <div className='container-fluid mx-auto px-4 md:container md:mx-auto'>
        <div className='row'>
          <div className='text-center'>
            
            {/* <div className='sub-title bg-subTitleBgColor inline-block py-1 px-2 my-3'>
              <p className='text-subTitleTextColor text-xs md:text-sm font-bold'>
                AI Powered | Data-Driven | B2B
              </p>
            </div> */}

            <div className='banner-title my-1'>
              <h1 className='text-black text-xl sm:text-5xl font-bold'>
              An AI Powered Staff Augmentation Marketplace
              </h1>
            </div>

            <div className='banner-sub-title my-5'>
              <h2 className='text-sm md:text-xl'>
              Hire Ready-To-Deploy Technology Talents From Thousands Of Pre-Vetted Service Providers Worldwide.
              </h2>
            </div>

            {/* <div className='banner-noCommision flex flex-wrap items-center justify-center gap-1 md:gap-3'>
              <span className='inline-block'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_140_345)">
                  <path d="M10 18.9583C14.9476 18.9583 18.9584 14.9475 18.9584 9.99999C18.9584 5.05244 14.9476 1.04166 10 1.04166C5.05247 1.04166 1.04169 5.05244 1.04169 9.99999C1.04169 14.9475 5.05247 18.9583 10 18.9583Z" stroke="#FC3549" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.88336 14.1417C8.34718 14.4 8.8738 14.5241 9.40419 14.5H10.7375C11.3332 14.4978 11.9038 14.2599 12.3246 13.8383C12.7454 13.4167 12.9823 12.8457 12.9834 12.25C12.9834 11.654 12.7469 11.0823 12.3258 10.6605C11.9048 10.2386 11.3335 10.0011 10.7375 9.99999H9.26252C8.66651 9.99889 8.09528 9.76135 7.67422 9.33951C7.25317 8.91767 7.01669 8.34601 7.01669 7.74999C7.01669 7.15398 7.25317 6.58231 7.67422 6.16047C8.09528 5.73863 8.66651 5.50109 9.26252 5.49999H10.5959C11.0585 5.48479 11.5186 5.57453 11.9417 5.76249M10 5.49999V4.37499M10 15.625V14.5M3.66669 16.3333L16.3334 3.66666" stroke="#FC3549" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_140_345">
                  <rect width="20" height="20" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </span>  
              <span className='inline-block italic text-[10px] md:text-base'>No commissions,</span>

              <span className='inline-block'>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.78569 6.7857C8.47213 6.7857 9.83926 5.41857 9.83926 3.73213C9.83926 2.04569 8.47213 0.678558 6.78569 0.678558C5.09925 0.678558 3.73212 2.04569 3.73212 3.73213C3.73212 5.41857 5.09925 6.7857 6.78569 6.7857Z" stroke="#6610F2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.9107 18.3214C16.3467 18.3214 18.3214 16.3467 18.3214 13.9107C18.3214 11.4747 16.3467 9.5 13.9107 9.5C11.4747 9.5 9.5 11.4747 9.5 13.9107C9.5 16.3467 11.4747 18.3214 13.9107 18.3214Z" stroke="#6610F2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.7893 17.0321L17.0321 10.7893M8.14285 8.97069C7.24794 8.76409 6.3179 8.76245 5.42227 8.9659C4.52664 9.16935 3.68858 9.57263 2.97076 10.1456C2.25293 10.7185 1.67391 11.4463 1.27698 12.2746C0.880049 13.1028 0.675478 14.0101 0.678562 14.9285V16.9643H6.10713" stroke="#6610F2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <span className='inline-block italic text-[10px] md:text-base'>No middle man.</span>

              <span className='inline-block'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_140_357)">
                <path d="M10.0863 -2.54266e-06C10.4138 -2.54266e-06 10.7363 0.0212475 11.0363 0.0712475C11.3317 0.109963 11.6233 0.174374 11.9075 0.263747C12.1925 0.349997 12.4713 0.457497 12.75 0.592497C13.0213 0.721247 13.3 0.878747 13.5788 1.05C14.05 1.35 14.5138 1.5925 14.9863 1.78625C15.9165 2.15854 16.9001 2.38007 17.9 2.4425C18.4075 2.47875 18.9288 2.5 19.4713 2.5V7.5C19.4713 8.45 19.35 9.35 19.1075 10.2075C18.8746 11.0528 18.5436 11.8679 18.1213 12.6362C17.7007 13.4035 17.2032 14.126 16.6363 14.7925C16.0607 15.4741 15.4374 16.1141 14.7713 16.7075C14.0963 17.3027 13.3854 17.8558 12.6425 18.3637C11.9 18.8787 11.15 19.3575 10.4 19.7925L10.1 19.9712L9.80003 19.7925C9.02903 19.3461 8.27594 18.8695 7.54253 18.3637C6.79552 17.8615 6.08423 17.3081 5.41378 16.7075C4.74801 16.1141 4.1252 15.4741 3.55003 14.7925C2.98465 14.1232 2.48485 13.4011 2.05753 12.6362C1.64244 11.8645 1.31178 11.0502 1.07128 10.2075C0.82724 9.32592 0.706923 8.4147 0.713778 7.5V2.5C1.25753 2.5 1.77878 2.47875 2.28628 2.4425C2.78585 2.4078 3.2822 2.33635 3.77128 2.22875C4.25003 2.12125 4.72878 1.97875 5.20003 1.78625C5.68903 1.58889 6.15787 1.34484 6.60003 1.0575C7.15003 0.699997 7.70753 0.436247 8.25753 0.262497C8.84986 0.080912 9.46679 -0.00764193 10.0863 -2.54266e-06ZM18.2138 3.72875C17.2676 3.68284 16.3302 3.52464 15.4213 3.2575C14.5172 2.98782 13.6561 2.59093 12.8638 2.07875C12.4528 1.80899 12.0065 1.5974 11.5375 1.45C11.0691 1.30842 10.5819 1.23846 10.0925 1.2425C9.59953 1.23931 9.10877 1.30924 8.63628 1.45C8.16662 1.59261 7.72087 1.80453 7.31378 2.07875C6.5201 2.59372 5.65675 2.99235 4.75003 3.2625C3.86378 3.52 2.93628 3.6775 1.96378 3.735V7.50625C1.96378 8.335 2.07128 9.1275 2.28628 9.89125C2.50531 10.6484 2.80713 11.379 3.18628 12.07C3.56997 12.7682 4.02219 13.4264 4.53628 14.035C5.05753 14.6487 5.61378 15.22 6.21378 15.7625C6.81378 16.3062 7.44253 16.8062 8.10003 17.27C8.76378 17.735 9.42878 18.1562 10.0925 18.5412C10.7722 18.1456 11.4348 17.7215 12.0788 17.27C12.7406 16.8077 13.3727 16.3042 13.9713 15.7625C14.5713 15.22 15.1288 14.6487 15.65 14.035C16.1642 13.4265 16.6164 12.7682 17 12.07C17.3775 11.3799 17.6748 10.6489 17.8863 9.89125C18.1078 9.11576 18.2181 8.31274 18.2138 7.50625V3.72875Z" fill="#00D280"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7463 5.88626L14.1963 5.41376L13.6888 5.45751L8.23878 11.8925L6.38253 9.24251L5.88253 9.15751L5.30378 9.57126L5.21753 10.0713L7.60378 13.4788L7.87503 13.6288L8.44628 13.6638L8.73878 13.5363L14.7825 6.39251L14.7463 5.88626Z" fill="#00D280"/>
                </g>
                <defs>
                <clipPath id="clip0_140_357">
                <rect width="20" height="20" fill="white"/>
                </clipPath>
                </defs>
                </svg>
              </span>
              <span className='inline-block italic text-[10px] md:text-base'>Work directly with trust.</span>
            </div> */}

            <div className="mb-3 mt-4 md:mt-10">
              <div className="relative mb-4 flex flex-wrap items-center justify-end w-full md:w-[80%] mx-auto">
                <input
                  type="search"
                  className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-full h-[50px] md:h-[60px]
                  shadow-[0_0px_15px_0px_rgba(0,0,0,0.3)] bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]
                   text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-2 
                   focus:border-blueColor focus:text-neutral-700 focus:outline-none dark:border-searchbarBorderColor
                  dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-blueColor"
                  placeholder="   What are you looking for..."
                  aria-label="Search"
                  aria-describedby="button-addon1" />

                <button
                  className="absolute z-[3] flex items-center rounded-full bg-[#1271E5] px-6 py-2.5 mr-1 text-xs md:text-lg font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-orangeColor focus:bg-orangeColor focus:outline-none focus:ring-0 active:bg-primary-800 active:bg-orangeColor"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 mr-1">
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd" />
                  </svg>
                  SEARCH
                </button>
              </div>
            </div>

            <div className='flow-root flex-cols-2 w-full md:w-[80%] mx-auto'>
              <div className='flex flex-cols-5 gap-1 md:gap-3 float-left'>
                <a href='#' className='bg-skyBlueColor py-1 px-3 rounded-full hover:bg-orangeColor'>
                  <p className='text-purple font-semibold text-[10px] md:text-base hover:text-white'>JavaScript</p>
                </a>
                <a href='#' className='bg-skyBlueColor py-1 px-3 rounded-full hover:bg-orangeColor'>
                  <p className='text-purple font-semibold text-[10px] md:text-base hover:text-white'>Python</p>
                </a>
                <a href='#' className='bg-skyBlueColor py-1 px-3 rounded-full hover:bg-orangeColor'>
                  <p className='text-purple font-semibold text-[10px] md:text-base hover:text-white'>Java</p>
                </a>
                <a href='#' className='bg-skyBlueColor py-1 px-3 rounded-full hover:bg-orangeColor'>
                  <p className='text-purple font-semibold text-[10px] md:text-base hover:text-white'>Php</p>
                </a>
                <a href='#' className='bg-skyBlueColor py-1 px-3 rounded-full hover:bg-orangeColor'>
                  <p className='text-purple font-semibold text-[10px] md:text-base hover:text-white'>Swift</p>
                </a>
              </div>
              <div className='float-right'>
                <a href='#' className='text-orangeColor font-semibold text-[12px] md:text-base xl:text-lg hover:underline'>
                  Advanced Search
                </a>
              </div>
            </div>

            <div className='flex justify-center mt-8 items-center'>
              <span>
                <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.12649 0.585671C9.27587 0.521576 9.43671 0.488525 9.59925 0.488525C9.76178 0.488525 9.92263 0.521576 10.072 0.585671L17.7442 3.87752C18.176 4.06278 18.5439 4.3708 18.8025 4.7634C19.061 5.156 19.1987 5.61591 19.1985 6.0861V14.3247C19.1984 15.8066 18.8068 17.2622 18.0636 18.5438C17.3204 19.8255 16.2519 20.8878 14.9664 21.623L10.1944 24.3516C10.0131 24.4553 9.808 24.5098 9.59925 24.5098C9.3905 24.5098 9.18536 24.4553 9.0041 24.3516L4.23207 21.623C2.94621 20.8876 1.87749 19.8249 1.13426 18.5428C0.391033 17.2607 -0.000277774 15.8046 1.47938e-07 14.3223V6.0861C5.20087e-05 5.61611 0.137865 5.15647 0.396366 4.7641C0.654866 4.37174 1.0227 4.0639 1.45429 3.87873L9.12649 0.588073V0.585671ZM14.0473 10.9464C14.2659 10.7199 14.3868 10.4165 14.3841 10.1017C14.3814 9.78677 14.2552 9.48555 14.0327 9.26288C13.8102 9.04021 13.5093 8.91391 13.1946 8.91117C12.88 8.90844 12.5769 9.02949 12.3506 9.24825L8.39934 13.203L6.84786 11.6502C6.62156 11.4314 6.31846 11.3104 6.00385 11.3131C5.68924 11.3158 5.38829 11.4421 5.16581 11.6648C4.94334 11.8875 4.81715 12.1887 4.81442 12.5036C4.81168 12.8185 4.93263 13.1219 5.1512 13.3484L7.55101 15.7503C7.77603 15.9754 8.08117 16.1019 8.39934 16.1019C8.71752 16.1019 9.02266 15.9754 9.24768 15.7503L14.0473 10.9464Z" fill="#00D280"/>
                </svg>
              </span>
              <span className='font-bold ml-2 text-xs md:text-base'>2198 companies signed up in the last week alone!</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
