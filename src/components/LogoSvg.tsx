const LogoSVG = ({ color }: { color: string }) => {
  return (
    <svg
      id='logosandtypes_com'
      data-name='logosandtypes com'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 150 150'
      className='h-8 w-8'
      fill={color}
    >
      <defs>
        <style>{`.cls-1{fill:none;}`}</style>
      </defs>
      <path className='cls-1' d='M0,0H150V150H0Z' transform='translate(0 0)' />
      <path
        d='M76,8.88a65.53,65.53,0,0,0-45.21,113V73.92h0a45.21,45.21,0,1,1,75.92,33.68L68.51,41.68a34.1,34.1,0,0,1,6.68-.83L107.7,97.16A39,39,0,1,0,37,74.41v52.65a65.59,65.59,0,0,0,69.36,5.45L56.87,46.82a33.55,33.55,0,0,1,5.39-3l49.42,85.62A65.54,65.54,0,0,0,76,8.88ZM90.53,117.24a45.23,45.23,0,0,1-48.1-12.55V94.31A39,39,0,0,0,81,113.12L48,55.92a34,34,0,0,1,4.19-5.14Z'
        transform='translate(0 0)'
      />
    </svg>
  );
};

export default LogoSVG;
