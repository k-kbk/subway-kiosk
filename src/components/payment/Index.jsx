const payments = [
  {
    id: 1,
    content: '신용카드',
    img: '/src/assets/credit_card.svg',
  },
  {
    id: 2,
    content: '모바일 간편 결제',
    img: './src/assets/phone.svg',
  },
  {
    id: 3,
    content: '기프티콘 / 교환권',
    img: '/src/assets/gift_card.svg',
  },
];

export default function Index() {
  return (
    <div
      css={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--lightGray)',
      }}
    >
      <div css={{ display: 'flex' }}>
        {payments.map((payment) => (
          <button
            type="button"
            key={payment.id}
            value={payment.id}
            css={{
              fontSize: '1.5rem',
              fontWeight: 700,
              width: '18rem',
              height: '18rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0 4rem',
              backgroundColor: 'var(--white)',
              borderRadius: '12px',
              '&:hover': {
                opacity: '50%',
              },
              filter: 'var(--dropShadow)',
              // boxShadow:
              //   '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
            }}
          >
            <img
              src={payment.img}
              alt={payment.id}
              css={{
                width: '6rem',
                height: '6rem',
                margin: '0 0 1.75rem 0',
              }}
            />
            {payment.content}
          </button>
        ))}
      </div>
      <div
        css={{
          color: 'var(--gray)',
          fontWeight: 600,
          fontSize: '1.25rem',
          margin: '3rem 0rem -3rem 0',
        }}
      >
        * 현금 결제는 카운터를 이용해주세요
      </div>
    </div>
  );
}
