import {
    LucideProps,
    Moon,
    SunMedium,
    Twitter,
  } from "lucide-react"
    
  export const Icons = {
    sun: SunMedium,
    moon: Moon,
    twitter: Twitter,
    logo: (props: LucideProps) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path
          fill="currentColor"
          d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
        />
      </svg>
    ),
    gitHub: (props: LucideProps) => (
      <svg viewBox="0 0 438.549 438.549" {...props}>
        <path
          fill="currentColor"
          d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
        ></path>
      </svg>
    ),
    swr: (props: LucideProps) => (
      <svg
        {...props}
        width="29"
        height="7"
        viewBox="0 0 29 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 3.58223C0.00686438 5.30813 1.4121 6.72121 3.13898 6.72121C4.87132 6.71905 6.27527 5.31554 6.27797 3.58321V3.138C6.28079 2.59258 6.62521 2.10744 7.1392 1.92491C7.65318 1.74238 8.22644 1.90162 8.57263 2.3231H10.6025C10.2317 0.953332 8.98951 0.00158361 7.57043 0C5.8381 0.00270121 4.43459 1.40665 4.43243 3.13898V3.58223C4.43135 4.29635 3.85213 4.87469 3.138 4.87469C2.42464 4.87361 1.84662 4.29559 1.84554 3.58223C1.84554 3.48418 1.80659 3.39015 1.73726 3.32081C1.66793 3.25148 1.57389 3.21253 1.47584 3.21253H0.368715C0.164921 3.21307 -7.16936e-07 3.37843 0 3.58223ZM12.0117 6.72121C10.5942 6.71583 9.35475 5.76485 8.98254 4.39713H11.0095C11.3535 4.82325 11.9289 4.98587 12.4451 4.8028C12.9612 4.61973 13.3056 4.13084 13.3042 3.58321V3.138C13.3069 1.40567 14.7108 0.00215994 16.4431 0C18.1524 0 19.5458 1.37288 19.5811 3.0723L19.591 3.58223C19.5938 4.12765 19.9382 4.61279 20.4522 4.79532C20.9662 4.97785 21.5394 4.81861 21.8856 4.39713H23.9155C23.5452 5.76694 22.3034 6.71907 20.8844 6.72121C19.1575 6.72121 17.7523 5.30715 17.7454 3.58321L17.7356 3.12231V3.1027C17.7149 2.40355 17.1426 1.84727 16.4431 1.84652C15.7298 1.8476 15.1518 2.42562 15.1507 3.13898V3.58223C15.1485 5.31495 13.7444 6.71905 12.0117 6.72121ZM24.3136 2.32408C24.6577 1.89782 25.2335 1.73524 25.7497 1.91857C26.2659 2.1019 26.6101 2.59117 26.6083 3.13898C26.6083 3.34316 26.7738 3.50868 26.978 3.50868H28.0861C28.2899 3.50814 28.4548 3.34278 28.4548 3.13898C28.4527 1.40627 27.0486 0.00216117 25.3158 0C23.8965 0.00170369 22.6542 0.953924 22.2838 2.32408H24.3136Z"
          fill="#2C2A2A"
        />
      </svg>
    ),
    react: (props: LucideProps) => (
      <svg
        {...props}
        width="26"
        height="23"
        viewBox="0 0 26 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_4_82)">
          <path
            d="M13.1845 13.749C14.4383 13.749 15.4547 12.7226 15.4547 11.4564C15.4547 10.1902 14.4383 9.1637 13.1845 9.1637C11.9308 9.1637 10.9144 10.1902 10.9144 11.4564C10.9144 12.7226 11.9308 13.749 13.1845 13.749Z"
            fill="#2C2A2A"
          />
          <path
            d="M13.1845 16.1537C19.912 16.1537 25.3657 14.0507 25.3657 11.4565C25.3657 8.86228 19.912 6.75928 13.1845 6.75928C6.45705 6.75928 1.00333 8.86228 1.00333 11.4565C1.00333 14.0507 6.45705 16.1537 13.1845 16.1537Z"
            stroke="#2C2A2A"
          />
          <path
            d="M9.15665 13.805C12.5204 19.6891 17.0506 23.4075 19.2751 22.1104C21.4997 20.8133 20.5762 14.9919 17.2124 9.10784C13.8487 3.22381 9.31848 -0.494642 7.09394 0.802451C4.86939 2.09954 5.7929 7.92099 9.15665 13.805Z"
            stroke="#2C2A2A"
          />
          <path
            d="M9.15666 9.10779C5.79291 14.9918 4.8694 20.8133 7.09394 22.1104C9.31848 23.4075 13.8487 19.689 17.2124 13.805C20.5762 7.92095 21.4997 2.0995 19.2752 0.802407C17.0506 -0.494685 12.5204 3.22376 9.15666 9.10779Z"
            stroke="#2C2A2A"
          />
        </g>
        <defs>
          <clipPath id="clip0_4_82">
            <rect
              x="0.449646"
              y="0.0134277"
              width="25.4698"
              height="22.8859"
              rx="5"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    jotai: (props: LucideProps) => (
      <svg
        {...props}
        width="28"
        height="10"
        viewBox="0 0 28 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.07256 0.511719H5.94348V6.75228C5.95726 7.27855 5.82409 7.79825 5.55891 8.25305C5.30107 8.67613 4.9283 9.01722 4.48405 9.23658C3.98734 9.47686 3.4407 9.59582 2.88906 9.58365C2.38557 9.59078 1.88616 9.49254 1.4229 9.29523C0.997935 9.11308 0.636575 8.80893 0.384567 8.4213C0.128189 8.03096 0 7.53872 0 6.94456H1.88342C1.88918 7.29932 1.99206 7.57621 2.19203 7.77234C2.40512 7.97476 2.69163 8.08137 2.9852 8.0675C3.70434 8.0675 4.06679 7.62909 4.07256 6.75228V0.511719Z"
          fill="#2C2A2A"
        />
        <path
          d="M10.0958 9.59133C9.41707 9.59133 8.83093 9.44647 8.3374 9.15677C7.84687 8.87075 7.44979 8.44863 7.19428 7.94153C6.9164 7.37894 6.77853 6.75755 6.7924 6.13023C6.77801 5.50008 6.91587 4.87576 7.19428 4.31026C7.45007 3.80336 7.84708 3.38131 8.3374 3.09503C8.87374 2.79454 9.48126 2.6444 10.0958 2.66047C10.7107 2.64451 11.3185 2.79464 11.8552 3.09503C12.3453 3.38133 12.742 3.8034 12.9974 4.31026C13.2761 4.87569 13.4143 5.5 13.4002 6.13023C13.4138 6.75763 13.2756 7.37902 12.9974 7.94153C12.7423 8.44859 12.3455 8.87073 11.8552 9.15677C11.3611 9.44711 10.7746 9.59197 10.0958 9.59133ZM12.2244 0.510742V1.52023H7.96822V0.510742H12.2244ZM10.1093 8.1492C10.5385 8.16681 10.9419 7.94454 11.1563 7.57235C11.3934 7.18778 11.512 6.70291 11.512 6.11773C11.512 5.53254 11.3925 5.04671 11.1534 4.66022C10.939 4.28803 10.5356 4.06576 10.1064 4.08337C9.67428 4.06503 9.26739 4.28697 9.04885 4.66022C8.80978 5.04479 8.69024 5.53062 8.69024 6.11773C8.69024 6.70483 8.80978 7.18971 9.04885 7.57235C9.26722 7.94481 9.67308 8.1666 10.1045 8.1492H10.1093Z"
          fill="#2C2A2A"
        />
        <path
          d="M17.9122 2.74798V4.14684H16.6489V7.4022C16.6489 7.65857 16.7072 7.83163 16.8239 7.92136C16.9558 8.01656 17.1161 8.06434 17.2786 8.05692C17.3664 8.05703 17.4539 8.04899 17.5401 8.03289L17.7411 7.99635L18.0295 9.38175C17.9334 9.4106 17.8055 9.44521 17.6363 9.48366C17.4336 9.52711 17.2272 9.55126 17.02 9.55577C16.3438 9.5859 15.8013 9.43976 15.3923 9.11736C14.9834 8.79497 14.7818 8.30337 14.7876 7.64255V4.14684H13.8694V2.74798H14.7876V1.13953H16.6489V2.74798H17.9122Z"
          fill="#2C2A2A"
        />
        <path
          d="M20.7666 9.58851C20.1257 9.58851 19.594 9.4209 19.1717 9.08569C18.7493 8.75048 18.5381 8.25086 18.5381 7.58684C18.5381 7.08626 18.656 6.69304 18.8919 6.40718C19.1367 6.11518 19.4584 5.89768 19.8206 5.77938C20.2202 5.64371 20.6347 5.55655 21.0551 5.51979C21.4753 5.48645 21.8929 5.4251 22.3049 5.33616C22.5562 5.27207 22.6815 5.13234 22.6808 4.91699V4.89007C22.6949 4.64791 22.5996 4.41221 22.4212 4.24784C22.2469 4.09722 22.0014 4.02159 21.6848 4.02095C21.4017 4.00617 21.1213 4.08267 20.8849 4.23919C20.6947 4.37418 20.5561 4.56979 20.4917 4.79393L18.7698 4.65452C18.8846 4.06282 19.2275 3.54 19.7245 3.19893C20.2334 2.84129 20.8897 2.66214 21.6935 2.6615C22.1697 2.65776 22.6429 2.73782 23.0914 2.89801C23.5041 3.03993 23.8686 3.29514 24.1431 3.63446C24.4098 3.96839 24.5431 4.40167 24.5431 4.93429V9.46161H22.7779V8.53095H22.726C22.5571 8.84801 22.3035 9.11195 21.9934 9.29336C21.6685 9.49013 21.2595 9.58851 20.7666 9.58851ZM21.2993 8.3031C21.6676 8.31741 22.0275 8.19012 22.3049 7.94737C22.56 7.72492 22.7039 7.40125 22.6981 7.06287V6.35046C22.5934 6.41257 22.479 6.45677 22.3597 6.48121C22.2059 6.51871 22.0434 6.5514 21.8694 6.57735C21.6954 6.60331 21.5416 6.62927 21.4041 6.64946C21.1236 6.67996 20.8539 6.77435 20.6157 6.92539C20.418 7.05841 20.3045 7.28539 20.3167 7.52339C20.3048 7.75027 20.4091 7.96764 20.5936 8.10024C20.8009 8.23966 21.0467 8.3106 21.2964 8.3031H21.2993Z"
          fill="#2C2A2A"
        />
        <path
          d="M26.7938 1.88266C26.5302 1.88697 26.2756 1.78712 26.0852 1.60481C25.8943 1.43626 25.7859 1.19319 25.7881 0.938547C25.786 0.684468 25.8944 0.442009 26.0852 0.274208C26.4883 -0.0914027 27.1031 -0.0914027 27.5062 0.274208C27.697 0.442009 27.8054 0.684468 27.8032 0.938547C27.8054 1.19319 27.6971 1.43626 27.5062 1.60481C27.3146 1.78771 27.0586 1.88757 26.7938 1.88266ZM25.8621 9.46055V2.74793H27.7234V9.46055H25.8621Z"
          fill="#2C2A2A"
        />
      </svg>
    ),
    nextjs: (props: LucideProps) => (
      <svg
        {...props}
        width="30"
        height="7"
        viewBox="0 0 30 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5322 0.505859H24.5516V1.4323H22.5605V6.30618H21.5648V1.4323H19.5322V0.505859Z"
          fill="#2C2A2A"
        />
        <path
          d="M11.2773 0.505859V1.4323H7.25395V2.92266H10.4895V3.8491H7.25395V5.37974H11.2773V6.30618H6.25838V1.4323H6.25797V0.505859H11.2773Z"
          fill="#2C2A2A"
        />
        <path
          d="M13.7836 0.508301H12.4807L17.1474 6.30863H18.4541L16.1205 3.41046L18.4504 0.512726L17.1474 0.51474L15.4681 2.60032L13.7836 0.508301Z"
          fill="#2C2A2A"
        />
        <path
          d="M15.1206 4.65146L14.4681 3.84021L12.477 6.313H13.7836L15.1206 4.65146Z"
          fill="#2C2A2A"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.29328 6.30616L1.62031 0.503418H0.375854V6.30374H1.37142V1.74323L5.04259 6.30616H6.29328Z"
          fill="#2C2A2A"
        />
        <path
          d="M24.7754 6.27081C24.7025 6.27081 24.6405 6.24556 24.5885 6.19504C24.5366 6.14452 24.5109 6.08336 24.5116 6.01091C24.5109 5.94045 24.5366 5.87996 24.5885 5.82944C24.6405 5.77892 24.7025 5.75366 24.7754 5.75366C24.8455 5.75366 24.9069 5.77892 24.9588 5.82944C25.0115 5.87996 25.0378 5.94045 25.0385 6.01091C25.0378 6.05877 25.0256 6.10264 25.0013 6.14185C24.9764 6.18174 24.9447 6.21299 24.9049 6.23559C24.8657 6.25885 24.8226 6.27081 24.7754 6.27081Z"
          fill="#2C2A2A"
        />
        <path
          d="M26.4746 3.82715H26.9158V5.52684C26.9151 5.68305 26.8814 5.81666 26.8153 5.929C26.7485 6.04133 26.6561 6.12707 26.5374 6.18756C26.4193 6.24738 26.281 6.27797 26.1239 6.27797C25.9801 6.27797 25.8513 6.25204 25.7367 6.20153C25.622 6.15101 25.5309 6.07523 25.4642 5.97552C25.3966 5.87581 25.3636 5.75151 25.3636 5.60262H25.8055C25.8061 5.66776 25.821 5.72425 25.8493 5.77145C25.8776 5.81865 25.9167 5.85454 25.9667 5.8798C26.0172 5.90506 26.0753 5.91769 26.1407 5.91769C26.2116 5.91769 26.2723 5.90306 26.3215 5.87315C26.3707 5.8439 26.4085 5.80003 26.4348 5.74154C26.4604 5.68371 26.474 5.61192 26.4746 5.52684V3.82715Z"
          fill="#2C2A2A"
        />
        <path
          d="M28.731 4.49197C28.7203 4.38894 28.673 4.30851 28.5907 4.25134C28.5077 4.19351 28.4005 4.16493 28.2689 4.16493C28.1765 4.16493 28.097 4.17889 28.0309 4.20614C27.9647 4.23406 27.9135 4.27128 27.8784 4.31847C27.8433 4.36567 27.8258 4.41952 27.8244 4.48001C27.8244 4.53053 27.8365 4.57439 27.8601 4.61096C27.8838 4.64818 27.9154 4.67942 27.9566 4.70468C27.9971 4.7306 28.0423 4.75187 28.0916 4.76915C28.1414 4.78644 28.1914 4.80106 28.2413 4.81303L28.4713 4.86953C28.5637 4.8908 28.6535 4.91939 28.7391 4.95594C28.8248 4.99184 28.9024 5.0377 28.9705 5.09287C29.0386 5.14805 29.0926 5.21452 29.1324 5.29229C29.1722 5.37006 29.1924 5.46113 29.1924 5.56615C29.1924 5.70773 29.156 5.83204 29.0824 5.93972C29.0089 6.04674 28.903 6.1305 28.7641 6.19099C28.6258 6.25082 28.4585 6.28139 28.2615 6.28139C28.0713 6.28139 27.9053 6.25215 27.7657 6.19365C27.6254 6.13582 27.5161 6.05073 27.4372 5.93906C27.3583 5.82739 27.3158 5.69112 27.3097 5.53092H27.7469C27.7529 5.61467 27.7799 5.68448 27.8258 5.74098C27.8723 5.79681 27.933 5.83802 28.0072 5.86594C28.0821 5.89319 28.1657 5.90715 28.2582 5.90715C28.3546 5.90715 28.4396 5.89253 28.5131 5.86394C28.586 5.83536 28.6433 5.79549 28.6845 5.74364C28.7263 5.69245 28.7472 5.63196 28.7479 5.56283C28.7472 5.49968 28.7283 5.44716 28.6919 5.40595C28.6548 5.36474 28.6035 5.33018 28.5381 5.30226C28.472 5.27434 28.3951 5.24908 28.3074 5.22715L28.0281 5.15669C27.8264 5.1055 27.6665 5.02774 27.5498 4.92337C27.4325 4.81901 27.3744 4.68075 27.3744 4.50726C27.3744 4.36501 27.4136 4.24005 27.4926 4.13302C27.5707 4.02601 27.678 3.94291 27.8136 3.88375C27.9499 3.82393 28.1037 3.79468 28.275 3.79468C28.4491 3.79468 28.6015 3.82393 28.7331 3.88375C28.8646 3.94291 28.9678 4.02534 29.0427 4.13036C29.1175 4.23539 29.1567 4.3557 29.1587 4.49197H28.731Z"
          fill="#2C2A2A"
        />
      </svg>
    ),
  }