import React from 'react';

const bgcolors = {
  positive: 'bg-green-100 dark:bg-green-500 border-green-500 dark:border-green-700',
  negative: 'bg-red-100 dark:bg-red-500 border-red-500 dark:border-red-700',
  neutral:  'bg-blue-100 dark:bg-blue-500 border-blue-500 dark:border-blue-700',
  warning:  'bg-orange-100 dark:bg-orange-500 border-orange-500 dark:border-orange-700',
};

const colors = {
    positive: 'green',
    negative: 'red',
    neutral: 'blue',
    warning: 'orange',
}

export default function Aside({ children, type, title, ...props }) {
  console.log(bgcolors[type])
  return (
    <div
      className={`relative py-6 mt-8 mb-8 -mx-6 px-6 rounded-lg  border-l-[6px] 
      ${bgcolors[type]} dark:bg-opacity-50
      `}
      {...props}
    >
      <div
        className={`bg-white dark:bg-dark absolute top-0 left-0
        transform p-2 ${['warning', 'negative'].includes(type) ? 'rounded-2xl' : 'rounded-full'}
        `}
        style={{
          transform: 'translate(calc(-50% - 1.5px), -50%)',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32px"
          height="32px"
          viewBox="0 0 24 24"
          fill="none"
          stroke={`${colors[type]}`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {(() => {
            switch (type) {
              case 'neutral':
                return (
                  <>
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </>
                );

              case 'positive':
                return (
                  <>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </>
                );

              case 'warning':
                return (
                  <>
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </>
                );
              case 'negative':
                return (
                  <>
                    <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                    <line x1="8" x2="16" y1="8" y2="16" />
                    <line x2="8" x1="16" y1="8" y2="16" />
                  </>
                );
              default:
                return (
                  <>
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </>
                );
            }
          })()}
        </svg>
      </div>
      {title && <h6 className="text-xl font-medium my-2">{title}</h6>}
      <div className="my-2">{children}</div>
    </div>
  );
}
