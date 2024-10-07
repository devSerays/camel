"use client";
import { useState } from "react";

const SideDrawer = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [actived, setActived] = useState("Token");

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const changeActive = (name: string) => {
    setActived(name);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#FBDBA4] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <nav className="mt-5 p-5">
          <ul className="space-y-2">
            <li
              onClick={() => changeActive("Token")}
              className={`flex items-center gap-3 px-4 py-2 cursor-pointer font-bold ${
                actived === "Token" ? "active__drawer" : "text-[#B37337]"
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.728 5.26973C27.038 1.57973 21.92 -0.318268 16.698 0.0437315C7.646 0.681732 0 9.17373 0 18.5857V28.6657C0 33.7297 3.014 35.9977 6 35.9977H17.406C26.822 35.9977 35.316 28.3517 35.954 19.2997C36.324 14.0737 34.418 8.95973 30.728 5.26973ZM15.288 15.5177L21.372 16.5317C24.054 16.9777 26.002 19.2777 26.002 21.9977C26.002 25.3057 23.31 27.9977 20.002 27.9977V29.9977C20.002 31.1037 19.106 31.9977 18.002 31.9977C16.898 31.9977 16.002 31.1037 16.002 29.9977V27.9977H15.466C13.33 27.9977 11.34 26.8497 10.27 24.9997C9.718 24.0437 10.044 22.8217 11 22.2677C11.954 21.7137 13.178 22.0397 13.732 22.9977C14.088 23.6137 14.754 23.9977 15.466 23.9977H20.002C21.104 23.9977 22.002 23.0997 22.002 21.9977C22.002 21.2417 21.46 20.6017 20.714 20.4777L14.63 19.4637C11.948 19.0177 10 16.7177 10 13.9977C10 10.6897 12.692 7.99773 16 7.99773V5.99773C16 4.89373 16.896 3.99773 18 3.99773C19.104 3.99773 20 4.89373 20 5.99773V7.99773H20.536C22.67 7.99773 24.662 9.14773 25.732 10.9977C26.284 11.9537 25.958 13.1757 25.002 13.7297C24.048 14.2837 22.822 13.9557 22.27 12.9997C21.912 12.3817 21.248 11.9997 20.536 11.9997H16C14.898 11.9997 14 12.8977 14 13.9997C14 14.7557 14.542 15.3937 15.288 15.5177ZM48 31.9977V41.9977C48 45.3117 45.314 47.9977 42 47.9977H32C26.09 47.9977 20.93 44.7677 18.16 39.9897L18.168 39.9817C29.296 39.5777 39.182 30.4017 39.944 19.5817C39.978 19.1077 39.994 18.6337 39.996 18.1617C44.772 20.9337 48 26.0917 48 31.9977Z"
                  fill={actived === "Token" ? "white" : "#B37337"}
                />
              </svg>
              Token Price
            </li>
            <li
              onClick={() => changeActive("Tokenomics")}
              className={`flex fill-black items-center gap-3 px-4 py-2 cursor-pointer font-bold ${
                actived === "Tokenomics" ? "active__drawer" : "text-[#B37337]"
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.7607 22.9543C45.0847 21.2623 44.1127 19.6823 42.8967 18.3003V10.8703C42.8967 9.63428 42.3407 8.48628 41.3687 7.71828C40.4127 6.96428 39.1907 6.69228 38.0067 6.97028C34.3567 7.84028 31.6187 9.90828 30.1527 12.8623H19.4267C14.2647 12.8623 9.63068 15.1783 6.58868 18.8003C4.18868 18.4503 4.47868 14.8583 6.89468 14.8623C9.50868 14.8523 9.51068 10.8723 6.89468 10.8623C0.524678 10.8423 -1.36332 19.6743 4.35868 22.2803C0.840678 29.5203 3.90068 38.8443 10.8947 42.7043V42.8623C10.8987 49.5643 20.3747 51.0983 22.5527 44.8623H27.2387C29.4167 51.1023 38.8927 49.5603 38.8967 42.8623V42.6783C42.0167 40.8723 44.4387 38.0783 45.7607 34.7703C47.4027 34.4203 48.8967 33.0743 48.8967 30.8623V26.8623C48.8967 24.6503 47.4007 23.3043 45.7607 22.9543ZM36.8967 26.8623C34.2807 26.8503 34.2807 22.8743 36.8967 22.8623C39.5127 22.8743 39.5127 26.8503 36.8967 26.8623ZM13.0007 9.88628C11.8767 -1.29572 28.4807 -2.37772 28.8967 8.86228H19.4287C17.1867 8.86228 15.0287 9.23228 13.0007 9.88628Z"
                  fill={actived === "Tokenomics" ? "white" : "#B37337"}
                />
              </svg>
              Tokenomics
            </li>
            <li
              onClick={() => changeActive("Who")}
              className={`flex items-center gap-3 px-4 py-2 cursor-pointer font-bold ${
                actived === "Who" ? "active__drawer" : "text-[#B37337]"
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.3724 13.9247C43.4421 13.4681 42.4986 13.2918 41.8977 13.2802C39.9289 13.2397 37.9602 13.101 35.9915 13.0345C35.3642 13.0143 35.0084 12.8004 34.7607 12.0866C32.8763 6.68194 29.0574 4.07211 23.8285 4.64148C23.1011 4.71951 22.7559 4.45362 22.3342 3.90737C20.1599 1.08945 17.353 -0.211125 14.0033 0.0287599C12.4668 0.138586 12.0029 1.09812 12.7725 2.57211C13.326 3.62992 14.0955 4.55188 14.8019 5.58367C13.832 5.85824 11.8527 6.58945 10.643 8.59523C10.0474 9.58367 9.70739 10.4334 9.60197 12.0808C9.44911 14.4565 9.03006 16.8525 9.17502 19.2051C9.13548 20.0663 9.06169 20.9507 8.94836 21.8553C8.0312 29.2195 4.88702 34.9767 2.00376 38.9421C1.87462 39.1328 -2.69884 44.3664 -3.06254 44.7999C-3.53694 45.7219 -2.85057 45.4867 -3.59379 46.3999C-6.64543 49.1351 -7.68948 45.912 -5.18754 44.7999C-8.75198 48.0453 -2.89241 45.3295 -2.53129 44.7999C-2.89241 45.3295 -2.39161 45.6325 -2.53129 45.8666C-2.76322 46.6209 -2.302 47.2427 -2.53129 47.9999C-2.76322 48.7687 -3.90629 52.3797 -4.12504 53.1427H10.2187C12.2006 53.1485 14.186 53.2835 16.0625 53.7142C17.0587 53.2113 18.727 53.4375 19.7812 53.1427C20.7748 52.3624 22.4053 46.2022 23.897 44.8871C26.1899 42.864 27.7686 40.1299 28.8334 36.9218C29.2972 35.523 29.5318 34.0259 29.8243 32.5634C30.5148 29.1039 37.6202 29.4623 37.9233 29.3958C40.203 28.8842 42.0532 29.6299 42.7937 29.9825C44.0377 30.3091 45.3186 29.5895 45.7956 28.3149C46.2595 27.0779 45.8536 25.627 44.8205 24.8756C47.2952 25.127 48.1412 24.2455 48.4127 23.89C50.131 21.6444 47.8698 15.6357 44.3724 13.9247Z"
                  fill={actived === "Who" ? "white" : "#B37337"}
                />
              </svg>
              Who is
            </li>
            <li
              onClick={() => changeActive("Future")}
              className={`flex items-center gap-3 px-4 py-2 cursor-pointer font-bold ${
                actived === "Future" ? "active__drawer" : "text-[#B37337]"
              }`}
            >
              <svg
                width="20"
                height="32"
                viewBox="0 0 45 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.7808 12.8564C42.0688 10.8604 39.0308 7.85639 34.2828 4.88239C30.3708 2.43239 26.8928 1.13439 24.6628 0.476386C23.2268 0.0523856 21.7188 0.324385 20.5208 1.21839C19.3288 2.10839 18.6448 3.47039 18.6448 4.95239V6.28639C17.9588 5.80639 17.2528 5.33839 16.5308 4.88439C12.6208 2.43439 9.14077 1.13639 6.91278 0.478385C5.48077 0.0563854 3.96678 0.324385 2.77078 1.22039C1.57878 2.11039 0.894775 3.47239 0.894775 4.95439V26.7764C0.894775 28.2584 1.57878 29.6184 2.77078 30.5104C3.96878 31.4064 5.48077 31.6764 6.91278 31.2524C9.14277 30.5944 12.6208 29.2944 16.5328 26.8444C17.2548 26.3924 17.9608 25.9244 18.6468 25.4444V26.7784C18.6468 28.2604 19.3308 29.6204 20.5228 30.5124C21.3488 31.1304 22.3228 31.4504 23.3188 31.4504C23.7668 31.4504 24.2188 31.3864 24.6628 31.2544C26.8928 30.5964 30.3708 29.2964 34.2828 26.8484C39.0308 23.8744 42.0688 20.8704 43.7808 18.8744C45.2768 17.1324 45.2768 14.6044 43.7808 12.8624V12.8564Z"
                  fill={actived === "Future" ? "white" : "#B37337"}
                />
              </svg>
              Future
            </li>
            <li
              onClick={() => changeActive("Roadmap")}
              className={`flex items-center gap-3 px-4 py-2 cursor-pointer font-bold ${
                actived === "Roadmap"
                  ? "active__drawer"
                  : "text-[#B37337] fill-red-50"
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 45 49"
                fill={actived === "Roadmap" ? "white" : "#B37337"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M44.3108 28.4483L40.4828 24.6203C39.3508 23.4863 37.8428 22.8623 36.2388 22.8623H24.8968V18.8623H37.8968C40.6528 18.8623 42.8968 16.6183 42.8968 13.8623V9.8623C42.8968 7.1063 40.6528 4.8623 37.8968 4.8623H24.8848L24.8968 2.8743C24.9028 1.7683 24.0128 0.868305 22.9068 0.862305H22.8968C21.7968 0.862305 20.9028 1.7503 20.8968 2.8503L20.8848 4.8623H9.55279C7.95079 4.8623 6.44279 5.4863 5.30879 6.6203L1.48079 10.4483C0.698787 11.2303 0.698787 12.4943 1.48079 13.2763L5.30879 17.1043C6.44079 18.2383 7.94879 18.8623 9.55279 18.8623H20.8948V22.8623H7.89479C5.13879 22.8623 2.89479 25.1063 2.89479 27.8623V31.8623C2.89479 34.6183 5.13879 36.8623 7.89479 36.8623H20.8768L20.8948 46.8663C20.8948 47.9703 21.7928 48.8623 22.8948 48.8623H22.8988C24.0028 48.8623 24.8968 47.9623 24.8948 46.8583L24.8768 36.8623H36.2388C37.8408 36.8623 39.3488 36.2383 40.4828 35.1043L44.3108 31.2763C45.0928 30.4943 45.0928 29.2303 44.3108 28.4483Z" />
              </svg>
              Roadmap
            </li>
            <li
              onClick={toggleDrawer}
              className={`flex items-center gap-3 px-4 py-2 cursor-pointer font-bold text-[#B37337]`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#B37337"
                  d="M45.6967 23.7563C45.5727 23.4443 42.5067 16.0263 31.2787 10.5923C29.7947 9.87227 27.9947 10.4943 27.2707 11.9863C26.5507 13.4783 27.1727 15.2723 28.6647 15.9923C32.6027 17.8983 35.2867 20.0463 37.0627 21.8663H17.4487C15.7927 21.8663 14.4487 23.2083 14.4487 24.8663C14.4487 26.5243 15.7927 27.8663 17.4487 27.8663H37.0947C35.3287 29.6743 32.6427 31.8143 28.6667 33.7403C27.1747 34.4623 26.5507 36.2563 27.2727 37.7463C27.7927 38.8163 28.8627 39.4403 29.9767 39.4403C30.4167 39.4403 30.8607 39.3443 31.2807 39.1403C42.1567 33.8763 45.3507 26.8143 45.6787 26.0263C45.9807 25.3023 45.9847 24.4843 45.6967 23.7563Z"
                />
                <path
                  d="M18.2087 40.8883C15.4207 40.5183 13.0747 40.0503 11.5967 39.7203C10.9727 37.0783 9.88269 31.4963 9.88269 24.8663C9.88269 18.2363 10.9767 12.6443 11.5987 10.0063C13.0647 9.67627 15.4027 9.20427 18.2067 8.83627C19.8487 8.62027 21.0047 7.11427 20.7907 5.47027C20.5747 3.82827 19.0647 2.67627 17.4247 2.88627C12.1927 3.57427 8.50269 4.58027 8.34669 4.62227C7.35269 4.89627 6.56669 5.66227 6.27069 6.65227C6.17269 6.97627 3.88269 14.7183 3.88269 24.8663C3.88269 35.0143 6.17469 42.7563 6.27069 43.0803C6.56869 44.0743 7.36069 44.8423 8.36269 45.1143C8.51869 45.1563 12.2367 46.1503 17.4227 46.8363C17.5547 46.8543 17.6887 46.8623 17.8187 46.8623C19.3007 46.8623 20.5907 45.7643 20.7887 44.2563C21.0047 42.6143 19.8487 41.1063 18.2067 40.8883H18.2087Z"
                  fill="#B37337"
                />
              </svg>
              Exit
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
