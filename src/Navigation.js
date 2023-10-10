// import noCommision from './public/noCommision.svg';
import './App.css';
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
 
export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal hover:text-orangeColor">
        <a href="#" className="flex items-center font-medium">
        Service Categories
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal hover:text-orangeColor">
        <a href="#" className="flex items-center font-medium">
        Find Firms
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal hover:text-orangeColor">
        <a href="#" className="flex items-center font-medium">
        Leave A Review
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal hover:text-orangeColor">
        <a href="#" className="flex items-center font-medium">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.225204 6.71097L3.66468 3.27149C3.85576 3.08041 4.08097 2.94392 4.34029 2.86203C4.59962 2.78013 4.86577 2.76648 5.13874 2.82108L6.20334 3.04628C5.46631 3.9198 4.88624 4.71143 4.46313 5.42116C4.04002 6.13089 3.63056 6.99076 3.23475 8.00077L0.225204 6.71097ZM4.42218 8.57402C4.7361 7.59131 5.16276 6.66319 5.70216 5.78968C6.24156 4.91616 6.89315 4.09724 7.65693 3.33291C8.85802 2.13182 10.2297 1.23428 11.772 0.640288C13.3143 0.0462953 14.7543 -0.134414 16.0918 0.0981604C16.3239 1.43573 16.1464 2.87567 15.5595 4.41798C14.9726 5.96029 14.0787 7.33198 12.8776 8.53307C12.1269 9.28375 11.308 9.93561 10.4208 10.4887C9.53363 11.0417 8.59869 11.4749 7.61598 11.7883L4.42218 8.57402ZM10.0728 6.11725C10.3867 6.43117 10.7724 6.58813 11.2299 6.58813C11.6874 6.58813 12.0728 6.43117 12.3862 6.11725C12.7001 5.80333 12.8571 5.41789 12.8571 4.96093C12.8571 4.50397 12.7001 4.11825 12.3862 3.80379C12.0723 3.48987 11.6866 3.33291 11.2291 3.33291C10.7716 3.33291 10.3861 3.48987 10.0728 3.80379C9.75883 4.11771 9.60187 4.50342 9.60187 4.96093C9.60187 5.41843 9.75883 5.80387 10.0728 6.11725ZM9.49951 15.9648L8.18923 12.9553C9.19923 12.5594 10.0627 12.15 10.7795 11.7269C11.4963 11.3038 12.2912 10.7237 13.1642 9.98666L13.3689 11.0513C13.4235 11.3242 13.4099 11.5939 13.328 11.8604C13.2461 12.1268 13.1096 12.3553 12.9185 12.5458L9.49951 15.9648ZM1.53548 11.1946C2.01319 10.7169 2.59326 10.4745 3.27569 10.4674C3.95813 10.4603 4.5382 10.6958 5.0159 11.1741C5.49361 11.6518 5.73246 12.2319 5.73246 12.9143C5.73246 13.5967 5.49361 14.1768 5.0159 14.6545C4.67469 14.9957 4.10499 15.2892 3.30681 15.5349C2.50863 15.7805 1.40636 15.9989 0 16.19C0.191082 14.7842 0.409461 13.6855 0.655138 12.8938C0.900815 12.1022 1.19426 11.5358 1.53548 11.1946Z" fill="#F07164"/>
        </svg> Pricing & Plans
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal hover:text-orangeColor">
        <a href="#" className="flex items-center font-medium">
        Become a Provider
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal hover:text-orangeColor">
        <a href="#" className="flex items-center font-medium">
        Enterprise
        </a>
      </Typography>
      
    </ul>
  );
 
  return (
    <>
    <section className='py-4'>
      <div className="max-h-[768px]">
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-1 border-none">
          <div className="flex items-center justify-between text-black">
            <div>
              <img src="././truefirms-logo.svg" alt=" " className='sm:w-[100%] w-[130px]'/>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <Button
                variant="gradient"
                size="sm"
                className="lg:inline-block text-black border-2 border-orangeColor hover:shadow-none sm:px-4 px-2">
                <div className='flex space-x-1'>
                  <span>0</span>
                  <span>
                    <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6667 0H1.77778C1.30628 0 0.854097 0.187301 0.520699 0.520699C0.187301 0.854097 0 1.30628 0 1.77778V16L6.22222 12.4444L12.4444 16V1.77778C12.4444 1.30628 12.2571 0.854097 11.9237 0.520699C11.5903 0.187301 11.1382 0 10.6667 0Z" fill="#F07164"/>
                    </svg>
                  </span>  
                </div>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="lg:inline-block text-black border-2 border-orangeColor rounded-full hover:bg-orangeColor hover:text-white sm:px-4 px-2">
                <span>Post a job</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="lg:inline-block hover:shadow-lg hover:shadow-ShadowColor text-white bg-orangeColor rounded-full border-2 border-orangeColor sm:px-4 px-2">
                <span>Sign in</span>
              </Button>
            </div>
          </div>
        </Navbar>
      </div>
    </section>
    <div className="max-h-[768px]">
      <Navbar className="sticky bg-purple top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-1">
        <div className="flex items-center justify-between sm:justify-center text-black">
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden mb-3 mt-[-10px]"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>
    </div>
    </>
  );
}

export default StickyNavbar;
